'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
    useEffect(() => {
        // ── Scroll-triggered card reveals
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const el = e.target as HTMLElement
                        el.style.opacity = '1'
                        el.style.transform = 'translateY(0)'
                        observer.unobserve(el)
                    }
                })
            },
            { threshold: 0.1 }
        )

        const cards = document.querySelectorAll<HTMLElement>(
            '.svc-card, .why-card, .about-card'
        )
        cards.forEach((el, i) => {
            el.style.opacity = '0'
            el.style.transform = 'translateY(20px)'
            el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`
            observer.observe(el)
        })

        // ── Active nav link on scroll
        const handleScroll = () => {
            const sections = document.querySelectorAll<HTMLElement>('[id]')
            let cur = ''
            sections.forEach((s) => {
                if (window.scrollY >= s.offsetTop - 90) cur = s.id
            })
            document.querySelectorAll<HTMLAnchorElement>('.nav-links a').forEach((a) => {
                const href = a.getAttribute('href')?.replace('#', '') ?? ''
                a.style.color = href === cur ? '#1A6B3C' : ''
                a.style.fontWeight = href === cur ? '600' : ''
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return null
}