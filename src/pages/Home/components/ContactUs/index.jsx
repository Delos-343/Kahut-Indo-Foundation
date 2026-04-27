import Dots from '../../../../assets/dots.png'
import { Link } from 'react-router-dom'

const contactCards = [
    {
        title: 'Email',
        value: 'info@kahutindofoundation.org',
        href: 'mailto:info@kahutindofoundation.org',
        hint: 'For collaboration, requests, and follow-ups.',
        delay: '0s',
    },
    {
        title: 'Call / WhatsApp',
        value: '+628567990037',
        href: 'https://wa.me/628567990037',
        hint: 'Quick responses for direct coordination.',
        delay: '0.12s',
    },
    {
        title: 'Start a Conversation',
        value: 'Connect with our team',
        href: '/contact-us',
        hint: 'Open the contact page for full details.',
        delay: '0.24s',
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
                <div className="contact-wind-field absolute inset-0 z-[1]">
                    <span className="contact-wind-orbit" style={{ width: '34rem', height: '12rem', left: '-8%', top: '16%', animationDelay: '0s' }} />
                    <span className="contact-wind-orbit contact-wind-orbit--reverse" style={{ width: '28rem', height: '10rem', left: '30%', top: '30%', animationDelay: '1.1s' }} />
                    <span className="contact-wind-orbit" style={{ width: '30rem', height: '11rem', right: '-6%', top: '20%', animationDelay: '2.2s' }} />
                    <span className="contact-wind-orbit contact-wind-orbit--reverse" style={{ width: '22rem', height: '8rem', left: '18%', bottom: '10%', animationDelay: '0.7s' }} />
                    <span className="contact-wind-sweep" style={{ width: '38rem', left: '-6%', top: '42%', animationDelay: '0s' }} />
                    <span className="contact-wind-sweep contact-wind-sweep--reverse" style={{ width: '30rem', right: '-8%', top: '58%', animationDelay: '1.6s' }} />
                </div>
                <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(182,174,114,0.10),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.84))]" />
            </div>
            <div className='max-w-[1440px] mx-auto relative z-10'>
                <div className="py-16 md:py-20 lg:py-24 px-12 2xl:px-0">
                    <div className="md:flex items-end justify-between gap-10">
                        <div className='md:w-2/3'>
                            <h2 className="drop-shadow-md text-2xl md:text-3xl lg:text-4xl text-indigo-950 font-semibold py-6 md:py-8 lg:py-10">Connect With Us</h2>
                            <p className="text-sm lg:text-base my-4 text-gray-600 max-w-2xl leading-7">
                                Reach out for sustainable forest management support, partnership ideas, or coordination with our foundation team.
                            </p>
                        </div>
                        <div className="md:flex md:flex-col md:justify-center pt-6 md:pt-0">
                            <Link to={'/contact-us'} className="group inline-flex items-center gap-3 rounded-full border border-[#b6ae72]/40 bg-white/70 px-5 py-3 shadow-lg backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:bg-white">
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#86a67a] opacity-75 animate-ping" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#6d8c65]" />
                                </span>
                                <span className="text-sm font-semibold tracking-wide text-indigo-950 transition-colors duration-500 group-hover:text-[#44613f]">Start Here</span>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {contactCards.map((card) => (
                            <a
                                key={card.title}
                                href={card.href}
                                onMouseMove={handleMove}
                                onMouseLeave={handleLeave}
                                className="group contact-card relative overflow-hidden rounded-3xl border border-white/60 bg-white/65 p-6 shadow-[0_18px_50px_rgba(41,54,23,0.08)] backdrop-blur-md"
                                style={{ animationDelay: card.delay }}
                            >
                                <span className="absolute inset-0 contact-card__wind pointer-events-none" />
                                <span className="absolute right-4 top-4 h-16 w-16 rounded-full bg-[#b6ae72]/10 blur-2xl transition-all duration-500 group-hover:scale-125" />
                                <div className="relative z-10">
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d8c65] transition-colors duration-500 group-hover:text-[#44613f]">{card.title}</p>
                                    <h3 className="mt-4 text-lg font-semibold text-indigo-950 transition-all duration-500 group-hover:text-[#31422b] group-hover:translate-x-1">
                                        {card.value}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-gray-600 transition-all duration-500 group-hover:text-gray-700">
                                        {card.hint}
                                    </p>
                                </div>
                                <span className="absolute bottom-4 right-4 text-xs font-medium text-[#6d8c65] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-x-1">
                                    Open ↗
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContactUs
