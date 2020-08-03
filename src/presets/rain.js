import React from "react";

export function create() {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * -window.innerHeight - 10,
  };
}

export function update(particle) {
  return particle.y > window.innerHeight
    ? null
    : {
        ...particle,
        y: particle.y + 10,
      };
}

export function Particle({ x, y }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(175, 195, 204, 0.3)",
        borderRadius: 5,
        height: 50,
        left: x,
        position: "absolute",
        top: y,
        width: 5,
      }}
    ></div>
  );
}
