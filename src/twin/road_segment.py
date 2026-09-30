from dataclasses import dataclass
from typing import Any


@dataclass
class RoadSegment:
    """Digital-twin representation of a Burnaby road segment."""

    segment_id: str
    street_name: str | None
    street_class: str | None
    ownership: str | None
    number_of_lanes: int | None
    segment_length: float | None
    service_status: str | None
    geometry: dict[str, Any]