import './Benefits.css'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

function Benefits() {
  const benefits = [
    {
      title: 'Acceso de Por Vida',
      description: 'Actualizaciones gratuitas y contenido nuevo sin costo adicional',
      icon: '🔄'
    },
    {
      title: 'Guías Exclusivas',
      description: 'Recursos premium y plantillas personalizables de IA',
      icon: '📚'
    },
    {
      title: 'Comunidad VIP',
      description: 'Acceso a nuestra comunidad privada de expertos',
      icon: '👥'
    },
    {
      title: 'Soporte Premium',
      description: 'Asistencia personalizada y respuestas en 24 horas',
      icon: '🎯'
    },
    {
      title: 'Certificación',
      description: 'Certificado oficial al completar el curso',
      icon: '🏆'
    },
    {
      title: 'Proyectos Prácticos',
      description: 'Aprende construyendo aplicaciones reales con IA',
      icon: '⚡'
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="benefits">
      <AnimatedSection>
        <h2>¿Qué Obtendrás?</h2>
      </AnimatedSection>
      <motion.div 
        className="benefits-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="benefit-card"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Benefits