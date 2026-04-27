import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Activity, MousePointer2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const marqueeVariants: any = {
    animate: {
      x: [0, -1000],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
      },
    },
  };

  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-center justify-center bg-[#020202] overflow-hidden">
      
      {/* 1. ILUMINACIÓN DINÁMICA QUE SIGUE AL MOUSE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: mousePos.x - 400,
            y: mousePos.y - 400,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
          className="absolute w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] opacity-40"
        />
        
        {/* Marquee en el fondo */}
        <div className="absolute top-1/2 left-0 w-full overflow-hidden opacity-[0.03] select-none -translate-y-1/2">
          <motion.div variants={marqueeVariants} animate="animate" className="flex whitespace-nowrap">
            <span className="text-[25vw] font-black uppercase italic tracking-tighter pr-20 text-white">
              ACTIVAMENTE • IMPACTAR • SORPRENDER • 
            </span>
            <span className="text-[25vw] font-black uppercase italic tracking-tighter pr-20 text-white">
              ACTIVAMENTE • IMPACTAR • SORPRENDER • 
            </span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col items-center text-center">
          
          {/* Elemento Decorativo: "Scanline" Animado */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1 bg-accent mb-12 shadow-[0_0_20px_rgba(255,85,0,1)]"
          />

          {/* TÍTULO CINÉTICO REVELADO POR PALABRAS */}
          <motion.div style={{ y: y1 }} className="relative mb-12 max-w-7xl">
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-[11rem] font-black leading-[0.8] tracking-tighter uppercase italic"
            >
              <motion.span 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="block text-white"
              >
                Donde las
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block text-white"
              >
                marcas
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative inline-block text-accent"
              >
                se activan.
                {/* Rayo de luz horizontal */}
                <motion.div 
                  animate={{ left: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                />
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtítulo con peso visual corregido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-3xl mb-16"
          >
            <p className="text-xl md:text-4xl text-gray-400 font-bold leading-tight tracking-tight">
              Creamos experiencias <span className="text-white">reales</span> que generan <br className="hidden md:block" />
              <span className="relative inline-block px-4 py-1 bg-accent text-white italic rounded-lg -rotate-2 ml-2">
                IMPACTO TOTAL.
              </span>
            </p>
          </motion.div>

          {/* Botones de "Nivel Agencia Pro" */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-row flex-wrap justify-center gap-6 w-full"
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-12 py-6 bg-white text-black font-black text-xl rounded-2xl overflow-hidden group shadow-[0_20px_50px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">EMPEZAR AHORA</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:text-white group-hover:translate-x-2 transition-all" />
            </motion.a>

            <motion.a
              href="#casos"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-6 border-4 border-white/10 text-white font-black text-xl rounded-2xl backdrop-blur-sm hover:border-accent transition-all flex items-center justify-center gap-3 shadow-2xl"
            >
              VER CASOS <ChevronRight className="w-6 h-6 text-accent" />
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Decoración lateral flotante */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 opacity-20">
        <Activity className="text-accent animate-pulse" />
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
        <MousePointer2 className="text-white animate-bounce" />
      </div>

    </section>
  );
};

export default Hero;
