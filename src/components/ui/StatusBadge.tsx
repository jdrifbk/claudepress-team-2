import { StatusBadgeProps } from "@/contracts/blog";

export function StatusBadge({ status }: StatusBadgeProps) {
  const isPublished = status === "published";
  const bgColor = isPublished ? "bg-green-100" : "bg-yellow-100";
  const textColor = isPublished ? "text-green-800" : "text-yellow-800";
  const label = isPublished ? "Pubblicato" : "Bozza";

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor}`}>
      {label}
    </span>
  );
}
