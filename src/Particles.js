import React, { Component } from "react";

export default class Particles extends Component {
  constructor(...args) {
    super(...args);

    this.state = { particles: [] };
  }

  update() {
    this.animation = requestAnimationFrame(() => this.update());

    const particles = this.state.particles.slice();

    for (let i = 0; i < particles.length; i++) {
      particles[i] = this.props.update(particles[i], i);

      if (!particles[i]) {
        particles[i] = this.props.create();
      }
    }

    this.setState({ particles });
  }

  componentDidMount() {
    this.updateParticleQuantity(this.props.quantity);

    this.animation = requestAnimationFrame(() => this.update());
  }

  componentWillReceiveProps(props) {
    if (props.quantity !== this.props.quantity) {
      this.updateParticleQuantity(props.quantity);
    }
  }

  updateParticleQuantity(quantity) {
    const particles = this.state.particles.slice();

    particles.length = quantity;

    // Fill in any empty slots left behind by the quantity increasing.
    for (let i = this.state.particles.length; i < quantity; i++) {
      particles[i] = this.props.create();
    }

    this.setState({ particles });
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animation);
  }

  render() {
    const ParticleComponent = this.props.particle || Particle;

    return (
      <div
        style={{
          bottom: 0,
          left: 0,
          overflow: "hidden",
          pointerEvents: "none",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        {this.state.particles.map((particle, index) => (
          <ParticleComponent key={index} x={particle.x} y={particle.y} />
        ))}
      </div>
    );
  }
}
