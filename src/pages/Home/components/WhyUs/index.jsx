import { motion, useReducedMotion } from 'framer-motion'
import WorkersIcon from '../../../../assets/pekerja.jpg'
import IndigenousIcon from '../../../../assets/sukuadat.jpg'
import LocalIcon from '../../../../assets/local_communities.jpg'
import StakeHolderIcon from '../../../../assets/stakeholders.jpg'
import GovernmentIcon from '../../../../assets/government.jpg'
import Dots from '../../../../assets/dots.png'

const beneficiaries = [
  {
    title: 'Workers & Families',
    description: 'Workers, union members, and their families',
    icon: WorkersIcon,
    alt: 'Workers Icon',
  },
  {
    title: 'Local Communities',
    description: 'Local communities',
    icon: LocalIcon,
    alt: 'Local Communities Icon',
  },
  {
    title: 'Indigenous Peoples',
    description: 'Indigenous peoples’ groups',
    icon: IndigenousIcon,
    alt: 'Indigenous Peoples Icon',
  },
  {
    title: 'Industry Players',
    description: 'Industry players and stakeholders',
    icon: StakeHolderIcon,
    alt: 'Industry Players Icon',
  },
  {
    title: 'Government',
    description: 'Government',
    icon: GovernmentIcon,
    alt: 'Government Icon',
  },
]

function HomeWhyUs() {
  const reduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.24,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  }

  const cardVariants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: 40,
          scale: 0.96,
          filter: 'blur(5px)',
        },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: reduceMotion ? 0.01 : 0.95,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const iconVariants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 18, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reduceMotion ? 0.01 : 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div
      id="HomeWhyUs"
      className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 2xl:px-0 py-10"
      style={{
        backgroundImage: `url(${Dots})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
      }}
    >
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <h2 className="drop-shadow-md text-3xl md:text-4xl lg:text-5xl font-semibold text-[#20311d] py-12">
          Beneficiaries
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
      >
        {beneficiaries.map((item, index) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            className={`w-full ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="beneficiary-card flex h-full flex-col items-center bg-white p-6 md:p-7 lg:p-8 rounded-2xl shadow-md ring-1 ring-black/5"
            >
              <motion.img
                variants={iconVariants}
                src={item.icon}
                alt={item.alt}
                className="h-36 md:h-40 w-auto object-contain mb-6 md:mb-8 lg:mb-10"
              />

              <h3 className="text-lg md:text-xl lg:text-2xl text-center font-bold text-[#20311d] mb-3 md:mb-4">
                {item.title}
              </h3>

              <p className="text-sm md:text-base lg:text-lg text-center text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default HomeWhyUs
