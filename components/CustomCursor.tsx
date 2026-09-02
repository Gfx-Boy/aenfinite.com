'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    // Only run on desktop
    if (typeof window === 'undefined' || window.innerWidth <= 768) return;

    // Check if cursor container already exists
    let cursor = document.getElementById('aenfinite-cursor');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.className = 'aenfinite-cursor';
      cursor.id = 'aenfinite-cursor';
      document.body.appendChild(cursor);
    } else {
      cursor.innerHTML = '';
    }

    // Check if SVG filter already exists
    if (!document.getElementById('aenfinite-goo-filter')) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('id', 'aenfinite-goo-filter');
      svg.setAttribute('version', '1.1');
      svg.style.position = 'absolute';
      svg.style.width = '0';
      svg.style.height = '0';
      svg.style.pointerEvents = 'none';
      svg.style.overflow = 'hidden';
      svg.innerHTML = `
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      `;
      document.body.appendChild(svg);
    }

    const amount = 20;
    const sineDots = Math.floor(amount * 0.3);
    const width = 26;
    const idleTimeout = 150;
    let lastFrame = 0;
    let mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let dots: any[] = [];
    let timeoutID: ReturnType<typeof setTimeout> | null = null;
    let idle = false;
    let animFrameId: number;

    class Dot {
      index: number;
      anglespeed: number;
      x: number;
      y: number;
      scale: number;
      range: number;
      limit: number;
      element: HTMLElement;
      lockX: number = 0;
      lockY: number = 0;
      angleX: number = 0;
      angleY: number = 0;

      constructor(index = 0) {
        this.index = index;
        this.anglespeed = 0.05;
        this.x = mousePosition.x;
        this.y = mousePosition.y;
        this.scale = 1 - 0.05 * index;
        this.range = width / 2 - width / 2 * this.scale + 2;
        this.limit = width * 0.75 * this.scale;
        this.element = document.createElement('span');
        this.element.style.transform = `translate(-50%, -50%) scale(${this.scale})`;
        cursor!.appendChild(this.element);
      }

      lock() {
        this.lockX = this.x;
        this.lockY = this.y;
        this.angleX = Math.PI * 2 * Math.random();
        this.angleY = Math.PI * 2 * Math.random();
      }

      draw(delta: number) {
        if (!idle || this.index <= sineDots) {
          this.x = mousePosition.x;
          this.y = mousePosition.y;
        } else {
          this.angleX += this.anglespeed;
          this.angleY += this.anglespeed;
          this.x = this.lockX + Math.sin(this.angleX) * this.range;
          this.y = this.lockY + Math.sin(this.angleY) * this.range;
        }
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
      }
    }

    for (let i = 0; i < amount; i++) {
      dots.push(new Dot(i));
    }

    const onMouseMove = (event: MouseEvent) => {
      mousePosition.x = event.clientX;
      mousePosition.y = event.clientY;
      resetIdleTimer();
    };

    const startIdleTimer = () => {
      timeoutID = setTimeout(() => {
        idle = true;
        for (const dot of dots) {
          dot.lock();
        }
      }, idleTimeout);
      idle = false;
    };

    const resetIdleTimer = () => {
      if (timeoutID) clearTimeout(timeoutID);
      startIdleTimer();
    };

    const positionCursor = (delta: number) => {
      let x = mousePosition.x;
      let y = mousePosition.y;
      dots.forEach((dot, index, allDots) => {
        const nextDot = allDots[index + 1] || allDots[0];
        dot.x = x;
        dot.y = y;
        dot.draw(delta);
        if (!idle || index <= sineDots) {
          const dx = (nextDot.x - dot.x) * 0.35;
          const dy = (nextDot.y - dot.y) * 0.35;
          x += dx;
          y += dy;
        }
      });
    };

    const render = (timestamp: number) => {
      const delta = timestamp - lastFrame;
      positionCursor(delta);
      lastFrame = timestamp;
      animFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    lastFrame = performance.now();
    render(lastFrame);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (animFrameId) cancelAnimationFrame(animFrameId);
      if (timeoutID) clearTimeout(timeoutID);
      if (cursor) cursor.remove();
    };
  }, []);

  return null;
}
