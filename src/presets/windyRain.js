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
        x: particle.x + 5,
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
        transform: "rotate(-20deg)",
        top: y + 200,
        width: 5,
      }}
    ></div>
  );
}
