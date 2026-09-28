export default function HomePage() {
  const fixtures = [
    { home: 'PSG', away: 'OM', time: '20:45', competition: 'Ligue 1', status: 'LIVE', score: '1 - 1' },
    { home: 'Arsenal', away: 'Liverpool', time: '21:00', competition: 'Premier League', status: 'NEXT', score: '—' },
    { home: 'Real Madrid', away: 'Barcelone', time: '22:00', competition: 'LaLiga', status: 'PREVIEW', score: '—' },
  ];

  const stats = [
    { label: 'Matchs suivis', value: '1,248' },
    { label: 'Analyses JD', value: '94%' },
    { label: 'Données validées', value: '99.2%' },
    { label: 'Alertes actives', value: '18' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-black tracking-tight">FOOT INTELLIGENCE</div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#">ACCUEIL</a>
            <a href="#">MATCHS</a>
            <a href="#">LIVE</a>
            <a href="#">SCANNER</a>
            <a href="#">ANALYSE</a>
            <a href="#">FAVORIS</a>
          </nav>
          <button className="rounded-full bg-sky-400 px-4 py-2 text-sm font-medium text-slate-950">Premium</button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-[0_0_30px_rgba(96,165,250,0.25)]">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-sky-400">JD — Système XG Integral</p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Analyse football intelligente, live et transparente.</h1>
            <p className="mt-5 max-w-xl text-slate-300">
              Une plateforme premium pour suivre les matchs, analyser les données, comparer les projections et détecter les scénarios statistiquement cohérents.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-emerald-400 px-5 py-3 font-semibold text-slate-950">Analyser le match</button>
              <button className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-white">Ouvrir le scanner</button>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900 p-6">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="text-2xl font-black text-white">{item.value}</div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Matchs du jour</h2>
          <span className="text-sm text-slate-400">Mise à jour il y a 4 min</span>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {fixtures.map((fixture) => (
            <article key={`${fixture.home}-${fixture.away}`} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>{fixture.competition}</span>
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-emerald-300">{fixture.status}</span>
              </div>
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>{fixture.home}</span>
                <span className="text-slate-400">vs</span>
                <span>{fixture.away}</span>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-3">
                <span className="text-slate-400">Heure</span>
                <span className="font-medium text-white">{fixture.time}</span>
              </div>
              <div className="mt-2 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-3">
                <span className="text-slate-400">Score</span>
                <span className="font-bold text-white">{fixture.score}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
