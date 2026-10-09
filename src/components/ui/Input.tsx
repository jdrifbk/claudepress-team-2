import type { InputProps } from "@/contracts/blog";

export function Input({
  id,
  name,
  value,
  onChange,
  multiline = false,
  placeholder,
  invalid = false,
}: InputProps) {
  const styles = `w-full rounded-lg border-[3px] bg-white px-3 py-2 text-sm text-blu placeholder:text-sky-500 shadow-[inset_2px_2px_0_#bfe8ff] ${
    invalid ? "border-rosa" : "border-blu"
  }`;

  if (multiline) {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={invalid}
        rows={6}
        className={styles}
      />
    );
  }

  return (
    <input
      id={id}
      name={name}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-invalid={invalid}
      className={styles}
    />
  );
}
