import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Trophy, BarChart3, Users } from 'lucide-react';
import { useRef } from 'react';

const CaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacityHeader = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const cases = [
    {
      id: "01",
      client: "Skarch x Panic Park",
      impact: "Presencia Real",
      desc: "Activamos la marca en un entorno de alta energía, logrando una interacción directa y orgánica con el público del evento.",
      metric: "+15k",
      metricLabel: "Interacciones",
      tags: ["BTL", "Sampling"],
      icon: <Users className="w-6 h-6" />
    },
    {
      id: "02",
      client: "Global Tech Expo",
      impact: "Innovación Táctil",
      desc: "Diseñamos un stand interactivo donde la tecnología de la marca se convirtió en una experiencia sensorial inolvidable.",
      metric: "98%",
      metricLabel: "Recordación",
      tags: ["Estrategia", "Diseño"],
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <section 
      id="casos" 
      ref={containerRef}
      className="relative py-32 md:py-64 bg-[#050505] overflow-hidden"
    >
      {/* 1. FONDO DINÁMICO */}
      <motion.div 
        style={{ x: xBg }}
        className="absolute top-1/2 left-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none"
      >
        <span className="text-[25vw] font-black uppercase italic text-white">
          ÉXITO • IMPACTO • RESULTADOS • ÉXITO •
        </span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabecera con Animación de Revelado */}
        <motion.div style={{ opacity: opacityHeader }} className="max-w-4xl mb-32">
          <div className="flex items-center gap-4 mb-8">
            <Trophy className="w-6 h-6 text-accent animate-bounce" />
            <span className="text-accent font-black tracking-[0.5em] uppercase text-xs">Casos de Éxito</span>
          </div>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
            HISTORIAS QUE <br /> 
            <span className="text-accent drop-shadow-[0_0_30px_rgba(255,85,0,0.6)]">DEJAN HUELLA.</span>
          </h2>
        </motion.div>

        {/* Listado de Casos con Stagger Animation */}
        <div className="grid gap-20 md:gap-32">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Lado A: Información del Caso */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="flex items-center gap-6">
                    <span className="text-7xl md:text-9xl font-black text-white/5 italic leading-none group-hover:text-accent/20 transition-colors">
                      {item.id}
                    </span>
                    <div className="h-2 flex-1 bg-gradient-to-r from-accent/50 to-transparent rounded-full" />
                  </div>
                  
                  <h3 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                    {item.client}
                  </h3>
                  
                  <p className="text-2xl md:text-4xl text-gray-400 font-bold leading-tight">
                    {item.impact} — <span className="font-medium text-gray-600 group-hover:text-gray-400 transition-colors">{item.desc}</span>
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-6 py-2 rounded-full border-2 border-white/10 bg-white/5 text-[10px] font-black tracking-widest text-white uppercase group-hover:border-accent/40 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lado B: Métrica de Impacto con Aura */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    className="relative cursor-default"
                  >
                    <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative text-center lg:text-right">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="block text-[9rem] md:text-[13rem] font-black text-white leading-none tracking-tighter italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                      >
                        {item.metric}
                      </motion.span>
                      <span className="text-accent font-black tracking-[0.5em] uppercase text-sm md:text-2xl mt-4 block">
                        {item.metricLabel}
                      </span>
                    </div>
                  </motion.div>
                  
                  <motion.a 
                    href="#contacto"
                    whileHover={{ x: 10 }}
                    className="mt-16 flex items-center gap-6 text-white font-black text-xl md:text-2xl hover:text-accent transition-all group/link"
                  >
                    VER PROYECTO 
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-accent group-hover/link:border-accent transition-all">
                      <ArrowUpRight className="w-8 h-8 group-hover/link:text-white" />
                    </div>
                  </motion.a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final Reforzado */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-48 text-center"
        >
          <div className="inline-block relative">
            <p className="text-gray-500 font-black text-xl mb-6 tracking-widest uppercase">Próximo Caso de Éxito</p>
            <a href="#contacto" className="block text-white font-black text-4xl md:text-7xl hover:text-accent transition-all tracking-tighter uppercase italic group">
              ¿TU MARCA AQUÍ?
              <div className="h-2 w-0 bg-accent group-hover:w-full transition-all duration-700" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudy;
