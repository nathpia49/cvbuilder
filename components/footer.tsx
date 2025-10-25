export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050b16] py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-center md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-slate-300">© {new Date().getFullYear()} Elevate CV Studio</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="transition hover:text-primary">Privacy</a>
          <a href="#" className="transition hover:text-primary">Terms</a>
          <a href="#" className="transition hover:text-primary">Support</a>
        </div>
      </div>
    </footer>
  );
}
