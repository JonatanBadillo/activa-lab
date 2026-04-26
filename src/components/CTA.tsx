import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Sparkles, Zap } from 'lucide-react';
import { useRef } from 'react';

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      id="contacto" 
      ref={containerRef}
      className="relative py-32 md:py-64 bg-dark overflow-hidden"
    >
      {/* 1. FONDO DE ALTO IMPACTO (KINETIC LIGHT) */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.15)_0%,transparent_70%)]" 
        />
        
        {/* Líneas de diseño en movimiento */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ scale, opacity }}
          className="max-w-5xl mx-auto"
        >
          {/* TARJETA "PORTAL" CON BORDE ANIMADO */}
          <div className="relative p-[2px] rounded-[3rem] md:rounded-[5rem] overflow-hidden group">
            {/* Luz de borde giratoria */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-white to-accent animate-spin-slow opacity-20 group-hover:opacity-100 transition-opacity duration-1000" style={{ animationDuration: '10s' }} />
            
            <div className="relative bg-[#080808] rounded-[2.95rem] md:rounded-[4.95rem] p-12 md:p-24 overflow-hidden">
              {/* Partículas decorativas */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-10 right-10 opacity-20"
              >
                <Sparkles className="w-12 h-12 text-accent" />
              </motion.div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-10"
                >
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-white text-[10px] font-black tracking-[0.4em] uppercase">Hablemos hoy</span>
                </motion.div>

                <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase italic">
                  ¿QUIERES CAMBIAR <br /> 
                  <span className="text-accent drop-shadow-[0_0_20px_rgba(255,85,0,0.4)]">EL JUEGO?</span>
                </h2>

                <p className="max-w-2xl text-lg md:text-2xl text-gray-400 font-bold mb-16 leading-relaxed">
                  Si quieres que tu marca deje de pasar desapercibida y empiece a generar impacto real, <span className="text-white">hablemos.</span>
                </p>

                {/* BOTÓN REFINADO Y LLAMATIVO */}
                <motion.a
                  href="mailto:hola@activamente.lab"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn relative px-12 py-5 bg-white text-black font-black text-xl rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-4 transition-all"
                >
                  <div className="absolute inset-0 bg-accent translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                  <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300 flex items-center gap-3">
                    EMPEZAR PROYECTO
                    <Mail className="w-5 h-5" />
                  </span>
                  
                  {/* Destello de luz al pasar el ratón */}
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity">
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover/btn:left-[200%] transition-all duration-1000" />
                  </div>
                </motion.a>

                <div className="mt-16 flex items-center gap-4 opacity-30">
                  <div className="w-8 h-px bg-white" />
                  <span className="text-[10px] font-mono tracking-[0.3em] text-white uppercase italic">Digital Agency // 2024</span>
                  <div className="w-8 h-px bg-white" />
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
