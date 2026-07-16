import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HomeV1 } from "@/components/home/HomeV1";
import { HomeV2 } from "@/components/home/HomeV2";
import { HomeV3 } from "@/components/home/HomeV3";
import { VariantSelector, type HomeVariant } from "@/components/home/VariantSelector";

export const Route = createFileRoute("/")({
  component: Home,
});

const STORAGE_KEY = "act-home-variant";

function Home() {
  const [variant, setVariant] = useState<HomeVariant>("v2");

  // Read persisted preference after mount to avoid SSR/hydration mismatch.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as HomeVariant | null;
      if (saved === "v1" || saved === "v2" || saved === "v3") setVariant(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const handleChange = (v: HomeVariant) => {
    setVariant(v);
    try {
      window.localStorage.setItem(STORAGE_KEY, v);
    } catch {
      /* ignore */
    }
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <>
      <VariantSelector value={variant} onChange={handleChange} />
      {variant === "v1" && <HomeV1 />}
      {variant === "v2" && <HomeV2 />}
      {variant === "v3" && <HomeV3 />}
    </>
  );
}
