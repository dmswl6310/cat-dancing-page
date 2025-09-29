import { useState, useEffect, useCallback } from 'react'

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault()
        toggleAnimation()
      }
      if (event.key === 'Enter') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleAnimation])

  return {
    isAnimating,
    toggleAnimation,
    startAnimation,
    stopAnimation
  }
}