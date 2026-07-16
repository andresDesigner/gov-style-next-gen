import logoAsset from "@/assets/act-verified-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="ACT Verified"
      width={200}
      height={110}
      className={className}
      decoding="async"
    />
  );
}
