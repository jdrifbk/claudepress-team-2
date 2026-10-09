import { ButtonProps } from "@/contracts/blog";

export function Button({
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  const baseStyles =
    "bevel px-5 py-2 rounded-full font-black tracking-wide transition-transform active:translate-y-px disabled:opacity-60 disabled:grayscale disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-gradient-to-b from-sky-300 to-blue-600 text-white [text-shadow:1px_1px_0_#0b2e8a] hover:from-sky-200 hover:to-blue-500",
    secondary:
      "bg-gradient-to-b from-yellow-200 to-giallo text-blu hover:from-yellow-100 hover:to-yellow-300",
    danger:
      "bg-gradient-to-b from-pink-400 to-rosa text-white [text-shadow:1px_1px_0_#0b2e8a] hover:from-pink-300 hover:to-pink-500",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
}
