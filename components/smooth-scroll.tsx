
"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        anchors: true,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: true,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
