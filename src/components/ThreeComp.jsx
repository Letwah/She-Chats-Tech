import { useRef, useEffect } from "react";
import * as THREE from "three";
import logoTexture from "../assets/images/logo.png";

const ThreeComp = () => {
  const mountRef = useRef(null);

  // Example Vertex Shader
  const vertexShader = `
          uniform vec2 mouse; // Mouse position
          uniform vec2 resolution;
          uniform mat4 mvp;

          attribute vec4 a_position;
          attribute vec3 a_normal;
          attribute vec2 a_texcoord;

          varying vec3 v_normal;
          varying vec2 v_texcoord;

          void main(void) {
              vec4 distortedPosition = a_position;

              // Convert mouse coordinates from screen space to your desired range
              vec2 mousePosAdjusted = mouse / resolution;
              mousePosAdjusted = mousePosAdjusted * 2.0 - 1.0; // Convert to range -1 to 1

              // Apply distortion based on mouse position
              distortedPosition.x += sin(distortedPosition.y * 10.0 + mousePosAdjusted.x) * 0.1;
              distortedPosition.y += cos(distortedPosition.x * 10.0 + mousePosAdjusted.y) * 0.1;

              gl_Position = mvp * distortedPosition;
              v_normal = a_normal;
              v_texcoord = a_texcoord;
          }

      `;

  // Example Fragment Shader
  const fragmentShader = `
              #ifdef GL_ES
              precision highp float;
              #endif

              uniform vec2 resolution;
              uniform sampler2D logo;

              varying vec2 v_texcoord;
              void main(void) {
                  float viewportAspectRatio = resolution.x / resolution.y;
                  float imageAspectRatio = 1440.0 / 1024.0; // Aspect ratio of the image

                  vec2 adjustedCoords = v_texcoord;

                  // Flip the texture coordinates if necessary
                  adjustedCoords.y = 1.0 - adjustedCoords.y; // Flip vertically

                  if (viewportAspectRatio > imageAspectRatio) {
                      // Viewport is wider than the image
                      float scale = imageAspectRatio / viewportAspectRatio;
                      adjustedCoords.x = (adjustedCoords.x - 0.5) * scale + 0.5;
                  } else {
                      // Viewport is taller than the image
                      float scale = viewportAspectRatio / imageAspectRatio;
                      adjustedCoords.y = (adjustedCoords.y - 0.5) * scale + 0.5;
                  }

                  vec4 textureColor = texture2D(logo, adjustedCoords);
                  gl_FragColor = textureColor; // Use the texture color directly
              }
      `;

  useEffect(() => {
    // Scene setup
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Geometry and material
    const geometry = new THREE.PlaneGeometry(2, 2, 32, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        logo: { value: new THREE.TextureLoader().load(logoTexture) },
      },
      vertexShader,
      fragmentShader,
    });

    // Mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Camera position
    camera.position.z = 5;

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update uniforms if needed

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      mount.removeChild(renderer.domElement);
    };
  });

  return <div ref={mountRef} />;
};

export default ThreeComp;
