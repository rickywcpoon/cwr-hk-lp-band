"use client"

import { useScrollAnimation } from '@/hooks/useIntersectionObserver'
import { ReactNode } from 'react'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  animationClass?: string
  delay?: number
  className?: string
}

export default function ScrollAnimationWrapper({ 
  children, 
  animationClass = 'animate-on-scroll',
  delay = 0,
  className = ''
}: ScrollAnimationWrapperProps) {
  const elementRef = useScrollAnimation(animationClass)

  const delayClass = delay > 0 ? `animate-stagger-${Math.min(delay, 4)}` : ''

  return (
    <div 
      ref={elementRef} 
      className={`${animationClass} ${delayClass} ${className}`}
    >
      {children}
    </div>
  )
} 