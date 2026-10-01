# Community Digital Twin

Research platform for AI-driven, explainable, and interoperable decision intelligence over community digital twins.

**Burnaby, British Columbia, Canada** is the initial real-world case study, presented publicly as **Burnaby Digital Twin**.

🌐 **Live Platform:** https://burnabydigitaltwin.ca

## Researcher

**Alem Mekru**  
PhD Researcher in Applied Artificial Intelligence  
Alma Mater Europaea University

## Research Focus

This project investigates how real-world community data, digital-twin state, predictive analytics, scenario simulation, and AI-driven decision intelligence can be integrated into an explainable and interoperable decision-support platform.

The research explores:

- Community digital twins
- AI-driven decision support
- Explainable AI
- Predictive analytics and scenario simulation
- Agentic AI
- Geospatial intelligence
- Human-in-the-loop decision making
- Interoperability and cross-jurisdictional transferability

## Initial Case Study

### Burnaby Digital Twin

Burnaby, British Columbia serves as the initial real-world implementation.

The current platform includes:

- City of Burnaby municipal open-data integration
- Paginated ArcGIS REST data ingestion
- 4,804 authoritative street features
- Digital-twin `RoadSegment` domain entities
- Automated data-mapping tests
- Interactive 3D Burnaby city visualization
- Building, street, green-space, and transit layers
- Next.js and TypeScript research frontend
- AWS-hosted production environment
- Automated CI/CD deployment from GitHub

The 3D environment visualizes municipal spatial data with illustrative animation. Vehicle and transit movement does not currently represent live City of Burnaby operational feeds.

## System Architecture

```text
Real-World Community Data
        ↓
Data Ingestion & Integration
        ↓
Digital Twin State Layer
        ↓
Analytics, Prediction & Simulation
        ↓
AI Decision Intelligence
        ↓
Explainability & Evidence
        ↓
Decision-Support Applications
```

## Technology Stack

### Current

- Python
- Next.js
- TypeScript
- React
- Tailwind CSS
- Three.js / WebGL
- ArcGIS REST APIs
- GeoJSON
- Pytest
- AWS S3
- AWS CloudFront
- AWS CodeBuild
- AWS CodePipeline
- AWS Certificate Manager
- Amazon Route 53

### Planned

- FastAPI
- PostgreSQL / PostGIS
- Predictive and simulation models
- LLM and agentic AI
- Evidence and provenance services
- Explainable AI

## Cloud Architecture

The public research platform is deployed on AWS using an automated CI/CD workflow.

```text
GitHub
  ↓
AWS CodePipeline
  ↓
AWS CodeBuild
  ↓
Amazon S3
  ↓
Amazon CloudFront
  ↓
HTTPS / TLS
  ↓
burnabydigitaltwin.ca
```

The deployment is hosted in the **AWS Canada (Central) region** where applicable, with CloudFront providing secure global content delivery.

## Research Status

**Active doctoral research and development.**

### Implemented

- Burnaby street-data ingestion pipeline
- Source-data completeness validation
- `RoadSegment` digital-twin entity
- Municipal-data-to-twin mapping
- Automated mapper testing
- Interactive Burnaby 3D visualization
- Research web platform
- AWS cloud deployment
- HTTPS custom domain
- GitHub-to-AWS CI/CD pipeline

### In Progress

- Digital Twin State Layer
- Persistent geospatial state
- Additional community entities
- Expanded municipal datasets
- Simulation capabilities

### Planned

- Predictive models
- Scenario simulation
- AI decision intelligence
- Explainability and evidence
- Agentic decision-support workflows
- Cross-community interoperability experiments

## Deployment

Production:

**https://burnabydigitaltwin.ca**

The production site is delivered through Amazon CloudFront from an Amazon S3 origin. Application builds and deployments are automated through AWS CodePipeline and AWS CodeBuild.

## Documentation

- [`RESEARCH.md`](RESEARCH.md) — research direction
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — system architecture
- [`DATA.md`](DATA.md) — data sources and ingestion

## Contact

For research collaboration, technical discussions, or professional inquiries:

- **Researcher:** Alem Mekru
- **Email:** alemzewd.alemayehu@almamater.si
- **LinkedIn:** https://www.linkedin.com/in/alemmekru/
- **GitHub:** https://github.com/AlemMekru
- **Live Platform:** https://burnabydigitaltwin.ca

Research and collaboration inquiries are welcome.

## Disclaimer

> Independent research project. Not affiliated with or endorsed by the City of Burnaby.