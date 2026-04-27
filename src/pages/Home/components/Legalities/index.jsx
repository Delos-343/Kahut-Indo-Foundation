import { motion, useReducedMotion } from 'framer-motion'
import ProgrammerImage from '../../../../assets/image_3.jpg'

const laws = [
  {
    text: 'Notary Deed No. 400 by Public Notary Herman Soesilo, dated 11 December 2024.',
  },
  {
    text: 'Registered with the Ministry of Law and Human Rights of the Republic of Indonesia (Kemenkumham) under No. AHU-0019936.AH.01.04, dated 16 December 2024, for the establishment of Yayasan Karsa Hutani Terra Indonesia (Yayasan Kahutindo).',
  },
  {
    text: 'Tax Registration Number (NPWP): 1000 0000 0053 4852',
  },
  {
    text: 'Business Identification Number (NIB): 0303250053139',
  },
]

function HomeLegalities() {
  const reduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.28,
        delayChildren: reduceMotion ? 0 : 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: 28,
          x: -12,
          scale: 0.985,
        },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: reduceMotion ? 0.01 : 1.05,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div id="HomeLegalities">
      <div className="max-w-[1440px] mx-auto pt-16 pb-28 px-6 md:px-10 lg:px-12 2xl:px-0">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.9, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="drop-shadow-sm text-3xl md:text-4xl lg:text-5xl font-semibold text-[#20311d]">
            Legalities
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Official registrations and legal documentation ensuring transparency and compliance.
          </p>
        </motion.div>

        <div className="pt-14 md:pt-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: reduceMotion ? 0.01 : 1, ease: 'easeOut' }}
            className="w-full max-w-[560px] flex justify-center"
          >
            <div className="w-full rounded-3xl bg-white/40 p-6 md:p-8 shadow-lg ring-1 ring-black/5 backdrop-blur-sm">
              <img
                className="w-full h-[280px] md:h-[340px] object-cover rounded-2xl"
                src={ProgrammerImage}
                alt="Legal Illustration"
              />
            </div>
          </motion.div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.55 }}
            className="w-full max-w-[560px] space-y-5 text-gray-700"
          >
            {laws.map((law, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex gap-4 rounded-2xl bg-white/50 px-5 py-5 shadow-sm ring-1 ring-black/5"
              >
                <span className="mt-2 h-3 w-3 rounded-full bg-[#6d8442] shrink-0 shadow-[0_0_0_6px_rgba(109,132,66,0.12)]" />
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  {law.text}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  )
}

export default HomeLegalities
