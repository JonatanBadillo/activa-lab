import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Sparkles, Rocket, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const Solution = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animaciones ligadas al scroll
  const titleY = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Activaciones con Propósito",
      desc: "No lanzamos mensajes al azar. Cada movimiento está estratégicamente diseñado para impactar a tu audiencia ideal.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Experiencias Sensoriales",
      desc: "Hacemos que tu marca se huela, se toque y se sienta. La memoria emocional es nuestra herramienta más poderosa.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Ejecución Impecable",
      desc: "Desde el concepto creativo hasta el último detalle en el campo. Somos perfeccionistas por naturaleza.",
    }
  ];

  return (
    <section 
      id="solucion" 
      ref={containerRef}
      className="relative py-32 md:py-64 bg-[#050505] overflow-hidden"
    >
      {/* 1. FONDO CINÉTICO MEJORADO */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ opacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.05)_0%,transparent_70%)]" 
        />
        {/* Texto de fondo con Parallax */}
        <motion.div 
          style={{ x: bgTextX }}
          className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none"
        >
          <span className="text-[25vw] font-black uppercase tracking-tighter text-white">SOLUCIÓN</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* CABECERA MONUMENTAL CON ANIMACIÓN DE ENTRADA */}
          <div className="text-center mb-20 md:mb-48">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8 md:mb-10"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-accent rounded-full" 
              />
              <span className="text-accent text-[10px] md:text-xs font-black tracking-[0.5em] uppercase">Nuestra Respuesta</span>
            </motion.div>

            <motion.h2 
              style={{ y: titleY }}
              className="text-4xl md:text-8xl lg:text-9xl font-black text-white leading-tight md:leading-[0.85] tracking-tighter uppercase italic mb-8 md:mb-12"
            >
              Hacemos que tu <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-white"
              >
                MARCA SE VIVA.
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-3xl text-gray-400 font-medium max-w-4xl mx-auto leading-snug px-4"
            >
              Diseñamos puentes emocionales entre productos y humanos. <br className="hidden md:block" />
              Convertimos la curiosidad en <span className="text-white border-b-2 border-accent">conexión real.</span>
            </motion.p>
          </div>

          {/* GRID DE CARACTERÍSTICAS CON STAGGER ANIMATION */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col h-full transition-all duration-500 hover:bg-white/[0.04] hover:border-accent/30"
              >
                {/* Icono con rotación y resplandor */}
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="mb-8 md:mb-10 w-16 h-16 md:w-20 md:h-20 bg-dark border border-white/10 rounded-2xl flex items-center justify-center text-accent shadow-2xl relative"
                >
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  {item.icon}
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 leading-tight group-hover:text-accent transition-colors tracking-tight uppercase italic">
                  {item.title}
                </h3>

                <p className="text-base md:text-lg text-gray-500 group-hover:text-gray-300 transition-colors font-medium leading-relaxed">
                  {item.desc}
                </p>

                {/* Barra de progreso dinámica */}
                <div className="mt-auto pt-10">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-1 w-full bg-accent origin-left rounded-full opacity-20 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA FINAL CON EFECTO DE REVELADO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-32 text-center"
          >
            <motion.a 
              href="#servicios" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-6 px-12 py-6 bg-white text-black font-black text-2xl rounded-3xl overflow-hidden shadow-2xl transition-all"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 group-hover:text-white flex items-center gap-4 text-black transition-colors">
                DESCUBRE CÓMO LO HACEMOS
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Solution;
