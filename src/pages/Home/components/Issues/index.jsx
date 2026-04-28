import Dots from '../../../../assets/dots.png'

const PlaceholderIcon = () => (
  <svg
    className="w-6 h-6 text-[#6d8442] flex-shrink-0 mt-[3px]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
    />
  </svg>
)

function Issues() {
  const issues = [
    'Dire need for transparency and inclusive participation in decision-making',
    'Slow progress in implementing worker- and community-centered initiatives',
    'Challenges in coordinating workers, communities, industry, and other stakeholders',
    'Limited resources to sustain capacity-building and local economic programs',
  ]

  return (
    <div
      id="Issues"
      className="relative py-20 md:py-28"
      style={{
        backgroundImage: `url(${Dots})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 2xl:px-0">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#20311d]">
            Issues Addressed
          </h3>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Key challenges in forestry ecosystems and community collaboration that the foundation aims to address.
          </p>
        </div>

        {/* Issues Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-2xl bg-white/60 backdrop-blur-sm p-5 shadow-sm ring-1 ring-black/5"
            >
              <PlaceholderIcon />
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                {issue}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Issues
