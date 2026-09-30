import json
from pathlib import Path

import requests


STREET_QUERY_URL = (
    "https://gis.burnaby.ca/arcgis/rest/services/"
    "OpenData/OpenData5/MapServer/8/query"
)

RAW_DATA_DIR = Path("data/raw")
STREET_OUTPUT_PATH = RAW_DATA_DIR / "burnaby_streets.geojson"

def fetch_street_count() -> int:
    """Return the number of street features available from Burnaby Open Data."""
    params = {
        "where": "1=1",
        "returnCountOnly": "true",
        "f": "json",
    }

    response = requests.get(STREET_QUERY_URL, params=params, timeout=30)
    response.raise_for_status()

    data = response.json()
    return data["count"]

def fetch_streets(offset: int = 0, limit: int = 1000) -> dict:
    """Fetch one page of Burnaby street features as GeoJSON."""
    params = {
        "where": "1=1",
        "outFields": "*",
        "outSR": "4326",
        "f": "geojson",
        "resultOffset": offset,
        "resultRecordCount": limit,
    }

    response = requests.get(STREET_QUERY_URL, params=params, timeout=30)
    response.raise_for_status()

    return response.json()

def fetch_all_streets(page_size: int = 1000) -> dict:
    """Fetch all Burnaby street features as a single GeoJSON FeatureCollection."""
    all_features = []
    offset = 0

    while True:
        page = fetch_streets(offset=offset, limit=page_size)
        features = page.get("features", [])

        if not features:
            break

        all_features.extend(features)
        offset += len(features)

        if len(features) < page_size:
            break
        expected_count = fetch_street_count()

    if len(all_features) != expected_count:
        raise RuntimeError(
            f"Incomplete street retrieval: expected {expected_count}, "
            f"received {len(all_features)}"
        )        
    return {
        "type": "FeatureCollection",
        "features": all_features,
    }

def save_streets_geojson(streets: dict) -> Path:
    """Save the Burnaby street network as a raw GeoJSON snapshot."""
    RAW_DATA_DIR.mkdir(parents=True, exist_ok=True)

    with STREET_OUTPUT_PATH.open("w", encoding="utf-8") as file:
        json.dump(streets, file, ensure_ascii=False)

    return STREET_OUTPUT_PATH

if __name__ == "__main__":
    expected_count = fetch_street_count()
    print(f"Burnaby street features available: {expected_count:,}")

    streets = fetch_all_streets()
    retrieved_count = len(streets["features"])

    print(f"Burnaby street features retrieved: {retrieved_count:,}")
    print(f"Complete retrieval: {retrieved_count == expected_count}")

    output_path = save_streets_geojson(streets)
    print(f"Saved GeoJSON: {output_path}")