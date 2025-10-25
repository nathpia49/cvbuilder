import type { Metadata } from "next";
import { BuilderClient } from "@/components/builder/builder-client";

export const metadata: Metadata = {
  title: "CV Builder — Elevate CV Studio",
  description: "Design, customize, and export polished resumes with AI assistants and live previews.",
};

export default function BuilderPage() {
  return <BuilderClient />;
}
