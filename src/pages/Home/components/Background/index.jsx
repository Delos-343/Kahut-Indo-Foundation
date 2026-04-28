import { motion, useReducedMotion } from 'framer-motion'
import ProgrammerImage from '../../../../assets/image_1.jpg'
import Dots from '../../../../assets/dots.png'

function HomeBackgrounds() {
    const reduceMotion = useReducedMotion()

    const sectionVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: reduceMotion ? 0 : 0.35,
                delayChildren: reduceMotion ? 0 : 0.25
            }
        }
    }

    const titleVariants = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 18
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduceMotion ? 0 : 1.4,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    }

    const imageVariants = {
        hidden: {
            opacity: 0,
            x: reduceMotion ? 0 : -24,
            scale: reduceMotion ? 1 : 0.985
        },
        show: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: reduceMotion ? 0 : 1.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    }

    const cardsContainerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: reduceMotion ? 0 : 0.28,
                delayChildren: reduceMotion ? 0 : 0.45
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 22
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduceMotion ? 0 : 1.3,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    }

    const cardHover = reduceMotion
        ? undefined
        : {
              y: -3,
              scale: 1.008
          }

    return (
        <motion.section
            id="HomeBackgrounds"
            className="bg-slate-50"
            style={{
                backgroundImage: `url(${Dots})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'contain'
            }}
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
        >
            <div className='max-w-[1440px] mx-auto pt-10 pb-24 px-6 sm:px-10 md:px-12 2xl:px-0'>
                {/* TITLE */}
                <motion.div className="text-center" variants={titleVariants}>
                    <h2 className="drop-shadow-md text-2xl md:text-3xl lg:text-4xl font-semibold text-[#20311d]">
                        Background
                    </h2>
                </motion.div>

                {/* CONTENT */}
                <div className="pt-16 md:pt-24 lg:flex lg:gap-12 2xl:gap-0">
                    {/* IMAGE */}
                    <motion.div
                        className='lg:flex-1 flex justify-center lg:items-center'
                        variants={imageVariants}
                    >
                        <motion.img
                            className='max-h-80 sm:max-h-96 lg:max-h-none lg:h-4/5 object-contain'
                            src={ProgrammerImage}
                            alt="Background illustration"
                            whileHover={cardHover}
                            transition={{
                                duration: reduceMotion ? 0 : 0.9,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        />
                    </motion.div>

                    {/* TEXT BLOCKS */}
                    <motion.div
                        className='pt-10 lg:pt-0 lg:flex-1 space-y-10'
                        variants={cardsContainerVariants}
                    >
                        <motion.div
                            className='bg-[#f2f4ec] px-6 py-10 shadow-lg rounded-lg will-change-transform'
                            variants={cardVariants}
                            whileHover={cardHover}
                            transition={{
                                duration: reduceMotion ? 0 : 0.9,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <div className='flex items-center'>
                                <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black'>
                                    Established
                                </h3>
                            </div>
                            <p className='leading-6 text-sm lg:leading-8 lg:text-base text-slate-600 mt-4 text-left sm:text-justify [hyphens:auto]'>
                                by the Indonesian Forestry and Allied Workers Union (Kahutindo Union) as mandated by its 7<sup>th</sup> National Congress in August 2024.
                            </p>
                        </motion.div>

                        <motion.div
                            className='bg-[#f2f4ec] px-6 py-10 shadow-lg rounded-lg will-change-transform'
                            variants={cardVariants}
                            whileHover={cardHover}
                            transition={{
                                duration: reduceMotion ? 0 : 0.9,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <div className='flex items-center'>
                                <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black'>
                                    Purpose
                                </h3>
                            </div>
                            <p className='leading-6 text-sm lg:leading-8 lg:text-base text-slate-600 mt-4 text-left sm:text-justify [hyphens:auto]'>
                                Non-profit organization aiming for social change toward a sustainable, empowered, equitable and inclusive welfare society.
                            </p>
                        </motion.div>

                        <motion.div
                            className='bg-[#f2f4ec] px-6 py-10 shadow-lg rounded-lg will-change-transform'
                            variants={cardVariants}
                            whileHover={cardHover}
                            transition={{
                                duration: reduceMotion ? 0 : 0.9,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <div className='flex items-center'>
                                <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black'>
                                    Mission
                                </h3>
                            </div>
                            <p className='leading-6 text-sm lg:leading-8 lg:text-base text-slate-600 mt-4 text-left sm:text-justify [hyphens:auto]'>
                                Improving the welfare of workers and communities whose livelihood is dependent and/or affected by industries through capacity building, alternative dispute resolutions, local economic development, and other relevant programs.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default HomeBackgrounds
