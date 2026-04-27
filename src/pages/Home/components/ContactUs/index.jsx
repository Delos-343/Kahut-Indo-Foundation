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

    return (
        <div
            id="HomeContactUs"
            className='bg-slate-50 relative overflow-hidden'
            style={{ backgroundImage: `url(${Dots})`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(182,174,114,0.10),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.84))]" />
            </div>

            <div className='max-w-[1440px] mx-auto relative z-10'>
                <div className="py-16 md:py-20 lg:py-24 px-6 sm:px-10 md:px-12 2xl:px-0">

                    {/* HEADER */}
                    <div className="md:flex items-end justify-between gap-10">
                        <div className='md:w-2/3'>
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

                    {/* CARDS */}
                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {contactCards.map((card) => {
                            const Wrapper = card.external ? 'a' : Link
                            const wrapperProps = card.external
                                ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' }
                                : { to: card.href }

                            return (
                                <Wrapper
                                    key={card.title}
                                    {...wrapperProps}
                                    onMouseMove={handleMove}
                                    onMouseLeave={handleLeave}
                                    className="group contact-card relative min-w-0 overflow-hidden rounded-3xl border border-white/60 bg-white/65 p-6 shadow-[0_18px_50px_rgba(41,54,23,0.08)] backdrop-blur-md"
                                    style={{ animationDelay: card.delay }}
                                >
                                    <span className="absolute inset-0 pointer-events-none" />

                                    <div className="relative z-10">
                                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d8c65] group-hover:text-[#44613f]">
                                            {card.title}
                                        </p>

                                        {/* FIXED: break long strings */}
                                        <h3 className="mt-4 text-base sm:text-lg font-semibold text-indigo-950 break-all leading-snug">
                                            {card.value}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-gray-600 group-hover:text-gray-700 text-left sm:text-justify">
                                            {card.hint}
                                        </p>
                                    </div>

                                    <span className="absolute bottom-4 right-4 text-xs font-medium text-[#6d8c65] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1">
                                        Open ↗
                                    </span>
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
