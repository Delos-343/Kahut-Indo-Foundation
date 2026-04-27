import React, { useState } from 'react'; // Import useState
import RevoLogo from '../../../assets/revo-logo.png';

// --- Image Imports (Ensure paths are correct) ---
import AgusSalimImg from '../Experts/components/AgusSalim.png';
import SukarjoImg from '../Experts/components/Sukarjo.png';
import WahyuRamdhaniImg from '../Experts/components/WahyuRamdhani.png';
import RulitaWijayaningdyahImg from '../Experts/components/RulitaWijayaningdyah.png';
import JayadiMuhThahaImg from '../Experts/components/JayadiMuhTaha.png'; // Corrected typo? Taha vs Thaha
import NoerTjahjonoImg from '../Experts/components/NoerTjahjono.png';
import RirinRinawatiImg from '../Experts/components/RirinRinawati.png';
import IlmaAlyaniImg from '../Experts/components/IlmaAlyani.png';
import PikiranDaeliImg from '../Experts/components/PikiranDaeli.png';
// --- End Image Imports ---

// --- Import the Modal Component ---
import ProfileModal from '../Experts/ProfileModal'; // Adjust path as needed
// ----------------------------------


function Experts() {
    // --- State for Modal ---
    const [selectedMember, setSelectedMember] = useState(null); // null when closed, member object when open
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Optional: Delay clearing selectedMember for smoother transition
        setTimeout(() => setSelectedMember(null), 300); // Match transition duration
    };
    // -----------------------


    // Data profil (sekarang 9 orang) - Keep descriptions here
    const teamMembers = [
         {
            name: 'Agus Salim', imageUrl: AgusSalimImg,
            description: `Agus has worked in the manufacturing industriesin East Java for more than 30 years, where he built solid grassroots organizing, community engagements and alliances among various civil society organizations. Under his strong leadership, the workers movement in Gresik-East Java has become one of the most active in the country. He is a licensed Legal Curator and Liquidator aside from his day job as advocate in his own law firm. Agus was appointed as member of National Tripartite Council for the period of 2019-2023, during a critical period with the passing of Omnibuslaw (UU Cipta Kerja) by the national parliament` // Full description
        },
        {
            name: 'Sukarjo', imageUrl: SukarjoImg,
            description: `Sukarjo is a certified Occupational Safety and Health Expert with over 30 years of experience in wood-based manufacturing industries. He is a renowned negotiator in the Regional Tripartite and Wage Council of East Kalimantan, and through his persistent lobbying forsocial dialogues on industrial issues, a joint monitoring taskforce on labour inspection has been established in the province, the first ever in Indonesia. A licensed advocate with his own law firm and a natural public speaker with grassroots organizing skills, Sukarjo has trained many activists and political prodigies on civic education, labour laws and collective bargaining, and actively involved in the sectoral policy discourses. ` // Full description
        },
         {
            name: 'Wahyu Ramdhani', imageUrl: WahyuRamdhaniImg,
            description: `Wahyu is a Program Manager at Stanford Seed, with over 8 years of experience in training, mentoring, and comanaging entrepreneurship and cybersecurity programs for people with disabilities and youth. He graduated with Law Degree from University of Indonesia and MBA from Gadjah Mada University. Additionally, he actively participates in various projects as a Trainer, Facilitator, and Assessor. Wahyu is passionate about driving positive change and growth in individuals and organizations through strategic planning and effective execution. His areas of expertise include program management, training, mentoring, entrepreneurship, social entrepreneurship, mindset change, financial management, and NGO financial sustainability and leadership programs.` // Full description
        },
        {
            name: 'Rulita Wijayaningdyah', imageUrl: RulitaWijayaningdyahImg,
            description: `Rulita has over 25 years of experience in program management, training and organizational leadership development. With exposures of leading roles at trade union and global multistakeholder organizations, her extensive international policy negotiations and engagements with particular focus on social aspects in forestry industrial and climate change issues, she has brought workers and social interest agenda into highlevel policy making deliberations on sustainability. A licensed/certified Mediator, Conciliator, Facilitator and Contract Drafter, alongside with her academic background in German Literature and Sociology, Law and Master Program in Public Administration, whilst nourishing her passion to delivering empowerment programs, Rulita was entrusted to lead the Foundation.` // Full description
        },
        {
            name: 'Jayadi Muh Thaha', imageUrl: JayadiMuhThahaImg,
            description: `Jayadi is a union trainer, certified ISO, JAS, US EFA and ISPS internal auditor with over 30 years experience in wood-based manufacturing and plantation sectors in Sulawesi and East Kalimantan. He has been appointed to be in charge for corporate community development and external affairs, where he built extensive network with his passions in stakeholder relations. His law degree and advocate license was rarely used for his work with the communities because he believes that collaboration can only be built on mutual trust and constructive dialogues. This approach earned him valuable recognition when he served as member of FSC National Standard Development Group in Indonesia. 
` // Full description
        },
        {
            name: 'Noer Tjahjono', imageUrl: NoerTjahjonoImg,
            description: `TTjahjo is a grassroot organizer and paralegal on workers’ issues in Central Java. With over 20 years of experience, he is in charge for Kahutindo Training Center activities and development. ` // Full description
        },
        {
            name: 'Ririn Rinawati', imageUrl: RirinRinawatiImg,
            description: `Rina administersthe day-to-day operation of the Kahutindo Training Center in Ungaran, Central Java since 2015. Before she joined the Center, she was involved in various women support groups. As a bachelor in Economics and with her interpersonal skills that contributed on engaging diverse groups of local communities with the Center, she is entrusted as Treasurer of the Foundation.` // Full description
        },
        {
            name: 'Ilma Alyani', imageUrl: IlmaAlyaniImg,
            description: `Ilma is a project manager with over 6 years of experience leading education and youth-focused initiatives across Indonesia. Currently, she manages the BSI Scholarship Program at Maxima Impact Consulting in partnership with BSI Maslahat, supporting more than 4,400 students and 147 mentors nationwide. She oversees the end-toend implementation of the program while leading a team and ensuring the smooth delivery of mentoring sessions, webinars, and offline bootcamps in multiple cities. Throughout her career, she has collaborated with organizations such as Plan International Indonesia and the Ministry of Education, contributing to projects in soft skills development and national education. Her core strengths include program operations, stakeholder coordination, and designing meaningful learning experiences. Ilma holds a Master’s degree in Management from IPB University. She is fluent in Indonesian and English, with intermediate proficiency in Spanish—making her wellequipped for both local and international collaboration.` // Full description
        },
        {
            name: 'Pikiran Daeli', imageUrl: PikiranDaeliImg,
            description: `Pikiran had an extensive 31 years experience in private sectors and forest management operations covering supply chain/logistics, organization & people development, business process improvement and plantation control, where he has been awarded many recognitions for his logistics management innovations. He is a certified BNSP National Professional Instructor Level 4 KKNI and holds a Master’s degree in Management, currently lecturing Strategic Human Resources Management at the University Adiwangsa Jambi. Based in central part of Sumatera, Pikiran has firsthand exposures with the challenges of the industry stakeholders in the context of sustainable development and climate. ` // Full description
        }
    ];

    return (
        <>
            {/* Bagian Header Awal (No changes needed here) */}
            <div className='pt-32 md:pt-40 text-center px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 pb-16 bg-gradient-to-b from-[#C4C466] to-[#fcfaf5] text-gray-700'>
                {/* <img className='h-48 sm:h-56 md:h-64 inline-block mb-8' src={RevoLogo} alt="Revo Logo" /> */}
                <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-900 to-red-800 bg-clip-text text-transparent mt-10 mb-6'>
                    Meet Our Experts and Team
                </h1>
                <p className='mt-4 text-base md:text-lg lg:text-xl max-w-3xl mx-auto'>
                We are a team of dedicated professionals, social workers, and experts united by a clear purpose: driving social change towards a sustainable, empowered, equitable, and inclusive welfare society. Established by the Indonesian Forestry and Allied Workers Union (Kahutindo Union), our non-profit organization focuses on improving the welfare of workers and communities impacted by industries through targeted capacity building, alternative dispute resolution, local economic development, and related empowerment programs.                </p>
            </div>

            {/* Bagian Profil Tim */}
            <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-16 lg:py-24 bg-gray-50">
                {/* Container untuk card profile */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8"> {/* Adjusted grid for potentially more items & smaller cards */}

                    {teamMembers.map((member, index) => (
                        // Simplified Card - Click to open modal
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 sm:p-6 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group" // Added cursor-pointer and group for potential hover effects on children
                            onClick={() => openModal(member)} // Trigger modal on click
                        >
                            {/* Gambar Profil */}
                            <div className="flex-shrink-0 mb-3">
                                <img
                                    className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover border-4 border-green-200 shadow-md" // Slightly smaller image maybe
                                    src={member.imageUrl}
                                    alt={`Profile of ${member.name}`}
                                />
                            </div>
                             {/* Nama Saja */}
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors"> {/* Added hover effect */}
                                    {member.name}
                                </h4>
                                {/* Description is removed from here */}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

             {/* Modal Rendering */}
            <ProfileModal
                isOpen={isModalOpen}
                onClose={closeModal}
                member={selectedMember}
            />
        </>
    )
}

export default Experts;