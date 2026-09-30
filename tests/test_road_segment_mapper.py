from src.twin.mappers import road_segment_from_feature


def test_road_segment_from_feature():
    feature = {
        "type": "Feature",
        "properties": {
            "COMPKEY": 158159,
            "STREETNAME": "ARDINGLEY",
            "STREETCLASS_desc": "Residential",
            "OWN": "CITY",
            "NOLANES": 2,
            "SEGLEN": 91,
            "SERVSTAT": "I",
        },
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [-122.9723, 49.2519],
                [-122.9731, 49.2514],
            ],
        },
    }

    road = road_segment_from_feature(feature)

    assert road.segment_id == "158159"
    assert road.street_name == "ARDINGLEY"
    assert road.street_class == "Residential"
    assert road.ownership == "CITY"
    assert road.number_of_lanes == 2
    assert road.segment_length == 91
    assert road.service_status == "I"
    assert road.geometry["type"] == "LineString"