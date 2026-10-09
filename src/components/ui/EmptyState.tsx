import type { EmptyStateProps } from "@/contracts/blog";

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border-[3px] border-dashed border-blu bg-white/80 p-8 text-center">
      <p className="text-lg font-black text-blu">
        <span className="twinkle text-rosa" aria-hidden="true">
          ✦
        </span>{" "}
        {title}{" "}
        <span className="twinkle text-rosa" aria-hidden="true">
          ✦
        </span>
      </p>
      {description ? (
        <p className="mt-2 text-sm text-slate-700">{description}</p>
      ) : null}
    </div>
  );
}
