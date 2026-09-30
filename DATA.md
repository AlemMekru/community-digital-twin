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
- **Geometry:** Line
- **Planned use:** Spatial representation, network relationships, mobility analytics, and future decision-support scenarios
- **Ingestion status:** Not started

## Status

Initial data inventory in progress.