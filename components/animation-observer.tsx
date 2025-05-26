"use client"

import { useEffect } from 'react'

export default function AnimationObserver() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .slide-in-left, .slide-in-right, .scale-in'
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return null
} 