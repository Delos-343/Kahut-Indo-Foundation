import React, { useState } from 'react';

import AgusSalimImg from '../Experts/components/AgusSalim.png';
import SukarjoImg from '../Experts/components/Sukarjo.png';
import WahyuRamdhaniImg from '../Experts/components/WahyuRamdhani.png';
import RulitaWijayaningdyahImg from '../Experts/components/RulitaWijayaningdyah.png';
import JayadiMuhThahaImg from '../Experts/components/JayadiMuhTaha.png';
import NoerTjahjonoImg from '../Experts/components/NoerTjahjono.png';
import RirinRinawatiImg from '../Experts/components/RirinRinawati.png';
import PikiranDaeliImg from '../Experts/components/PikiranDaeli.png';

import ProfileModal from '../Experts/ProfileModal';

function Experts() {
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedMember(null), 300);
    };

    const teamMembers = [
        {
            name: 'Agus Salim', imageUrl: AgusSalimImg,
            description: `Agus has worked in the manufacturing industries in East Java for more than 30 years, where he built strong grassroots organizing, community engagement, and alliances among civil society organizations. Under his leadership, the workers movement in Gresik-East Java has become one of the most active in the country. He is a licensed Legal Curator and Liquidator aside from his day job as an advocate in his own law firm. Agus served as a member of the National Tripartite Council for the period of 2019-2023 during a critical period with the passing of Omnibus Law (UU Cipta Kerja) by the national parliament.`
        },
        {
            name: 'Sukarjo', imageUrl: SukarjoImg,
            description: `Sukarjo is a certified Occupational Safety and Health Expert with over 30 years of experience in wood-based manufacturing industries. He is a well-known negotiator in the Regional Tripartite and Wage Council of East Kalimantan, and through his persistent lobbying for social dialogues on industrial issues, a joint monitoring taskforce on labour inspection has been established in the province, the first ever in Indonesia. A licensed advocate with his own law firm and a natural public speaker with grassroots organizing skills, Sukarjo has trained many activists and political prodigies on civic education, labour laws, and collective bargaining.`
        },
        {
            name: 'Wahyu Ramdhani', imageUrl: WahyuRamdhaniImg,
            description: `Wahyu is a Program Manager at Stanford Seed, with over 8 years of experience in training, mentoring, and co-managing entrepreneurship and cybersecurity programs for people with disabilities and youth. He graduated with a Law Degree from the University of Indonesia and an MBA from Gadjah Mada University. He also actively participates in various projects as a Trainer, Facilitator, and Assessor. His expertise includes program management, training, mentoring, entrepreneurship, social entrepreneurship, mindset change, financial management, and NGO sustainability programs.`
        },
        {
            name: 'Rulita Wijayaningdyah', imageUrl: RulitaWijayaningdyahImg,
            description: `Rulita has over 25 years of experience in program management, training, and organizational leadership development. Through leadership roles in trade union and global multistakeholder organizations, her international policy negotiations and climate-related engagement have helped bring workers and social interest agendas into high-level sustainability discussions. A licensed Mediator, Conciliator, Facilitator, and Contract Drafter, she also brings a strong academic background in German Literature, Sociology, Law, and Public Administration.`
        },
        {
            name: 'Jayadi Muh Thaha', imageUrl: JayadiMuhThahaImg,
            description: `Jayadi is a union trainer and certified ISO, JAS, US EFA, and ISPS internal auditor with over 30 years of experience in wood-based manufacturing and plantation sectors in Sulawesi and East Kalimantan. He has been appointed to oversee corporate community development and external affairs, where he built an extensive network through his stakeholder relations work. His law degree and advocate license are now used to support collaboration, trust, and constructive dialogue with communities.`
        },
        {
            name: 'Noer Tjahjono', imageUrl: NoerTjahjonoImg,
            description: `Noer is a grassroots organizer and paralegal on workers’ issues in Central Java. With over 20 years of experience, he is in charge of Kahutindo Training Center activities and development.`
        },
        {
            name: 'Ririn Rinawati', imageUrl: RirinRinawatiImg,
            description: `Ririn administers the day-to-day operation of the Kahutindo Training Center in Ungaran, Central Java since 2015. Before joining the Center, she was involved in various women support groups. With a background in Economics and strong interpersonal skills, she is entrusted as Treasurer of the Foundation.`
        },
        {
            name: 'Pikiran Daeli', imageUrl: PikiranDaeliImg,
            description: `Pikiran has extensive experience in private sectors and forest management operations covering supply chain and logistics, organization and people development, business process improvement, and plantation control. He holds a Master’s degree in Management, is a certified BNSP National Professional Instructor Level 4 KKNI, and currently lectures Strategic Human Resources Management at the University Adiwangsa Jambi.`
        }
    ];

    return (
        <>
            <section className="bg-gradient-to-b from-[#b6ae72] to-[#f7f3e8] px-6 pb-16 pt-32 text-gray-700 sm:px-12 md:px-16 md:pt-40 lg:px-24 xl:px-32">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mt-10 mb-6 bg-gradient-to-r from-[#7f8050] to-[#5f6338] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        Meet Our Experts and Team
                    </h1>

                    <p className="mx-auto max-w-3xl text-justify text-base leading-7 text-slate-700 hyphens-auto md:text-md lg:text-lg md:leading-8 mt-12">
                        We are a team of dedicated professionals, social workers, and experts united by a clear purpose: driving social change towards a sustainable, empowered, equitable, and inclusive welfare society. Established by the Indonesian Forestry and Allied Workers Union (Kahutindo Union), our non-profit organization focuses on improving the welfare of workers and communities impacted by industries through targeted capacity building, alternative dispute resolution, local economic development, and related empowerment programs.
                    </p>
                </div>
            </section>

            <section className="bg-[#f5f2e7] px-6 py-16 sm:px-12 md:px-16 lg:px-24 lg:py-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4 xl:grid-cols-5">
                    {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(member)}
                        className="group flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl bg-white p-5 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
                    >
                        <div className="mb-4 flex-shrink-0">
                            <img
                                className="h-28 w-28 rounded-full border-4 border-[#d4cda2] object-cover shadow-md sm:h-32 sm:w-32"
                                src={member.imageUrl}
                                alt={`Profile of ${member.name}`}
                            />
                        </div>

                        <div className="min-h-[3.5rem] flex items-center justify-center">
                            <h4 className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-[#7f8050] md:text-xl">
                                {member.name}
                            </h4>
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            <ProfileModal
                isOpen={isModalOpen}
                onClose={closeModal}
                member={selectedMember}
            />
        </>
    );
}

export default Experts;
