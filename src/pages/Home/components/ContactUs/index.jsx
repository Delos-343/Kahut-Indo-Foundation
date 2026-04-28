import { motion, useReducedMotion } from 'framer-motion'
import Dots from '../../../../assets/dots.png'
import { Link } from 'react-router-dom'

const contactCards = [
    {
        title: 'Email',
        value: 'info@kahutindofoundation.org',
        href: 'mailto:info@kahutindofoundation.org',
        hint: 'For collaboration, requests, and follow-ups.',
        delay: '0s',
        external: true,
    },
    {
        title: 'Call / WhatsApp',
        value: '+628567990037',
        href: 'https://wa.me/628567990037',
        hint: 'Quick responses for direct coordination.',
        delay: '0.12s',
        external: true,
    },
    {
        title: 'Start a Conversation',
        value: 'Connect with our team',
        href: '/contact-us',
        hint: 'Open the contact page for full details.',
        delay: '0.24s',
        external: false,
    },
]

function HomeContactUs() {
    const reduceMotion = useReducedMotion()

    const handleMove = (event) => {
        const card = event.currentTarget
        const rect = card.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateY = ((x - centerX) / centerX) * 4
        const rotateX = ((centerY - y) / centerY) * 4

        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
        card.style.setProperty('--rotate-x', `${rotateX}deg`)
        card.style.setProperty('--rotate-y', `${rotateY}deg`)
        card.style.setProperty('--lift', '-8px')
    }

    const handleLeave = (event) => {
        const card = event.currentTarget
        card.style.removeProperty('--mouse-x')
        card.style.removeProperty('--mouse-y')
        card.style.removeProperty('--rotate-x')
        card.style.removeProperty('--rotate-y')
        card.style.setProperty('--lift', '0px')
    }

    const cardVariants = {
        rest: {
            y: 0,
            rotateX: 0,
            rotateY: 0,
            transition: {
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
            },
        },
        hover: {
            y: reduceMotion ? 0 : -8,
            rotateX: reduceMotion ? 0 : 1.5,
            rotateY: reduceMotion ? 0 : -1.5,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    }

    return (
        <div
            id="HomeContactUs"
            className="bg-slate-50 relative overflow-hidden"
            style={{
                backgroundImage: `url(${Dots})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'contain',
            }}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(182,174,114,0.10),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.84))]" />
            </div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="py-16 md:py-20 lg:py-24 px-6 sm:px-10 md:px-12 2xl:px-0">
                    <div className="md:flex items-end justify-between gap-10">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-indigo-950 font-semibold py-6 md:py-8 lg:py-10">
                                Connect With Us
                            </h2>
                            <p className="text-sm lg:text-base my-4 text-gray-600 max-w-2xl leading-7">
                                Reach out for sustainable forest management support, partnership ideas, or coordination with our foundation team.
                            </p>
                        </div>

                        <div className="pt-6 md:pt-0">
                            <Link
                                to="/contact-us"
                                className="group inline-flex items-center gap-3 rounded-full border border-[#b6ae72]/40 bg-white/70 px-5 py-3 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:bg-white"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#86a67a] opacity-75 animate-ping" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6d8c65]" />
                                </span>
                                <span className="text-sm font-semibold tracking-wide text-indigo-950 group-hover:text-[#44613f]">
                                    Start Here
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {contactCards.map((card) => {
                            const Wrapper = card.external ? 'a' : Link
                            const wrapperProps = card.external
                                ? {
                                      href: card.href,
                                      target: '_blank',
                                      rel: 'noopener noreferrer',
                                  }
                                : { to: card.href }

                            return (
                                <Wrapper
                                    key={card.title}
                                    {...wrapperProps}
                                    onMouseMove={handleMove}
                                    onMouseLeave={handleLeave}
                                    className="block min-w-0"
                                >
                                    <motion.div
                                        className="group contact-card relative isolate min-w-0 overflow-hidden rounded-3xl border border-white/60 bg-white/65 p-6 shadow-[0_18px_50px_rgba(41,54,23,0.08)] backdrop-blur-md will-change-transform"
                                        style={{ animationDelay: card.delay }}
                                        variants={cardVariants}
                                        initial="rest"
                                        animate="rest"
                                        whileHover="hover"
                                    >
                                        {/* STRONGER WIND FIELD */}
                                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                                            <div
                                                className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                                                style={{
                                                    background:
                                                        'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(198,196,102,0.18), transparent 34%), radial-gradient(circle at calc(var(--mouse-x) + 64px) calc(var(--mouse-y) - 28px), rgba(109,140,101,0.18), transparent 18%), radial-gradient(circle at calc(var(--mouse-x) - 44px) calc(var(--mouse-y) + 30px), rgba(255,255,255,0.38), transparent 20%)',
                                                }}
                                            />

                                            <motion.div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                                initial={false}
                                                animate={reduceMotion ? { opacity: 0 } : { opacity: 1 }}
                                                transition={{
                                                    duration: 0.9,
                                                    ease: [0.16, 1, 0.3, 1],
                                                }}
                                            >
                                                <motion.span
                                                    className="absolute -left-10 top-[28%] h-28 w-72 -translate-y-1/2 rounded-full border border-[#6d8c65]/38 border-r-transparent border-l-transparent blur-[0.2px]"
                                                    animate={
                                                        reduceMotion
                                                            ? {}
                                                            : {
                                                                  rotate: [8, 20, 9, -6, 8],
                                                                  x: [0, 14, 28, 16, 0],
                                                                  y: [0, -8, 4, -4, 0],
                                                              }
                                                    }
                                                    transition={{
                                                        duration: 4.2,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                    }}
                                                />
                                                <motion.span
                                                    className="absolute -left-4 top-[52%] h-24 w-80 -translate-y-1/2 rounded-full border border-[#c4c466]/42 border-t-transparent border-b-transparent blur-[0.15px]"
                                                    animate={
                                                        reduceMotion
                                                            ? {}
                                                            : {
                                                                  rotate: [-14, -4, 12, 0, -14],
                                                                  x: [0, 18, 30, 14, 0],
                                                                  y: [0, 6, -3, 3, 0],
                                                              }
                                                    }
                                                    transition={{
                                                        duration: 5.0,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                    }}
                                                />
                                                <motion.span
                                                    className="absolute -right-14 top-[68%] h-28 w-72 -translate-y-1/2 rounded-full border border-white/55 border-r-transparent border-l-transparent blur-[0.2px]"
                                                    animate={
                                                        reduceMotion
                                                            ? {}
                                                            : {
                                                                  rotate: [16, 6, -10, 3, 16],
                                                                  x: [0, -16, -30, -14, 0],
                                                                  y: [0, -5, 5, -2, 0],
                                                              }
                                                    }
                                                    transition={{
                                                        duration: 5.8,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                    }}
                                                />
                                                <motion.span
                                                    className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6d8c65]/22 border-t-transparent border-b-transparent"
                                                    animate={
                                                        reduceMotion
                                                            ? {}
                                                            : { rotate: [0, 360] }
                                                    }
                                                    transition={{
                                                        duration: 10,
                                                        repeat: Infinity,
                                                        ease: 'linear',
                                                    }}
                                                />
                                                <motion.span
                                                    className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6d8c65]/12 border-l-transparent border-r-transparent"
                                                    animate={
                                                        reduceMotion
                                                            ? {}
                                                            : { rotate: [0, -360] }
                                                    }
                                                    transition={{
                                                        duration: 16,
                                                        repeat: Infinity,
                                                        ease: 'linear',
                                                    }}
                                                />
                                            </motion.div>

                                            {/* LEAF-LIKE GUSTS */}
                                            <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100">
                                                {[...Array(8)].map((_, index) => {
                                                    const left = [10, 18, 28, 40, 56, 68, 78, 88][index]
                                                    const top = [22, 58, 35, 18, 47, 66, 28, 74][index]
                                                    const duration = [4.8, 5.2, 6.0, 5.6, 6.4, 5.1, 6.8, 5.9][index]
                                                    const delay = [0, 0.2, 0.45, 0.1, 0.35, 0.55, 0.75, 0.15][index]

                                                    return (
                                                        <motion.span
                                                            key={index}
                                                            className="absolute h-2.5 w-1.5 rounded-full bg-[#6d8c65]/55 blur-[0.15px]"
                                                            style={{
                                                                left: `${left}%`,
                                                                top: `${top}%`,
                                                            }}
                                                            animate={
                                                                reduceMotion
                                                                    ? {}
                                                                    : {
                                                                          x: [0, 12, 26, 18, 0],
                                                                          y: [0, -10, 4, 14, 0],
                                                                          rotate: [0, 18, 36, 22, 0],
                                                                          opacity: [0, 1, 0.9, 1, 0],
                                                                          scale: [0.7, 1, 0.9, 1, 0.7],
                                                                      }
                                                            }
                                                            transition={{
                                                                duration,
                                                                repeat: Infinity,
                                                                delay,
                                                                ease: 'easeInOut',
                                                            }}
                                                        />
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="relative z-10">
                                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d8c65] transition-colors duration-700 group-hover:text-[#44613f]">
                                                {card.title}
                                            </p>

                                            <h3 className="mt-4 text-base sm:text-lg font-semibold text-indigo-950 break-all leading-snug transition-colors duration-700 group-hover:text-[#1f2f1c]">
                                                {card.value}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-gray-600 text-left sm:text-justify transition-colors duration-700 group-hover:text-gray-700">
                                                {card.hint}
                                            </p>
                                        </div>

                                        <span className="absolute bottom-4 right-4 text-xs font-medium text-[#6d8c65] opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:-translate-x-1">
                                            Open ↗
                                        </span>
                                    </motion.div>
                                </Wrapper>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContactUs
