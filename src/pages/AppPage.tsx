import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plane, LogOut, BellRing } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import type { User } from "@supabase/supabase-js";

export default function AppPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ?? null));
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate("/", { replace: true });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Plane className="size-4" />
            </span>
            Flight Price Notifier
          </div>
          <div className="flex items-center gap-4">
            {user && (
              <span className="hidden text-sm text-muted-foreground sm:inline">
                Hi {user.email}
              </span>
            )}
            <Button variant="outline" size="sm" onClick={handleSignOut} className="gap-2">
              <LogOut className="size-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="hero-glow">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {user ? `Hi ${user.email}` : "Dashboard"}
          </h1>
          <div className="mt-8 w-full rounded-2xl border border-border bg-card p-10">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <BellRing className="size-7" />
            </span>
            <p className="mt-6 text-lg font-medium leading-relaxed">
              你的航線追蹤儀表板即將上線 — 下一個里程碑會加上訂閱航線的功能。
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Your dashboard is coming soon. Route-subscription will be added in the next milestone.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
