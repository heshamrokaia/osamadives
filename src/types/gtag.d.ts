interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  page_path?: string;
  [key: string]: string | number | undefined;
}

interface Window {
  gtag: (
    command: "config" | "event" | "js",
    targetId: string | Date,
    params?: GtagEventParams
  ) => void;
}
