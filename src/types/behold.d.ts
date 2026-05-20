// TypeScript declaration so JSX accepts the <behold-widget> custom element.
// Behold's widget.js registers this Web Component globally at runtime.

import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & { "feed-id": string },
        HTMLElement
      >;
    }
  }
}

export {};
