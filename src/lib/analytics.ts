// Advertising pixel IDs — build-time inlined. Each pixel loads only when its
// ID is configured (set in Cloudflare Pages build env). With none set, all
// functions below are safe no-ops.
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
export const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, data?: unknown) => void };
  }
}

/**
 * Fire a "Lead" conversion on every configured platform.
 * Called on successful Seftekra Home lead form submission.
 */
export function trackLead(): void {
  try {
    if (typeof window === "undefined") return;
    if (META_PIXEL_ID && window.fbq) window.fbq("track", "Lead");
    if (GA_MEASUREMENT_ID && window.gtag)
      window.gtag("event", "generate_lead");
    if (TIKTOK_PIXEL_ID && window.ttq) window.ttq.track("Lead");
  } catch {
    // Tracking must never break the lead flow.
  }
}

/**
 * Capture attribution params from the landing URL (utm_* plus platform
 * click IDs) and persist to sessionStorage so a visitor who browses before
 * submitting is still attributed to the campaign that brought them.
 */
export function captureAttribution(): void {
  try {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const keys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
      "fbclid",
      "ttclid",
    ];
    const found: Record<string, string> = {};
    keys.forEach((k) => {
      const v = params.get(k);
      if (v) found[k] = v;
    });

    if (Object.keys(found).length > 0) {
      sessionStorage.setItem("seftekra_attribution", JSON.stringify(found));
    }
  } catch {
    // sessionStorage unavailable (private mode etc.) — attribution is best-effort.
  }
}

export function getAttribution(): Record<string, string> {
  try {
    if (typeof window === "undefined") return {};
    const raw = sessionStorage.getItem("seftekra_attribution");
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}
