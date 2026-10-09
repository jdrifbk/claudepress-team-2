import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClaudePress",
  description: "Un blog con il suo CMS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <header className="bevel border-x-0 border-t-0 bg-blu">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-6 py-4">
            <Link href="/" className="text-3xl">
              <span className="twinkle text-giallo" aria-hidden="true">
                ✦
              </span>{" "}
              <span className="wordart">ClaudePress</span>{" "}
              <span className="twinkle text-giallo" aria-hidden="true">
                ✦
              </span>
            </Link>
            <nav className="flex items-center gap-3 text-base font-bold">
              <Link href="/" className="text-white hover:text-giallo">
                Blog
              </Link>
              <span className="diamond" aria-hidden="true" />
              <Link href="/admin/posts" className="text-white hover:text-giallo">
                Backoffice
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">{children}</main>
        <footer className="bevel border-x-0 border-b-0 bg-blu py-3 text-center text-sm text-white">
          <span className="diamond" aria-hidden="true" /> Forza Napoli{" "}
          <span className="diamond" aria-hidden="true" />
        </footer>
      </body>
    </html>
  );
}
