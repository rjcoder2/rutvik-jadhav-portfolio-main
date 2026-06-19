export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-28 text-ink-foreground md:py-40">
      <h2
        aria-hidden
        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 select-none font-display font-black text-white/[0.04]"
        style={{ fontSize: "clamp(8rem, 28vw, 26rem)" }}
      >
        ABOUT
      </h2>

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-mono-caps text-white/60 reveal">01 — About</p>
          <h3
            className="mt-6 font-display font-black reveal"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Data with
            <br />
            purpose.
          </h3>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-lg leading-relaxed text-white/80 reveal md:text-xl">
            Rutvik Jadhav is a motivated MCA student and aspiring Data Analyst with
            foundational expertise in Power BI, SQL, Excel, and Python. Based in
            Maharashtra, India, he combines strong analytical thinking with a
            passion for data-driven storytelling.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/60 reveal md:text-xl">
            Whether building interactive dashboards or exploring datasets to surface
            insights, Rutvik approaches every problem with curiosity, precision,
            and a commitment to continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
}
