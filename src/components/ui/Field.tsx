import type { FieldProps } from "@/contracts/blog";

export function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor} className="font-black text-blu">
        <span className="diamond mr-1" aria-hidden="true" />
        {label}
      </label>
      {children}
      {error ? (
        <p
          role="alert"
          className="bevel rounded-lg bg-rosa px-3 py-1 text-sm font-bold text-white"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
