import './SocialProof.css'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

function SocialProof() {
  const logos = [
    { name: 'Forbes', url: 'https://1000logos.net/wp-content/uploads/2021/05/Forbes-logo.png' },
    { name: 'TechCrunch', url: 'https://1000logos.net/wp-content/uploads/2021/05/TechCrunch-logo.png' },
    { name: 'Business Insider', url: 'https://1000logos.net/wp-content/uploads/2021/05/Business-Insider-logo.png' }
  ]

  const stats = [
    { number: '10,000+', label: 'Estudiantes' },
    { number: '4.9/5', label: 'Calificación' },
    { number: '97%', label: 'Satisfacción' }
  ]

  return (
    <section className="social-proof">
      <motion.div 
        className="logos"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {logos.map((logo, index) => (
          <motion.div 
            key={index} 
            className="logo-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ opacity: 1 }}
          >
            <img src={logo.url} alt={logo.name} className="logo" />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                delay: index * 0.2 
              }}
            >
              {stat.number}
            </motion.h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SocialProof