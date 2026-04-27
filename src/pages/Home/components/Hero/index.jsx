import StartBuilding from '../../../../assets/logo_perusahaan.png'
import { Link } from 'react-router-dom'

const fallingLeaves = [
    { left: '4%', size: 20, delay: '0s', duration: '13s', drift: '52px', rotate: '-18deg', opacity: 0.75 },
    { left: '10%', size: 14, delay: '1.3s', duration: '11s', drift: '38px', rotate: '14deg', opacity: 0.6 },
    { left: '18%', size: 24, delay: '2.1s', duration: '15s', drift: '62px', rotate: '-28deg', opacity: 0.68 },
    { left: '26%', size: 16, delay: '0.7s', duration: '12s', drift: '34px', rotate: '8deg', opacity: 0.7 },
    { left: '34%', size: 22, delay: '3s', duration: '14s', drift: '44px', rotate: '-12deg', opacity: 0.7 },
    { left: '45%', size: 15, delay: '2.7s', duration: '12s', drift: '58px', rotate: '22deg', opacity: 0.55 },
    { left: '56%', size: 18, delay: '1.6s', duration: '13s', drift: '40px', rotate: '-10deg', opacity: 0.65 },
    { left: '66%', size: 25, delay: '0.5s', duration: '16s', drift: '70px', rotate: '18deg', opacity: 0.72 },
    { left: '74%', size: 16, delay: '2.2s', duration: '11s', drift: '28px', rotate: '-24deg', opacity: 0.55 },
    { left: '84%', size: 20, delay: '1.1s', duration: '14s', drift: '46px', rotate: '12deg', opacity: 0.68 },
    { left: '92%', size: 14, delay: '2.8s', duration: '12s', drift: '36px', rotate: '-6deg', opacity: 0.55 },
]

function HomeHero() {
    return (
        <div id='HomeHero' className='relative overflow-hidden bg-gradient-to-b from-[#C4C466] to-white'>
            <div className='pointer-events-none absolute inset-0 overflow-hidden'>
                <div className='absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.12),transparent_26%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.08),transparent_28%)]' />
                {fallingLeaves.map((leaf, index) => (
                    <span
                        key={index}
                        aria-hidden='true'
                        className='falling-leaf absolute top-[-15%] rounded-[999px_999px_999px_40%] bg-[linear-gradient(135deg,#dbe6b5_0%,#a1b76a_48%,#6d8442_100%)] shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                        style={{
                            left: leaf.left,
                            width: `${leaf.size}px`,
                            height: `${Math.max(leaf.size * 0.7, 10)}px`,
                            opacity: leaf.opacity,
                            "--leaf-drift": leaf.drift,
                            "--leaf-rotate": leaf.rotate,
                            animationDelay: leaf.delay,
                            animationDuration: leaf.duration,
                        }}
                    />
                ))}
            </div>

            <div className='relative z-[1] lg:min-h-[72vh] max-w-[1440px] mx-auto'>
                <div className='pt-32 md:pt-36 lg:pt-44 pb-16 lg:pb-20 px-6 sm:px-10 md:px-12 2xl:px-0 grid items-center gap-12 lg:grid-cols-2'>
                    <div className='max-w-2xl flex-1'>
                        <p className='inline-flex rounded-full border border-white/10 bg-slate-800/10 px-4 py-1 text-xs md:text-sm font-medium tracking-[0.25em] text-white/90 uppercase backdrop-blur-sm'>
                            Forestry • Community • Sustainability
                        </p>
                        <h1 className='text-3xl md:text-5xl lg:text-7xl my-5 font-semibold text-[#6a5a41]/90 leading-tight drop-shadow-[0_3px_18px_rgba(0,0,0,0.18)]'>
                            KahutIndo Foundation
                        </h1>
                        <p className='text-base md:text-lg lg:text-md my-4 font-light max-w-xl text-slate-600/90 leading-relaxed'>
                            Menumbuhkan kerja sama, penguatan kapasitas, dan program keberlanjutan yang selaras dengan ekosistem kehutanan dan masyarakat di sekitarnya.
                        </p>
                        <div className='mt-10 lg:mt-14 transition duration-200 ease-in-out hover:transform hover:translate-y-[-3px]'>
                            <Link to={'/contact-us'}>
                                <div className='inline-flex items-center gap-2 rounded-full bg-[#41562c] px-6 py-3 shadow-xl shadow-black/15 ring-1 ring-white/10'>
                                    <p className='text-white/90 text-sm md:text-base font-medium'>
                                        Hubungi Kami
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='relative flex justify-center lg:justify-end'>
                        <div className='absolute inset-0 -z-10 rounded-full bg-white/10 blur-3xl' />
                        <div className='relative max-w-xl'>
                            <div className='absolute inset-x-8 bottom-4 h-8 rounded-full bg-black/10 blur-2xl' />
                            <img className='relative object-contain h-80 md:h-[28rem] drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)]' src={StartBuilding} alt='Kahutindo Foundation emblem' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero
