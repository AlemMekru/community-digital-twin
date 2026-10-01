export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="relative z-20 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <div>
            <p className="text-base font-semibold tracking-tight">
              Burnaby Digital Twin
            </p>
            <p className="text-xs text-slate-500">
              Applied AI Research Platform
            </p>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#research" className="transition hover:text-white">
              Research
            </a>

            <a href="#architecture" className="transition hover:text-white">
              Architecture
            </a>

            <a href="#data" className="transition hover:text-white">
              Data
            </a>

            <a
              href="https://github.com/AlemMekru/community-digital-twin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 px-4 py-2 transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Interactive 3D Burnaby City Model */}
      <section className="border-b border-slate-800 bg-slate-950">
        <iframe
          src="/burnaby-digital-twin.html"
          title="Burnaby Interactive 3D City Model"
          className="h-[68vh] min-h-[560px] max-h-[720px] w-full border-0"
          loading="eager"
          allowFullScreen
        />
      </section>

      {/* Research */}
      <section
        id="research"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-24 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Research Direction
          </p>

          <div className="mt-5 grid gap-12 lg:grid-cols-2">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              AI-driven decision intelligence for community digital twins
            </h2>

            <div>
              <p className="text-lg leading-8 text-slate-300">
                This research investigates how real-world community data,
                digital-twin state, predictive analytics, scenario simulation
                and AI-driven decision intelligence can be integrated into an
                explainable and interoperable decision-support platform.
              </p>

              <p className="mt-5 leading-7 text-slate-400">
                Burnaby, British Columbia serves as the initial real-world case
                study. The current 3D environment is the visualization layer of
                the broader research platform.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <Card
              number="01"
              title="Digital Twin State"
              text="Representing community entities, spatial relationships and evolving state independently of source-system schemas."
            />

            <Card
              number="02"
              title="AI Decision Intelligence"
              text="Exploring machine learning, language models and agentic systems for evidence-grounded decision support."
            />

            <Card
              number="03"
              title="Explainability & Evidence"
              text="Connecting AI outputs to provenance, uncertainty, supporting evidence and human oversight."
            />
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="bg-slate-900/35">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            System Architecture
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight">
            From real-world community data to explainable decision support
          </h2>

          <div className="mt-12 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Community Data",
              "Data Integration",
              "Twin State",
              "Prediction & Simulation",
              "AI Intelligence",
              "Decision Support",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-800 bg-slate-950 p-5"
              >
                <p className="text-xs text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data */}
      <section
        id="data"
        className="border-y border-slate-800 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Data Foundation
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight">
            Grounded in authoritative municipal data
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            The initial implementation uses City of Burnaby Open Data. The
            first implemented ingestion pipeline retrieves all 4,804 street
            features through the municipal ArcGIS REST service, validates the
            authoritative feature count and maps source records into
            digital-twin road-segment entities.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            <Metric value="4,804" label="Street features ingested" />
            <Metric value="54,789" label="Building footprints visualized" />
            <Metric value="3D" label="Interactive city representation" />
            <Metric value="Burnaby Open Data" label="Primary municipal source" />
          </div>

          <div className="mt-12 rounded-xl border border-amber-400/20 bg-amber-400/5 p-5 text-sm leading-6 text-slate-300">
            The current 3D environment visualizes municipal spatial data with
            illustrative animation. Vehicle and transit movement does not
            represent live City of Burnaby operational data. Predictive and
            scenario simulation capabilities are part of the ongoing research
            and development.
          </div>
        </div>
      </section>

      {/* Research Status */}
      <section className="bg-slate-900/35">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                Research Status
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Active research and development
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <StatusItem
                title="Implemented"
                text="Municipal street-data ingestion, twin-domain mapping, automated tests and interactive 3D visualization."
              />

              <StatusItem
                title="In Progress"
                text="Digital Twin State Layer, persistent geospatial state, additional municipal entities and platform integration."
              />

              <StatusItem
                title="Planned"
                text="Predictive models, scenario simulation, explainable AI and evidence-grounded agentic decision support."
              />

              <StatusItem
                title="Research Context"
                text="Interoperability and transferability between Canadian municipal applications and European smart-community research."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <p className="font-medium text-slate-300">
              Burnaby Digital Twin
            </p>

            <p className="mt-1">
              Applied AI Research Platform
            </p>
          </div>

          <div className="max-w-xl md:text-right">
            <p className="text-slate-400">
              Alem Mekru · PhD Researcher in Applied Artificial Intelligence
            </p>

            <p className="mt-2">
              Independent research project. Not affiliated with or endorsed by
              the City of Burnaby.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
      <p className="text-sm text-cyan-400">{number}</p>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {text}
      </p>
    </div>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
      <p className="text-lg font-semibold text-white">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
}

function StatusItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
      <h3 className="font-semibold text-slate-200">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {text}
      </p>
    </div>
  );
}