const activitiesData = [
  { code: '88992', title: 'Community care and support', description: 'Hands-on support for people and communities who need a little extra help.' },
  { code: '88919', title: 'Fundraising and social drives', description: 'Simple efforts to collect donations and back social causes that matter.' },
  { code: '94990', title: 'Membership-based organizing', description: 'Activities that bring members together, keep them involved, and help them move as one.' },
  { code: '70209', title: 'Management advice and planning', description: 'Practical guidance for organizations that need direction, structure, and a clearer path forward.' },
  { code: '74909', title: 'Professional, research, and technical work', description: 'Flexible support work that mixes expertise, analysis, and problem-solving.' },
  { code: '78429', title: 'Job training and upskilling', description: 'Training sessions designed to help people build useful work skills.' },
  { code: '85499', title: 'Private learning support', description: 'Education-related activities that support learners, teachers, and training programs.' },
  { code: '02403', title: 'Forest restoration support', description: 'Projects that help bring damaged forest areas back to life.' },
  { code: '02402', title: 'Forest protection and conservation', description: 'Efforts focused on safeguarding forests and keeping nature healthy.' },
  { code: '71201', title: 'Certification services', description: 'Support for standards, checks, and certificates that build trust.' },
  { code: '85500', title: 'Education support activities', description: 'Behind-the-scenes work that makes learning programs run smoothly.' },
  { code: '82990', title: 'Business support services', description: 'Everyday support work that helps operations stay organized and efficient.' },
  { code: '69109', title: 'Legal support work', description: 'Work related to legal help, advice, and dispute support.' },
  { code: '68111', title: 'Property and real-estate activities', description: 'Activities connected to properties, spaces, and assets that are managed or used.' },
];

const leftColumnData = activitiesData.slice(0, 7);
const rightColumnData = activitiesData.slice(7);

function BusinessFields() {
  return (
    <div className="min-h-screen px-4 pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-[#b6ae72] to-[#f7f3e8]">
      <div className="text-center mb-10 md:mb-14">
        <p className="mb-8 text-sm uppercase tracking-[0.35em] text-white">
          Our Works
        </p>
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-slate-800">
          Activities
        </h1>
        <p className="mx-auto max-w-2xl text-lg md:text-xl font-medium text-[#6b6f49]">
          A friendlier look at the things we do, organized by activity area rather than formal industry wording.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 items-stretch">
        <div className="flex h-full flex-col space-y-6">
          {leftColumnData.map((item, index) => (
            <div
              key={`left-${item.code}-${index}`}
              className="h-full bg-white/95 p-5 rounded-2xl shadow-md border-l-4 border-[#7f8050]"
            >
              <p className="mb-1 text-sm font-semibold text-[#7f8050]">
                {item.code}
              </p>
              <p className="text-lg font-semibold text-gray-800">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex h-full flex-col space-y-6">
          {rightColumnData.map((item, index) => (
            <div
              key={`right-${item.code}-${index}`}
              className="h-full bg-white/95 p-5 rounded-2xl shadow-md border-l-4 border-[#5f6338]"
            >
              <p className="mb-1 text-sm font-semibold text-[#5f6338]">
                {item.code}
              </p>
              <p className="text-lg font-semibold text-gray-800">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessFields;
