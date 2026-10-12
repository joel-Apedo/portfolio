"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 6.5;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(host.clientWidth || 600, host.clientHeight || 400);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.6, 1),
      new THREE.MeshBasicMaterial({
        color: 0x2f9e44,
        wireframe: true,
        transparent: true,
        opacity: 0.55,
      }),
    );
    group.add(core);

    group.add(
      new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.05, 0),
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: true,
          transparent: true,
          opacity: 0.14,
        }),
      ),
    );

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.3, 0.01, 8, 80),
      new THREE.MeshBasicMaterial({
        color: 0x2f9e44,
        transparent: true,
        opacity: 0.28,
      }),
    );
    ring.rotation.x = Math.PI / 2.4;
    group.add(ring);

    let frame = 0;
    let mx = 0;
    let my = 0;
    let running = true;

    const onMove = (e: MouseEvent) => {
      const rect = host.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onResize = () => {
      const w = host.clientWidth || 600;
      const h = host.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const animate = () => {
      if (!running) return;
      group.rotation.y += 0.004;
      group.rotation.x += 0.0015;
      group.rotation.y += (mx * 0.35 - group.rotation.y * 0.02) * 0.02;
      group.position.x += (mx * 0.4 - group.position.x) * 0.04;
      group.position.y += (-my * 0.3 - group.position.y) * 0.04;
      ring.rotation.z += 0.002;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
