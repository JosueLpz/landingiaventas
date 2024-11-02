import './PricingSection.css'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

function PricingSection() {
  return (
    <section className="pricing">
      <AnimatedSection>
        <h2>Inversión Única</h2>
      </AnimatedSection>
      <motion.div 
        className="pricing-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          duration: 0.8 
        }}
      >
        <div className="price-header">
          <h3>Acceso de Por Vida</h3>
          <motion.div 
            className="price"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="original-price">$499</span>
            <span className="current-price">$50</span>
          </motion.div>
        </div>
        <motion.ul 
          className="features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {[
            'Acceso completo al curso',
            'Actualizaciones de por vida',
            'Guías exclusivas ($500 valor)',
            'Comunidad privada',
            'Certificado de finalización',
            'Soporte prioritario'
          ].map((feature, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              ✓ {feature}
            </motion.li>
          ))}
        </motion.ul>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ¡Obtener Acceso Ahora!
        </motion.button>
        <p className="guarantee">30 días de garantía de devolución</p>
      </motion.div>
    </section>
  )
}

export default PricingSection