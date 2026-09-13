import { Link } from "react-router-dom";
import { Plane, Radar, BellRing, CalendarX, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const features = [
  {
    icon: Radar,
    title: "盯緊熱門航線",
    subtitle: "Always-on route watching",
    description: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知",
    subtitle: "Target-price email alerts",
    description: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: CalendarX,
    title: "隨時取消",
    subtitle: "Cancel anytime",
    description: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Plane className="size-4" />
            </span>
            Flight Price Notifier
          </div>
          <Button asChild>
            <Link to="/auth">Sign in / 登入</Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-glow">
        <div className="mx-auto max-w-4xl px-4 pb-24 pt-24 text-center sm:px-6 sm:pt-32">
          <Reveal>
            <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
              <Plane className="size-3.5 text-primary" />
              機票降價通知 · From Taipei
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Flight Price Notifier
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-xl font-medium text-foreground sm:text-2xl">
              設定航線與目標價，機票降價就通知你
            </p>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Set a route and a target price — we email you when the fare drops.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex items-center justify-center">
              <Button asChild size="lg" className="gap-2 px-8 text-base">
                <Link to="/auth">
                  立即開始
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
              怎麼運作
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <f.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary/80">
                    {f.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-8 text-sm text-muted-foreground sm:px-6">
          © 2026 Flight Price Notifier
        </div>
      </footer>
    </div>
  );
}
