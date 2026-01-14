import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      opacity: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1; // Random size between 1 and 3
        this.density = Math.random() * 30 + 1; // How heavy the particle represents
        this.opacity = Math.random() * 0.5 + 0.1; // Random opacity
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`; // Cyan color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(mouse: { x: number | null; y: number | null }) {
        if (mouse.x === null || mouse.y === null) return;

        // Calculate distance between particle and mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Repel radius
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 150; // Interaction radius
        
        // Force calculation: closer = stronger push
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          // Move away from mouse
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to original position (elastic effect)
          if (this.x !== this.baseX) {
            const dxMove = this.x - this.baseX;
            this.x -= dxMove / 10;
          }
          if (this.y !== this.baseY) {
            const dyMove = this.y - this.baseY;
            this.y -= dyMove / 10;
          }
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = (canvas.width * canvas.height) / 9000; // Density based on screen size
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const mouse = {
      x: null as number | null,
      y: null as number | null,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.draw();
        particle.update(mouse);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 bg-black pointer-events-none"
    />
  );
};

export default ParticlesBackground;
