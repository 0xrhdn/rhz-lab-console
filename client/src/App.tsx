// RHZ LAB / Instrument Console: persistent workstation shell, restrained teal signals, tactile controls.
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { Search, TerminalSquare, Command, PanelLeft, X } from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Operations from "./pages/Operations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route path="/challenges" component={Operations} />
      <Route path="/paths" component={Operations} />
      <Route path="/labs" component={Operations} />
      <Route path="/notes" component={Operations} />
      <Route path="/leaderboard" component={Operations} />
      <Route path="/terminal" component={Operations} />
      <Route path="/settings" component={Operations} />
      <Route path="/creator" component={Operations} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen(true);
      }
      if (event.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <div className="app-shell">
            <aside className={`console-sidebar ${mobileNav ? "is-open" : ""}`}>
              <div className="brand-lockup">
                <div className="brand-mark"><img src="/manus-storage/rhz-lab-mark_085e7497.png" alt="RHZ LAB mark" /></div>
                <div><div className="brand-name">RHZ <span>LAB</span></div><div className="brand-sub">SECURITY LEARNING OS</div></div>
                <button className="mobile-close" onClick={() => setMobileNav(false)} aria-label="Tutup navigasi"><X size={17} /></button>
              </div>
              <div className="side-section-label">Workspace</div>
              <nav className="side-nav" aria-label="Navigasi utama">
                <a className="nav-item active" href="#dashboard"><span className="nav-glyph">⌁</span>Dashboard<span className="nav-ping" /></a>
                <a className="nav-item" href="/paths"><span className="nav-glyph">◈</span>Learn</a>
                <a className="nav-item" href="/challenges"><span className="nav-glyph">▣</span>Challenges<span className="nav-count">24</span></a>
                <a className="nav-item" href="/labs"><span className="nav-glyph">◌</span>Labs</a>
                <a className="nav-item" href="/labs"><span className="nav-glyph">▤</span>Machines</a>
                <a className="nav-item" href="/paths"><span className="nav-glyph">△</span>Academy</a>
                <a className="nav-item" href="/paths"><span className="nav-glyph">↗</span>Learning paths</a>
              </nav>
              <div className="side-divider" />
              <div className="side-section-label">Personal tools</div>
              <nav className="side-nav">
                <a className="nav-item" href="/terminal"><TerminalSquare size={15} />Terminal</a>
                <a className="nav-item" href="/notes"><span className="nav-glyph">▤</span>Notes</a>
                <a className="nav-item" href="/notes"><span className="nav-glyph">⌑</span>Bookmarks</a>
              </nav>
              <div className="sidebar-footer">
                <div className="system-readout"><span className="live-dot" /> SYSTEM ONLINE <span className="mono">v0.8.4</span></div>
                <div className="sidebar-user"><div className="avatar">AR</div><div><strong>alex.rhz</strong><span>Operator / Level 12</span></div><span className="chevron">⌄</span></div>
              </div>
            </aside>
            {mobileNav && <button className="mobile-scrim" onClick={() => setMobileNav(false)} aria-label="Tutup menu" />}
            <main className="main-frame">
              <header className="topbar">
                <div className="topbar-left"><button className="mobile-menu" onClick={() => setMobileNav(true)} aria-label="Buka navigasi"><PanelLeft size={17} /></button><span className="breadcrumb">WORKSPACE / <b>DASHBOARD</b></span></div>
                <button className="search-trigger" onClick={() => setPaletteOpen(true)}><Search size={15} /><span>Search the lab</span><kbd>⌘ K</kbd></button>
                <div className="topbar-right"><span className="top-status"><span className="live-dot" /> ALL SYSTEMS NOMINAL</span><button className="icon-button" aria-label="Buka command palette" onClick={() => setPaletteOpen(true)}><Command size={17} /></button><div className="top-avatar">AR</div></div>
              </header>
              <Home />
            </main>
            {paletteOpen && <div className="palette-overlay" onClick={() => setPaletteOpen(false)}><div className="command-palette" onClick={(e) => e.stopPropagation()}><div className="palette-search"><Search size={18} /><input autoFocus placeholder="Search challenges, labs, skills..." /><kbd>ESC</kbd></div><div className="palette-label">QUICK ACTIONS</div>{["Open Dashboard","Find a challenge","Start a lab","Open terminal","View skill tree","Open Creator Panel"].map((item, i) => <button key={item} className="palette-item" onClick={() => setPaletteOpen(false)}><span className="palette-key">{i + 1}</span>{item}<span className="palette-arrow">↵</span></button>)}<div className="palette-foot"><span><kbd>↑↓</kbd> Navigate</span><span><kbd>↵</kbd> Select</span><span><kbd>esc</kbd> Close</span></div></div></div>}
          </div>
          <Toaster theme="dark" />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
