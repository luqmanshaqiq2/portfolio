"use client";

import { useEffect, useState } from "react";


const CursorDot = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        background: "white",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        mixBlendMode: "difference",
        zIndex: 9999,
      }}
    />
  );
};

export default CursorDot;