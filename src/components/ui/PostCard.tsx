import type { PostCardProps } from "@/contracts/blog";

export function PostCard({ title, excerpt, author, date, href }: PostCardProps) {
  const dataFormattata = new Date(date).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <a
      href={href}
      className="bevel block rounded-2xl bg-white p-5 shadow-[6px_6px_0_#0b2e8a] transition-transform hover:-translate-y-0.5 hover:bg-yellow-50"
    >
      <h3 className="text-xl font-black text-blu">
        <span className="twinkle mr-1 text-rosa" aria-hidden="true">
          ✦
        </span>
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-700">{excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-blu">
        <span className="diamond" aria-hidden="true" />
        <span>{author}</span>
        <span className="diamond" aria-hidden="true" />
        <time dateTime={date}>{dataFormattata}</time>
      </div>
    </a>
  );
}
