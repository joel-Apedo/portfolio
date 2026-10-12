"use client";

import { NotionRenderer } from "react-notion-x";
import { useEffect, useState } from "react";
import type { ExtendedRecordMap } from "notion-types";
import "react-notion-x/styles.css";

export function NotionContent({ recordMap }: { recordMap: ExtendedRecordMap }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const update = () =>
      setDarkMode(document.documentElement.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="notion-page">
      <NotionRenderer
        recordMap={recordMap}
        darkMode={darkMode}
        fullPage={false}
      />
    </div>
  );
}
