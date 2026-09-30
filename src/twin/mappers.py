from .road_segment import RoadSegment


def road_segment_from_feature(feature: dict) -> RoadSegment:
    """Convert a Burnaby Street GeoJSON feature into a RoadSegment twin entity."""
    properties = feature["properties"]

    return RoadSegment(
        segment_id=str(properties["COMPKEY"]),
        street_name=properties.get("STREETNAME"),
        street_class=properties.get("STREETCLASS_desc"),
        ownership=properties.get("OWN"),
        number_of_lanes=properties.get("NOLANES"),
        segment_length=properties.get("SEGLEN"),
        service_status=properties.get("SERVSTAT"),
        geometry=feature["geometry"],
    )