import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Background() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a new Three.js scene
    const scene = new THREE.Scene();

    // Create a new Three.js camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a new Three.js renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x392e4a, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a new Three.js material
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.4 });

    // Create multiple cubes at random positions
    const cubes = [];
    for (let i = 0; i < 10; i++) {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
      scene.add(cube);
      cubes.push(cube);
    }

    // Create a new Three.js light and add it to the scene
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Animate the Three.js cubes
    function animate() {
      requestAnimationFrame(animate);
      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.x += Math.random() * 0.1 - 0.05;
        cube.position.y += Math.random() * 0.1 - 0.05;
        cube.position.z += Math.random() * 0.1 - 0.05;
      });
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize events
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    // Clean up the Three.js scene on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      material.dispose();
      cubes.forEach(cube => {
        cube.geometry.dispose();
      });
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
}

export default Background;
