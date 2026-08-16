import { mono } from "@/app/fonts";

export default function Footer() {
  return (
    <footer
      className={`${mono.className} border-t border-white/10 bg-[#16201F] text-ink-muted`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-8 text-center text-xs md:flex-row md:justify-between md:gap-6 md:text-left md:text-sm">
        <p className="text-ink">&copy; 2026 Nick Fettig</p>
        <p>Made from scratch using Next.js &amp; TailwindCSS</p>
        <p>
          Landing &amp; boat pictures captured by my friend,{" "}
          <span className="text-ink">Mudia Atekha</span>!
        </p>
      </div>
    </footer>
  );
}
