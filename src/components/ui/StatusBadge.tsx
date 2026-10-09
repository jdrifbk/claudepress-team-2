import { StatusBadgeProps } from "@/contracts/blog";

export function StatusBadge({ status }: StatusBadgeProps) {
  const isPublished = status === "published";
  const colors = isPublished ? "bg-lime text-blu" : "bg-giallo text-blu";
  const label = isPublished ? "Pubblicato" : "Bozza";

  return (
    <span
      className={`bevel inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-sm font-black ${colors}`}
    >
      <span className="diamond" aria-hidden="true" />
      {label}
    </span>
  );
}
