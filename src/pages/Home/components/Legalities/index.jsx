import { motion, useReducedMotion } from 'framer-motion'
import ProgrammerImage from '../../../../assets/image_3.jpg'

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

        <div className="pt-14 md:pt-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: reduceMotion ? 0.01 : 1, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <img
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
              src={ProgrammerImage}
              alt="Legal Illustration"
            />
          </motion.div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.55 }}
            className="space-y-5 text-gray-700"
          >
            <motion.li
              variants={itemVariants}
              className="flex gap-4 rounded-2xl bg-white/50 px-4 py-4 shadow-sm ring-1 ring-black/5"
            >
              <span className="mt-2 h-3 w-3 rounded-full bg-[#6d8442] shrink-0 shadow-[0_0_0_6px_rgba(109,132,66,0.12)]" />
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                Notary Deed No. 400 by Public Notary Herman Soesilo, dated 11 December 2024.
              </p>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className="flex gap-4 rounded-2xl bg-white/50 px-4 py-4 shadow-sm ring-1 ring-black/5"
            >
              <span className="mt-2 h-3 w-3 rounded-full bg-[#6d8442] shrink-0 shadow-[0_0_0_6px_rgba(109,132,66,0.12)]" />
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                Registered with the Ministry of Law and Human Rights of the Republic of Indonesia (Kemenkumham) under No: AHU-0019936.AH.01.04 in 2024, dated 16 December 2024, for the establishment of Yayasan Karsa Hutani Terra Indonesia (Yayasan Kahutindo).
              </p>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className="flex gap-4 rounded-2xl bg-white/50 px-4 py-4 shadow-sm ring-1 ring-black/5"
            >
              <span className="mt-2 h-3 w-3 rounded-full bg-[#6d8442] shrink-0 shadow-[0_0_0_6px_rgba(109,132,66,0.12)]" />
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                Tax Registration Number (NPWP): 1000 0000 0053 4852
              </p>
            </motion.li>

            <motion.li
              variants={itemVariants}
              className="flex gap-4 rounded-2xl bg-white/50 px-4 py-4 shadow-sm ring-1 ring-black/5"
            >
              <span className="mt-2 h-3 w-3 rounded-full bg-[#6d8442] shrink-0 shadow-[0_0_0_6px_rgba(109,132,66,0.12)]" />
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                Business Identification Number (NIB): 0303250053139
              </p>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  )
}

export default HomeLegalities
