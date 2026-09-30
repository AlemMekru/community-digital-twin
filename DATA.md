# Data Foundation

## Purpose

Document the real-world data sources used to construct, update, and evaluate
the community digital twin.

## Initial Case Study

Burnaby, British Columbia, Canada.

## Data Principles

- Prefer authoritative public data sources
- Preserve source provenance
- Record update timestamps and temporal coverage
- Preserve geospatial information where available
- Separate raw source data from transformed twin state
- Document data quality and uncertainty
- Design ingestion so additional communities can be supported later

## Initial Data Domains

### Transportation and Mobility
Road networks, intersections, traffic infrastructure, transit, cycling,
pedestrian infrastructure, and mobility-related observations.

### Built Environment
Buildings, parcels, zoning, development, land use, and municipal facilities.

### Environment
Terrain, elevation, parks, natural features, climate, and environmental data.

### Community
Population, neighbourhood, demographic, socioeconomic, and public-service data.

### Infrastructure
Municipal infrastructure and other publicly available infrastructure datasets.

## Data Source Registry

Specific datasets, APIs, schemas, update frequencies, licences, and provenance
will be documented here as they are incorporated into the platform.

### City of Burnaby Open Data

- **Provider:** City of Burnaby
- **Type:** Municipal open data and geospatial services
- **Role:** Primary authoritative data source for the Burnaby case study
- **Domains:** Transportation, land use, infrastructure, facilities, environment, and other municipal datasets
- **Integration status:** Data-source discovery

#### Initial Dataset: Road Network

- **Domain:** Transportation and mobility
- **Purpose:** Establish the first geospatial entity layer of the Burnaby digital twin
- **Twin entity:** Road segment
- **Geometry:** Polyline
- **Planned use:** Spatial representation, network relationships, mobility analytics, and future decision-support scenarios
- **Ingestion status:** Not started

- **Source dataset:** Street
- **Provider:** City of Burnaby
- **Service:** ArcGIS REST Feature Service
- **Layer:** OpenData5 / MapServer / 8
- **Access:** Public REST API
- **Record count observed:** 4,804
- **Source status:** Authoritative
- **Last update observed:** 2026-01-21
- **Canonical API layer:** https://gis.burnaby.ca/arcgis/rest/services/OpenData/OpenData5/MapServer/8
- **Geometry:** Polyline
- **Native spatial reference:** EPSG:26910
- **Supported query formats:** JSON, GeoJSON
- **API record limit:** 1,000 records per request

## Status

- **Ingestion status:** Implemented
- **Ingestion method:** Paginated ArcGIS REST API retrieval
- **Output format:** GeoJSON
- **Output spatial reference:** EPSG:4326
- **Completeness validation:** Retrieved feature count is validated against the authoritative API count
- **Raw snapshot:** Generated locally and excluded from version control