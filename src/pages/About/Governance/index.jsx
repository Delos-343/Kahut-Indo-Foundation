import React from 'react';
// Anda mungkin tidak memerlukan logo di sini lagi, tapi bisa disesuaikan jika perlu
// import RevoLogo from '../../../assets/revo-logo.png';

function Governance() {
    // Data Tata Kelola (diekstrak dari gambar image_a179fc.png)
    const governanceData = {
        boardOfTrustees: 'Khoirul Anam',
        boardOfSupervisor: 'Wahyu Ramdhani',
        boardOfExecutives: [
            { role: 'President', name: 'Rulita Wijayaningdyah' },
            { role: 'Vice President', name: 'Agus Salim' },
            { role: 'Vice President', name: 'Sukarjo' },
            { role: 'Vice President', name: 'Jayadi Muh Thaha' },
            { role: 'Secretary', name: 'Noer Tjahjono' },
            { role: 'Treasurer', name: 'Ririn Rinawati' }
        ],
        programLead: 'Ilma Alyani',
        legalAidLead: 'Pikiran Daeli',
        localTeams: 'Jawa, Sumatera, Kalimantan, Sulawesi & Bali'
    };

    // Helper function untuk merender item list
    const renderListItem = (label, value) => (
        <div className="flex flex-col sm:flex-row py-2 border-b border-gray-200">
            <div className="w-full sm:w-2/5 font-medium text-gray-600 pr-2">{label}</div>
            <div className="w-full sm:w-3/5 text-gray-800">{value}</div>
        </div>
    );

    return (
        <>
            {/* Section Header */}
            {/* Disesuaikan padding top agar tidak terlalu jauh jika navbar sudah fixed */}
            <div className='pt-24 md:pt-32 pb-12 text-center px-6 sm:px-12 bg-gradient-to-b from-[#C4C466] to-[#fcfaf5]'>
                 {/* Logo bisa ditambahkan kembali jika diinginkan */}
                 {/* <img className='h-48 inline-block mb-8' src={RevoLogo} alt="Revo Logo" /> */}
                 <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r text-black-800 bg-clip-text'>
                    Governance
                </h1>
            </div>

            {/* Section Konten Tata Kelola */}
            <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-16 lg:py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">

                    {/* Board of Trustees */}
                    <h2 className="text-xl md:text-2xl font-semibold text-black-700 mb-4">Board of Trustees</h2>
                    {renderListItem('Board of Trustees', governanceData.boardOfTrustees)}

                    {/* Board of Supervisor */}
                    <h2 className="text-xl md:text-2xl font-semibold text-black-700 mt-8 mb-4">Board of Supervisor</h2>
                    {renderListItem('Board of Supervisor', governanceData.boardOfSupervisor)}

                    {/* Board of Executives */}
                    <h2 className="text-xl md:text-2xl font-semibold text-black-700 mt-8 mb-4">Board of Executives</h2>
                    {governanceData.boardOfExecutives.map((item, index) => (
                         // Sedikit modifikasi untuk role: name
                         <div key={index} className="flex flex-col sm:flex-row py-2 border-b border-gray-200">
                            <div className="w-full sm:w-2/5 font-medium text-gray-600 pr-2">{item.role}</div>
                            <div className="w-full sm:w-3/5 text-gray-800">{item.name}</div>
                         </div>
                    ))}

                     {/* Program Lead */}
                     <h2 className="text-xl md:text-2xl font-semibold text-black-700 mt-8 mb-4">Program Lead</h2>
                    {renderListItem('Program Lead', governanceData.programLead)}

                     {/* Legal Aid Lead */}
                     <h2 className="text-xl md:text-2xl font-semibold text-black-700 mt-8 mb-4">Legal Aid Lead</h2>
                    {renderListItem('Legal Aid Lead', governanceData.legalAidLead)}

                     {/* Local Teams */}
                     <h2 className="text-xl md:text-2xl font-semibold text-black-700 mt-8 mb-4">Local Grassroot Teams</h2>
                    {renderListItem('Local grassroot teams in', governanceData.localTeams)}

                </div>
            </div>
        </>
    )
}

export default Governance;