import './Testimonials.css'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

function Testimonials() {
  const testimonials = [
    {
      name: 'Ana García',
      role: 'Data Scientist',
      text: 'Este curso transformó mi carrera. Ahora trabajo con IA todos los días y mi productividad se multiplicó.',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Carlos Ruiz',
      role: 'Emprendedor Tech',
      text: 'La mejor inversión que he hecho. Las herramientas de IA que aprendí me ayudaron a automatizar mi negocio.',
      image: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'Laura Martínez',
      role: 'Marketing Manager',
      text: 'Increíble el valor que ofrece. Los recursos exclusivos y la comunidad son oro puro.',
      image: 'https://i.pravatar.cc/150?img=3'
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="testimonials">
      <AnimatedSection>
        <h2>Lo que dicen nuestros alumnos</h2>
      </AnimatedSection>
      <motion.div 
        className="testimonials-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            variants={item}
            whileHover={{ scale: 1.03 }}
          >
            <motion.img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="testimonial-image"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 * index }}
            />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="text">"{testimonial.text}"</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Testimonials