import React from "react";
import Particles from "./Particles";
import { number, withKnobs } from "@storybook/addon-knobs";
import { rain, snow } from "./presets";

export default {
  title: "Particles",
  decorators: [withKnobs],
};

export const rainPreset = () => (
  <Particles
    quantity={number("Particles", 10, { min: 0 })}
    particle={rain.Particle}
    create={rain.create}
    update={rain.update}
  />
);

export const snowPreset = () => (
  <Particles
    quantity={number("Particles", 10, { min: 0 })}
    particle={snow.Particle}
    create={snow.create}
    update={snow.update}
  />
);
