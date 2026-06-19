import { Mail, Linkedin, MapPin, ArrowUpRight, Github, CheckCircle, AlertCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");
    
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    
    // Simulate sending delay for better UX
    setTimeout(() => {
      window.location.href = `mailto:jadhavrutvik95@gmail.com?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 text-ink-foreground md:py-40">
      <h2
        aria-hidden
        className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display font-black text-white/[0.04]"
        style={{ fontSize: "clamp(8rem, 26vw, 24rem)" }}
      >
        CONTACT
      </h2>

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <p className="font-mono-caps text-white/60 reveal">06 — Let&apos;s Work Together</p>
        <h2
          className="mt-6 font-display font-black reveal"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
        >
          Get in
          <br />
          Touch.
        </h2>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <form onSubmit={onSubmit} className="reveal md:col-span-7">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="font-mono-caps text-white/60">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-b border-white/30 bg-transparent py-3 text-lg text-white outline-none focus:border-white transition-colors placeholder:text-white/30"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono-caps text-white/60">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-b border-white/30 bg-transparent py-3 text-lg text-white outline-none focus:border-white transition-colors placeholder:text-white/30"
                  placeholder="your@email.com"
                />
              </label>
            </div>
            <label className="mt-8 flex flex-col gap-2">
              <span className="font-mono-caps text-white/60">Message</span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none border-b border-white/30 bg-transparent py-3 text-lg text-white outline-none focus:border-white transition-colors placeholder:text-white/30"
                placeholder="Your message..."
              />
            </label>

            {/* Status Messages */}
            {status === "error" && (
              <div className="mt-4 flex items-center gap-2 text-red-400">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">Please fill in all fields</span>
              </div>
            )}
            {status === "sent" && (
              <div className="mt-4 flex items-center gap-2 text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm">Message ready! Your email client will open.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className={`mt-10 inline-flex items-center gap-3 rounded-sm bg-white px-8 py-4 font-mono-caps text-ink transition-all ${
                status === "sending" 
                  ? "opacity-50 cursor-not-allowed" 
                  : "hover:-translate-y-0.5 hover:shadow-lg"
              }`}
            >
              {status === "sending" ? (
                <>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-ink border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowUpRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <aside className="reveal space-y-8 md:col-span-4 md:col-start-9">
            <a
              href="mailto:jadhavrutvik95@gmail.com"
              className="group flex items-start gap-4 border-t border-white/20 pt-6 hover:border-white/50 transition-colors"
            >
              <Mail className="mt-1 h-5 w-5 text-white/60 group-hover:text-primary transition-colors" />
              <div>
                <p className="font-mono-caps text-white/60">Email</p>
                <p className="mt-2 text-lg text-white group-hover:underline">
                  jadhavrutvik95@gmail.com
                </p>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/rutvik-jadhav-ab7682275"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 border-t border-white/20 pt-6 hover:border-white/50 transition-colors"
            >
              <Linkedin className="mt-1 h-5 w-5 text-white/60 group-hover:text-primary transition-colors" />
              <div>
                <p className="font-mono-caps text-white/60">LinkedIn</p>
                <p className="mt-2 text-lg text-white group-hover:underline">
                  /in/rutvik-jadhav
                </p>
              </div>
            </a>
            <a
              href="https://github.com/rjcoder2"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 border-t border-white/20 pt-6 hover:border-white/50 transition-colors"
            >
              <Github className="mt-1 h-5 w-5 text-white/60 group-hover:text-primary transition-colors" />
              <div>
                <p className="font-mono-caps text-white/60">GitHub</p>
                <p className="mt-2 text-lg text-white group-hover:underline">
                  /rjcoder2
                </p>
              </div>
            </a>
            <div className="flex items-start gap-4 border-t border-white/20 pt-6">
              <MapPin className="mt-1 h-5 w-5 text-white/60" />
              <div>
                <p className="font-mono-caps text-white/60">Location</p>
                <p className="mt-2 text-lg text-white">Maharashtra, India</p>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="flex items-center gap-3 border-t border-white/20 pt-6">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/60">Available for opportunities</span>
            </div>
          </aside>
        </div>

        {/* Footer handled by Footer.tsx */}
      </div>
    </section>
  );
}