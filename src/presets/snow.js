import React from "react";

export function create() {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * -window.innerHeight - 10,
  };
}

export function update(particle, index) {
  const now = Date.now();

  return particle.y > window.innerHeight
    ? null
    : {
        x: particle.x + Math.sin(now / 1000 + index * 10),
        y: particle.y + 1,
      };
}

export function Particle({ x, y }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0.0, 0.0, 0.0, 0.3)",
        borderRadius: 5,
        height: 10,
        left: x,
        position: "absolute",
        top: y,
        width: 10,
      }}
    ></div>
  );
}
