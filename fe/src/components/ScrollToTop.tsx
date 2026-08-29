"use client";
import ScrollToTop from "react-scroll-to-top";

export default function ScrollToTopButton() {
  return (
    <ScrollToTop
      smooth
      top={300}
      component={
        <span className="whitespace-nowrap text-sm leading-none text-zinc-500 dark:text-zinc-400">
          SCROLL TO TOP &uarr;
        </span>
      }
      style={{
        position: "static",
        width: "auto",
        height: "auto",
        padding: 0,
        background: "transparent",
        border: "none",
        boxShadow: "none",
        color: "#71717a",
      }}
    />
  );
}
