"use client";
import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    const loadScripts = async () => {
      const script1 = document.createElement("script");
      script1.src =
        "https://cdn.jsdelivr.net/npm/tsparticles@1.28.0/dist/tsparticles.min.js";
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src =
        "https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.5.0/custom-elements-es5-adapter.js";
      script2.async = true;
      document.body.appendChild(script2);

      const script3 = document.createElement("script");
      script3.src =
        "https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.5.0/webcomponents-loader.js";
      script3.async = true;
      document.body.appendChild(script3);

      const script4 = document.createElement("script");
      script4.type = "module";
      script4.src =
        "https://cdn.jsdelivr.net/npm/web-particles@1.1.0/dist/web-particles.min.js";
      document.body.appendChild(script4);

      script4.onload = () => {
        const particlesElement = document.getElementById("tsparticles");

        // Function to generate a random hex color
        const getRandomColor = () => {
          const letters = "0123456789ABCDEF";
          let color = "#";
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };

        // Change color every 5 seconds
        setInterval(() => {
          const newColor = getRandomColor();
          particlesElement.setAttribute(
            "options",
            JSON.stringify({
              ...JSON.parse(particlesElement.getAttribute("options")),
              particles: {
                ...JSON.parse(particlesElement.getAttribute("options"))
                  .particles,
                color: { value: newColor },
                links: { color: newColor },
              },
            })
          );
        }, 5000);
      };
    };

    loadScripts();

    return () => {
      const scripts = document.querySelectorAll(
        'script[src*="tsparticles"], script[src*="webcomponents"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <>
      <web-particles
        id="tsparticles"
        options='{
          "fps_limit": 60,
          "interactivity": {
            "detectsOn": "canvas",
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onHover": {
                "enable": true,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "push": {
                "particles_nb": 4
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "particles": {
            "color": {
              "value": "#89f5ea"
            },
            "links": {
              "color": "#9bf8fa",
              "distance": 150,
              "enable": true,
              "opacity": 0.6,
              "width": 1
            },
            "move": {
              "bounce": false,
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 4,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 1000
              },
              "value": 40
            },
            "opacity": {
              "value": 0.5
            },
            "shape": {
              "type": "circle"
            },
            "size": {
              "random": true,
              "value": 5
            }
          },
          "detectRetina": true
        }'
      ></web-particles>
      <style jsx global>{`
        body {
          margin: 0;
          font: normal 75% Arial, Helvetica, sans-serif;
        }
        canvas {
          display: block;
          vertical-align: bottom;
        }
        #tsparticles {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: black;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50% 50%;
        }
      `}</style>
    </>
  );
};

export default ParticlesBackground;
