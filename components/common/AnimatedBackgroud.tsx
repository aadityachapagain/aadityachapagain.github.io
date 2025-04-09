import { useRef, useEffect } from 'react';

interface AnimatedBackgroundProps {
  particleCount?: number;
  maxConnectionDistance?: number;
  particleColors?: string[];
  lineColor?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  particleCount = 100,
  maxConnectionDistance = 100,
  particleColors = ["rgba(137, 96, 223, 0.5)", "rgba(108, 78, 187, 0.3)", "rgba(79, 58, 138, 0.2)"],
  lineColor = 'rgba(90, 70, 150, 0.1)'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set dimensions using viewport units to prevent overflow
    const setDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setDimensions();
    
    // Particle class
    class ParticleImpl implements Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.01;

        // Boundary check with padding to prevent edge artifacts
        if (this.x < -50 || this.x > canvas.width + 50) this.speedX = -this.speedX;
        if (this.y < -50 || this.y > canvas.height + 50) this.speedY = -this.speedY;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const particlesArray: Particle[] = [];
    
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new ParticleImpl());
      }
    };

    // Connect particles with lines
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxConnectionDistance) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      // Clear entire canvas including any overflow
      ctx.clearRect(-50, -50, canvas.width + 100, canvas.height + 100);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(ctx);
      }
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      setDimensions();
      init();
    };

    // Set up event listeners
    window.addEventListener('resize', handleResize);
    
    // Initialize particles
    init();
    
    // Start animation
    let animationFrameId = requestAnimationFrame(animate);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, maxConnectionDistance, particleColors, lineColor]);

  return (
    <div className="canvas-background">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
};

export default AnimatedBackground;