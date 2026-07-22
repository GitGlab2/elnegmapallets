"use client";

export const GA_MEASUREMENT_ID = "G-BMJGG7RM12";

/**
 * Send custom event tracking data to Google Analytics 4 (GA4)
 */
export const trackGA4Event = (eventName: string, eventParams?: Record<string, any>) => {
  try {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, eventParams);
    }
  } catch (error) {
    console.error("GA4 Event tracking error:", error);
  }
};
