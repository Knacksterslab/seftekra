import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">404</p>
      <h1 className="mb-4 font-display text-4xl font-light">Page Not Found</h1>
      <p className="mb-8 text-sm font-light text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full border border-gold px-6 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-black"
      >
        Back to Home
      </Link>
    </div>
  );
}
