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
      className="block rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
      <div className="mt-4 text-xs text-gray-500">
        <span>{author}</span>
        <span className="mx-1">·</span>
        <time dateTime={date}>{dataFormattata}</time>
      </div>
    </a>
  );
}
