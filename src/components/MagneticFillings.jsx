/* eslint-disable react-hooks/unsupported-syntax */
"use client";
import { useEffect, useRef } from "react";

export function MagneticFilings() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const mouse = { x: -999, y: -999 };
    const COLORS = [
      "#c8b89a",
      "#d4c4a8",
      "#a89070",
      "#b8a888",
      "#e8d8c0",
      "#8a7058",
    ];
    let filings = [];
    let raf;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    }

    class Filing {
      constructor() {
        this.x = 0;
        this.y = 0;
        this.baseX = 0;
        this.baseY = 0;
        this.len = 0;
        this.angle = 0;
        this.targetAngle = 0;
        this.color = "";
        this.alpha = 0;
        this.speed = 0;
        this.influence = 0;
        this.vx = 0;
        this.vy = 0;
        this.reset();
      }
      reset() {
        const W = canvas.width,
          H = canvas.height;
        this.x = this.baseX = Math.random() * W;
        this.y = this.baseY = Math.random() * H;
        this.len = 4 + Math.random() * 14;
        this.angle = this.targetAngle = Math.random() * Math.PI;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = 0.3 + Math.random() * 0.6;
        this.speed = 0.04 + Math.random() * 0.06;
        this.influence = 80 + Math.random() * 160;
        this.vx = this.vy = 0;
      }
      update() {
        const dx = mouse.x - this.x,
          dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.influence) {
          const force = 1 - dist / this.influence;
          this.targetAngle = Math.atan2(dy, dx);
          const pull = force * force * 2.5;
          this.vx += (dx / dist) * pull * 0.3;
          this.vy += (dy / dist) * pull * 0.3;
        } else {
          this.targetAngle =
            Math.atan2(this.baseY - this.y, this.baseX - this.x) +
            Math.PI * 0.5;
          this.vx += (this.baseX - this.x) * 0.015;
          this.vy += (this.baseY - this.y) * 0.015;
        }
        this.vx *= 0.82;
        this.vy *= 0.82;
        this.x += this.vx;
        this.y += this.vy;
        let da = this.targetAngle - this.angle;
        while (da > Math.PI) da -= Math.PI * 2;
        while (da < -Math.PI) da += Math.PI * 2;
        this.angle += da * this.speed;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = this.alpha;
        const grad = ctx.createLinearGradient(
          -this.len / 2,
          0,
          this.len / 2,
          0,
        );
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.3, this.color);
        grad.addColorStop(0.7, this.color);
        grad.addColorStop(1, "transparent");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.moveTo(-this.len / 2, 0);
        ctx.lineTo(this.len / 2, 0);
        ctx.stroke();
        ctx.restore();
      }
    }

    function init() {
      filings = [];
      const count = Math.floor((canvas.width * canvas.height) / 1100);
      for (let i = 0; i < count; i++) filings.push(new Filing());
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      filings.forEach((f) => {
        f.update();
        f.draw();
      });
      raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    loop();

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
