// Animation background utilities

interface ParticleProps {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
  }
  
  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
  
    constructor({ x, y, size, speedX, speedY, color, canvas, ctx }: ParticleProps) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
      this.color = color;
      this.canvas = canvas;
      this.ctx = ctx;
    }
  
    update(): void {
      this.x += this.speedX;
      this.y += this.speedY;
  
      if (this.size > 0.2) this.size -= 0.01;
  
      // Boundary check
      if (this.x < 0 || this.x > this.canvas.width) this.speedX = -this.speedX;
      if (this.y < 0 || this.y > this.canvas.height) this.speedY = -this.speedY;
    }
  
    draw(): void {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
  
  interface AnimationConfigOptions {
    particleCount?: number;
    maxConnectionDistance?: number;
    particleColors?: string[];
    lineColor?: string;
    lineWidth?: number;
    minParticleSize?: number;
    maxParticleSize?: number;
    speedFactor?: number;
  }
  
  export const initializeBackground = (
    canvas: HTMLCanvasElement,
    options: AnimationConfigOptions = {}
  ): (() => void) => {
    if (!canvas) return () => {};
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return () => {};
  
    // Configuration with defaults
    const config = {
      particleCount: options.particleCount || 100,
      maxConnectionDistance: options.maxConnectionDistance || 100,
      particleColors: options.particleColors || ["rgba(137, 96, 223, 0.5)", "rgba(108, 78, 187, 0.3)", "rgba(79, 58, 138, 0.2)"],
      lineColor: options.lineColor || 'rgba(90, 70, 150, 0.1)',
      lineWidth: options.lineWidth || 0.5,
      minParticleSize: options.minParticleSize || 1,
      maxParticleSize: options.maxParticleSize || 5,
      speedFactor: options.speedFactor || 0.5
    };
  
    // Initialize particles
    const particlesArray: Particle[] = [];
    
    const initParticles = (): void => {
      particlesArray.length = 0;
      for (let i = 0; i < config.particleCount; i++) {
        particlesArray.push(
          new Particle({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * config.maxParticleSize + config.minParticleSize,
            speedX: (Math.random() * 2 - 1) * config.speedFactor,
            speedY: (Math.random() * 2 - 1) * config.speedFactor,
            color: config.particleColors[Math.floor(Math.random() * config.particleColors.length)],
            canvas,
            ctx
          })
        );
      }
    };
  
    // Connect particles with lines
    const connectParticles = (): void => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          if (distance < config.maxConnectionDistance) {
            ctx.strokeStyle = config.lineColor;
            ctx.lineWidth = config.lineWidth;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
  
    // Animation loop
    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
  
    // Handle window resize
    const handleResize = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
  
    // Set up event listeners
    window.addEventListener('resize', handleResize);
    
    // Initialize canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Initialize particles
    initParticles();
    
    // Start animation
    let animationFrameId = requestAnimationFrame(animate);
    
    // Return cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  };
  
  export default {
    initializeBackground
  };