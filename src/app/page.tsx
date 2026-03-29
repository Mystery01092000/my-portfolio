import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function Home() {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      

<nav className="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl shadow-blue-900/10">
<div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<div className="text-2xl font-bold tracking-tighter text-blue-400 dark:text-blue-400 font-headline">PT</div>
<div className="hidden md:flex items-center space-x-8 font-headline text-sm tracking-widest uppercase">
<a className="text-emerald-400 font-bold border-b-2 border-emerald-400 pb-1 transition-all duration-300" href="#experience">Experience</a>
<a className="text-slate-400 hover:text-blue-300 transition-colors transition-all duration-300" href="#projects">Projects</a>
<a className="text-slate-400 hover:text-blue-300 transition-colors transition-all duration-300" href="#skills">Skills</a>
<a className="text-slate-400 hover:text-blue-300 transition-colors transition-all duration-300" href="#opensource">Open Source</a>
<a className="text-slate-400 hover:text-blue-300 transition-colors transition-all duration-300" href="#contact">Contact</a>
</div>
<a href="/my-portfolio/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary-container text-on-primary-container px-6 py-2 font-headline text-xs tracking-widest uppercase rounded-lg hover:bg-primary transition-all duration-300 scale-95 active:scale-90 inline-block text-center cursor-pointer">
                Resume
            </a>
</div>
</nav>
<main className="relative">
<div className="ambient-glow top-0 left-[-100px]"></div>
<div className="ambient-glow bottom-0 right-[-100px]"></div>

<HeroGeometric />

<section className="py-24 px-6 bg-surface-container-low" id="experience">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Engineering Career</h2>
<div className="h-1 w-24 bg-secondary"></div>
</div>
<div className="grid md:grid-cols-2 gap-12 relative">

<div className="space-y-16">
<div className="relative pl-12 border-l-2 border-outline-variant/30">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(78,222,163,0.5)]"></div>
<span className="font-label text-xs text-outline tracking-widest uppercase mb-2 block">2022 - PRESENT</span>
<h3 className="font-headline text-2xl font-bold text-primary mb-1">Centricity Wealth Tech</h3>
<p className="font-body text-lg font-medium text-on-surface mb-4">Senior Developer & System Architect</p>
<p className="font-body text-on-surface-variant leading-relaxed">
                                Lead architect for high-frequency trading (HFT) infrastructure and backend services. Designed and implemented the Service Mesh for core platforms, ensuring fault-tolerant multi-service communication using Golang.
                            </p>
</div>
<div className="relative pl-12 border-l-2 border-outline-variant/30">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-surface-container-highest border-2 border-outline-variant"></div>
<span className="font-label text-xs text-outline tracking-widest uppercase mb-2 block">2020 - 2022</span>
<h3 className="font-headline text-2xl font-bold text-primary mb-1">Lotusdew</h3>
<p className="font-body text-lg font-medium text-on-surface mb-4">Software Engineer</p>
<p className="font-body text-on-surface-variant leading-relaxed">
                                Developed enterprise-grade web applications with a focus on investment advisory workflows. Integrated complex data visualization layers for market sentiment analysis.
                            </p>
</div>
</div>
<div className="hidden md:flex items-center justify-center">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative w-80 h-80 rounded-full bg-surface-container overflow-hidden border border-outline-variant/20">
<img className="w-full h-full object-cover opacity-60" data-alt="Abstract cyber security and data pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuoIVhRMnmb21Kh7P5M8kas9vrbJrVNkbeW5gXsXuJ5CSI-SMYHMZI7fFLxdwcFYzlLznp4EZ1RIZUMqfv0UWWLQeLAZKYuHoEdhB5SzvNxda2XAzost7BPxRDdGKSLl-Nd_yWkt25Nwvj7AHDzIai6jZpgb3VyZlfhBKR0SNNtsEAzB79aphVh5CeuHZENhNz6SnLxzt_hjrmMFEUKQZMOyCYtP54NnQR9FymhPnCDeWGe5o0Mu4lxN2LtZ8CqZNfbT5MiFyzyNtl"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Flagship Projects</h2>
<p className="font-body text-on-surface-variant max-w-xl">Deep-dives into systems designed for scale, security, and financial precision.</p>
</div>
<div className="font-label text-6xl font-black text-surface-container-highest select-none">02 // CODE</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-panel group p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 hover:translate-y-[-8px]">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-primary/10 rounded-xl text-primary">
<span className="material-symbols-outlined text-3xl">currency_exchange</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">open_in_new</span>
</div>
<h3 className="font-headline text-xl font-bold mb-3">Trading Platform</h3>
<p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                            Low-latency execution engine built with Golang, featuring real-time order matching and risk management protocols.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">Golang</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">gRPC</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">Redis</span>
</div>
</div>

<div className="glass-panel group p-8 rounded-2xl border border-outline-variant/10 hover:border-secondary/30 transition-all duration-500 hover:translate-y-[-8px]">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-secondary/10 rounded-xl text-secondary">
<span className="material-symbols-outlined text-3xl">query_stats</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">open_in_new</span>
</div>
<h3 className="font-headline text-xl font-bold mb-3">Advisory Platform</h3>
<p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                            Cloud-native investment advisor using Python and AWS Lambda to process large-scale financial datasets and generate alpha.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">Python</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">AWS</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">PostgreSQL</span>
</div>
</div>

<div className="glass-panel group p-8 rounded-2xl border border-outline-variant/10 hover:border-tertiary/30 transition-all duration-500 hover:translate-y-[-8px]">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-tertiary/10 rounded-xl text-tertiary">
<span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-tertiary transition-colors">open_in_new</span>
</div>
<h3 className="font-headline text-xl font-bold mb-3">Brokerage Backoffice</h3>
<p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                            Highly concurrent operations hub built with Elixir/Phoenix, managing thousands of simultaneous user sessions and ledger updates.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">Elixir</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">Phoenix</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">Erlang</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface-container-low overflow-hidden relative" id="skills">
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16 text-center">
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Technical Proficiency</h2>
<p className="font-body text-on-surface-variant">The tools I use to solve complex engineering challenges.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-3xl bg-surface-container border border-outline-variant/10">
<h4 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">terminal</span> Languages
                        </h4>
<div className="flex flex-wrap gap-3">
<div className="group flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-label text-xs font-bold tracking-wide">GOLANG</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-label text-xs font-bold tracking-wide">PYTHON</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-label text-xs font-bold tracking-wide">ELIXIR</span>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-surface-container border border-outline-variant/10">
<h4 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">layers</span> Frontend
                        </h4>
<div className="flex flex-wrap gap-3">
<div className="group flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-label text-xs font-bold tracking-wide">NEXT.JS</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-label text-xs font-bold tracking-wide">TAILWIND</span>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-surface-container border border-outline-variant/10">
<h4 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">database</span> Infrastructure
                        </h4>
<div className="flex flex-wrap gap-3">
<div className="group flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-label text-xs font-bold tracking-wide">AWS</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-label text-xs font-bold tracking-wide">POSTGRES</span>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-surface-container border border-outline-variant/10">
<h4 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">neurology</span> Intelligence
                        </h4>
<div className="flex flex-wrap gap-3">
<div className="group flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-label text-xs font-bold tracking-wide">AI/ML</span>
</div>
<div className="group flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-label text-xs font-bold tracking-wide">LLM ORCH</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
<span className="material-symbols-outlined text-[400px]">hub</span>
</div>
</section>
</main>

<section className="py-24 px-6 bg-surface-container-low" id="opensource">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Open Source</h2>
<div className="h-1 w-24 bg-secondary"></div>
<p className="font-body text-on-surface-variant mt-6 max-w-xl">Contributing to the tools I use and care about. Bug fixes, new features, and collaboration on projects in finance, developer tooling, and AI/ML.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<a href="https://github.com/marimo-team/marimo/pull/8918" target="_blank" rel="noopener noreferrer" className="glass-panel group p-8 rounded-2xl border border-outline-variant/10 hover:border-secondary/40 transition-all duration-500 hover:translate-y-[-4px] block">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-secondary/10 rounded-lg text-secondary">
<span className="material-symbols-outlined text-2xl">merge</span>
</div>
<div>
<p className="font-label text-xs text-outline tracking-widest uppercase">marimo-team/marimo</p>
<span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-label font-bold tracking-widest uppercase">Open PR #8918</span>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">open_in_new</span>
</div>
<h3 className="font-headline text-lg font-bold mb-2">Fix mo.ui.form submit inconsistencies</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">Fixed 3 bugs: Ctrl+Enter now routes through form validation, Shift+Enter no longer bypasses the form buffer, and wrapped element on_change no longer double-fires on submission.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">Python</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">TypeScript</span>
<span className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/20">Bug Fix</span>
</div>
</a>
<div className="glass-panel p-8 rounded-2xl border border-outline-variant/10 border-dashed flex flex-col items-center justify-center text-center gap-4 min-h-[200px]">
<span className="material-symbols-outlined text-4xl text-outline/50">add_circle</span>
<div>
<p className="font-headline font-bold text-on-surface-variant">More coming soon</p>
<p className="font-body text-sm text-outline mt-1">Actively contributing to backtesting.py, cinar/indicator, and other Python/Go projects</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center">
<h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
<p className="font-body text-on-surface-variant max-w-xl mx-auto">Open to OSS collaboration, consulting in fintech infrastructure, or just a good conversation about systems design.</p>
</div>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<a href="https://www.linkedin.com/in/pranav-tomar-a31476172/" target="_blank" rel="noopener noreferrer" className="glass-panel group flex items-center gap-4 px-8 py-5 rounded-2xl border border-outline-variant/10 hover:border-primary/40 transition-all duration-300 hover:translate-y-[-4px] min-w-[220px]">
<span className="material-symbols-outlined text-2xl text-primary">person</span>
<div>
<p className="font-label text-xs text-outline tracking-widest uppercase">Connect</p>
<p className="font-headline font-bold">LinkedIn</p>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors ml-auto">open_in_new</span>
</a>
<a href="https://github.com/Mystery01092000" target="_blank" rel="noopener noreferrer" className="glass-panel group flex items-center gap-4 px-8 py-5 rounded-2xl border border-outline-variant/10 hover:border-secondary/40 transition-all duration-300 hover:translate-y-[-4px] min-w-[220px]">
<span className="material-symbols-outlined text-2xl text-secondary">code</span>
<div>
<p className="font-label text-xs text-outline tracking-widest uppercase">Collaborate</p>
<p className="font-headline font-bold">GitHub</p>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors ml-auto">open_in_new</span>
</a>
<a href="https://www.linkedin.com/in/pranav-tomar-a31476172/" target="_blank" rel="noopener noreferrer" className="glass-panel group flex items-center gap-4 px-8 py-5 rounded-2xl border border-outline-variant/10 hover:border-tertiary/40 transition-all duration-300 hover:translate-y-[-4px] min-w-[220px]">
<span className="material-symbols-outlined text-2xl text-tertiary">mail</span>
<div>
<p className="font-label text-xs text-outline tracking-widest uppercase">Message</p>
<p className="font-headline font-bold">pranavtom1223@gmail.com</p>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-slate-950 w-full py-12 border-t border-slate-900 flex flex-col items-center justify-center space-y-4 px-4">
<div className="flex space-x-8 mb-4">
<a className="text-slate-500 hover:text-blue-400 transition-colors font-inter text-xs tracking-tight opacity-70 hover:opacity-100" href="https://www.linkedin.com/in/pranav-tomar-a31476172/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a className="text-slate-500 hover:text-blue-400 transition-colors font-inter text-xs tracking-tight opacity-70 hover:opacity-100" href="https://github.com/Mystery01092000" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>
<p className="font-inter text-xs tracking-tight opacity-70 text-slate-500">
            © 2026 Pranav Tomar. Built for the Financial Frontier.
        </p>
</footer>

    </div>
  );
}
