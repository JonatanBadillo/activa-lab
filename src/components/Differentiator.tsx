import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Zap, MessageSquare, BarChart3, ArrowRight, Activity } from 'lucide-react';
import { useRef } from 'react';

const differentiators = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Experiencia Primero",
    desc: "No pensamos en formatos rígidos, pensamos en el viaje emocional del usuario.",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Interacción Real",
    desc: "Diseñamos para que la gente hable, toque y participe activamente con tu marca.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Conversación Orgánica",
    desc: "Ejecutamos ideas que se vuelven virales por su impacto, no por pauta pagada.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Impacto vs Impresiones",
    desc: "Nos enfocamos en huellas imborrables, no en métricas de vanidad vacías.",
  }
];

const Differentiator = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacityHeader = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="diferenciadores" 
      ref={containerRef}
      className="relative py-32 md:py-64 bg-[#030303] overflow-hidden"
    >
      {/* BACKGROUND DECOR */}
      <motion.div 
        style={{ x: xText }}
        className="absolute top-1/2 left-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none"
      >
        <span className="text-[30vw] font-black uppercase italic text-white">
          UNMATCHED • UNIQUE • BEYOND • UNMATCHED •
        </span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-5">
              <motion.div style={{ opacity: opacityHeader }} className="lg:sticky lg:top-40">
                <div className="flex items-center gap-4 mb-8">
                  <Activity className="w-6 h-6 text-accent animate-pulse" />
                  <span className="text-accent font-black tracking-[0.6em] uppercase text-sm">Engineered For Success</span>
                </div>

                <h2 className="text-7xl md:text-8xl lg:text-[7rem] font-black text-white leading-[0.8] tracking-tighter mb-12 uppercase italic">
                  NUESTRO <br /> 
                  <span className="text-accent drop-shadow-[0_0_40px_rgba(255,85,0,0.5)]">ADN.</span>
                </h2>

                <p className="text-xl md:text-3xl text-gray-500 font-bold leading-tight mb-16">
                  La diferencia entre una marca que <span className="text-white">pasa</span> y una que <span className="text-accent italic underline decoration-4">permanece.</span>
                </p>

                <div className="hidden lg:block">
                  <div className="w-full h-px bg-gradient-to-r from-accent to-transparent mb-8" />
                  <div className="text-[9px] font-mono tracking-[0.5em] text-white/10 uppercase">
                    // AUTHENTIC EXPERIENCES ONLY
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: HIGH-OCTANE CARDS */}
            <div className="lg:col-span-7">
              <div className="grid gap-8">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15, duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group"
                  >
                    <div className="relative h-full overflow-hidden rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent p-[1px] transition-all duration-700 group-hover:p-[2px] group-hover:from-accent group-hover:to-orange-500">
                      
                      <div className="relative h-full p-10 md:p-16 bg-[#080808] rounded-[2.95rem] overflow-hidden flex flex-col md:flex-row gap-10 items-center text-center md:text-left transition-colors duration-500 group-hover:bg-[#0a0a0a]">
                        
                        {/* Kinetic Background Number */}
                        <div className="absolute -bottom-10 -left-6 text-[10rem] font-black text-white/[0.02] group-hover:text-accent/[0.05] transition-colors duration-700 italic pointer-events-none">
                          0{index + 1}
                        </div>

                        {/* Icon Container with Neo-Glow */}
                        <div className="relative shrink-0">
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                            className="w-24 h-24 bg-dark border-2 border-white/5 rounded-[2rem] flex items-center justify-center text-accent shadow-2xl z-10 relative group-hover:border-accent/40 group-hover:text-white group-hover:bg-accent transition-all duration-500"
                          >
                            {item.icon}
                          </motion.div>
                          <div className="absolute inset-0 bg-accent/40 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="relative z-10 flex-1">
                          <h3 className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:text-accent transition-colors tracking-tighter uppercase italic leading-none">
                            {item.title}
                          </h3>
                          <p className="text-lg md:text-xl text-gray-500 group-hover:text-gray-200 transition-colors leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>

                        {/* Action Reveal */}
                        <div className="shrink-0 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-500 hidden xl:block">
                          <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center">
                            <ArrowRight className="w-8 h-8 text-accent animate-pulse" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
