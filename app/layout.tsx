import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWS Cost Spike Explainer — Know Exactly Why Your Bill Spiked",
  description: "Analyzes your AWS billing data and explains in plain English what caused unexpected cost increases. Built for developers and startup founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8f6ae7a6-9b53-4a1c-9451-cbb05b81c0bc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
