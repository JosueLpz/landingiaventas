import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <header className="header">
      <div className="header-content">
        <span className="pre-title">Curso Completo 2024</span>
        <h1>
          Domina la Inteligencia Artificial
          <span className="highlight"> Acceso de Por Vida</span>
        </h1>
        <p className="subtitle">
          Desbloquea el potencial ilimitado de la IA y transforma tu carrera profesional
        </p>
        
        <div className="countdown">
          <p className="urgency">¡Oferta especial termina en!</p>
          <div className="timer">
            <div className="time-block">
              <span className="number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="label">Horas</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-block">
              <span className="number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="label">Minutos</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-block">
              <span className="number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="label">Segundos</span>
            </div>
          </div>
        </div>

        <button className="cta-button">
          ¡Quiero Transformar Mi Futuro en IA!
        </button>
        
        <div className="guarantee">
          <span className="guarantee-icon">🔒</span>
          <span className="guarantee-text">Garantía de devolución de 30 días</span>
        </div>
      </div>
    </header>
  )
}

export default Header