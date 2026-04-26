import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, AlertCircle, Zap, ShieldAlert } from 'lucide-react';

const Problem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const cards = [
    {
      id: "01",
      tag: "VISIBILIDAD",
      title: "Invisibilidad Digital",
      text: "El 90% del contenido hoy no recibe ni una sola interacción real. Tu marca es un fantasma en el feed.",
      icon: <AlertCircle className="w-6 h-6" />,
      accent: "from-accent to-orange-600"
    },
    {
      id: "02",
      tag: "CONEXIÓN",
      title: "Impacto Vacío",
      text: "Anuncios que se ven pero no se sienten. Si no hay emoción, el mensaje muere en segundos.",
      icon: <Zap className="w-6 h-6" />,
      accent: "from-white/40 to-white/5"
    },
    {
      id: "03",
      tag: "RECHAZO",
      title: "Resistencia Real",
      text: "Tu audiencia ha desarrollado 'ceguera publicitaria'. Ignoran lo que no les aporta valor real.",
      icon: <ShieldAlert className="w-6 h-6" />,
      accent: "from-accent/60 to-accent/10"
    }
  ];

  return (
    <section 
      id="problema" 
      ref={containerRef}
      className="relative min-h-screen bg-dark py-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Decor: Massive Moving Text */}
      <motion.div 
        style={{ x: textX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none"
      >
        <span className="text-[35vw] font-black uppercase tracking-tighter text-white italic">
          INVISIBLE • IRRELEVANTE • IGNORADO •
        </span>
      </motion.div>

      <div className="w-full px-6 md:px-12 relative z-10">
        {/* Cabecera de Impacto Total */}
        <motion.div style={{ opacity }} className="mb-48 w-full">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-1 bg-accent" />
            <span className="text-accent font-black tracking-[0.5em] uppercase text-sm">El Diagnóstico</span>
          </div>

          <h2 className="text-[12vw] md:text-[11vw] font-black leading-[0.85] tracking-tighter text-white uppercase italic">
            EL MUNDO ES <br />
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">RUIDO,</span> <br />
            <span className="text-accent drop-shadow-[0_0_40px_rgba(255,85,0,0.5)]">Y TÚ ERES MUDO.</span>
          </h2>
        </motion.div>

        {/* Rejilla de Desafíos: Diferenciación Visual Clave */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Número Agresivo: Ahora con un toque de color diferente para cada uno */}
              <div className={`absolute -top-16 -right-4 text-[14rem] font-black italic leading-none pointer-events-none select-none transition-all duration-700 text-transparent opacity-10 group-hover:opacity-30 group-hover:-translate-y-4`}
                style={{ WebkitTextStroke: '2px white' }}
              >
                {card.id}
              </div>

              <div className="relative z-10 p-10 bg-white/[0.02] border-t-4 border-white/10 group-hover:border-accent transition-all duration-500 backdrop-blur-xl h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <span className="bg-white/5 border border-white/10 px-4 py-1 text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase group-hover:text-accent group-hover:border-accent/30 transition-colors">
                    {card.tag}
                  </span>
                  <div className="text-white/20 group-hover:text-accent group-hover:rotate-12 transition-all">
                    {card.icon}
                  </div>
                </div>

                <h3 className="text-4xl font-black text-white mb-6 leading-none tracking-tight uppercase group-hover:translate-x-2 transition-transform">
                  {card.title}
                </h3>

                <p className="text-xl text-gray-500 group-hover:text-gray-200 transition-colors leading-tight font-medium">
                  {card.text}
                </p>
                
                <div className="mt-auto pt-12 overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1 }}
                    className={`h-1 w-full bg-gradient-to-r ${card.accent}`} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cierre: Gran Formato en Español */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-48 relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-accent to-white rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />
          
          <div className="relative bg-black rounded-[4rem] border border-white/10 overflow-hidden p-12 md:p-32 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,85,0,0.1),transparent_70%)]" />
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-accent text-xs font-black tracking-[0.5em] uppercase mb-10 border-b border-accent/30 pb-2">La Solución</span>

              <h4 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter mb-16 uppercase italic">
                ¿CANSADO DE <br /> 
                <span className="text-accent drop-shadow-[0_0_30px_rgba(255,85,0,0.6)]">DESAPARECER?</span>
              </h4>

              <p className="max-w-3xl text-xl md:text-3xl text-gray-400 font-bold mb-20 leading-tight">
                Deja de ser ruido. Empecemos a crear experiencias que <span className="text-white">tu audiencia realmente quiera vivir.</span>
              </p>

              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn relative px-12 md:px-24 py-8 md:py-12 bg-white text-black font-black text-2xl md:text-4xl rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transition-all"
              >
                <div className="absolute inset-0 bg-accent translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-6 md:gap-10 group-hover/btn:text-white transition-colors">
                  CORTA EL RUIDO
                  <ArrowRight className="w-10 h-10 md:w-16 md:h-16 group-hover/btn:translate-x-4 transition-transform" />
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
