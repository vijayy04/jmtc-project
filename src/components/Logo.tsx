import mohifarLogoDark from "@/assets/mohifar-logo-dark.png";
import mohifarLogoWhite from "@/assets/mohifar-logo-white.png";

export function Logo({
  compact = false,
  variant = "dark",
}: {
  compact?: boolean;
  variant?: "light" | "dark";
}) {
  const logo = variant === "light" ? mohifarLogoWhite : mohifarLogoDark;

  return (
    <img
      src={logo}
      alt="Mohifar Jahan Trading and Contracting"
      width={707}
      height={230}
      className={`w-auto object-contain ${compact ? "h-8" : "h-10 sm:h-11"}`}
    />
  );
}
