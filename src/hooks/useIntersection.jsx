// src/hooks/useIntersection.js
import { useState, useEffect, useRef } from 'react'

export const useStickyObserver = () => {
  const [isSticky, setIsSticky] = useState(false)
  const stickyRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cambia el estado cuando el elemento no está 100% visible
        setIsSticky(entry.intersectionRatio < 1)
      },
      { threshold: [1], rootMargin: '-1px 0px 0px 0px' }, // Ajuste fino
    )

    if (stickyRef.current) observer.observe(stickyRef.current)
    return () => observer.disconnect()
  }, [])

  console.log(isSticky)

  return { isSticky, stickyRef }
}
