import React, { useState, useEffect } from "react";

export default function Typewriter({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1400,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const current = texts[index % texts.length];
    let timeout;

    if (!isDeleting) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((p) => (p + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, index, texts, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={`inline-block ${className}`}>
      {display}
      <span className="ml-2 inline-block w-1 h-6 align-middle bg-green-700 rounded-sm animate-pulse" />
    </span>
  );
}
