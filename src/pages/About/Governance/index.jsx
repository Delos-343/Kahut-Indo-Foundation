import React from 'react';

function Governance() {
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
        programLead: 'To be assigned',
        legalAidLead: 'Pikiran Daeli',
        localTeams: 'Jawa, Sumatera, Kalimantan, Sulawesi & Bali'
    };

    const renderListItem = (label, value) => (
        <div className="flex flex-col sm:flex-row py-2 border-b border-gray-200">
            <div className="w-full sm:w-2/5 font-medium text-gray-600 pr-2">{label}</div>
            <div className="w-full sm:w-3/5 text-gray-800">{value}</div>
        </div>
    );

    return (
        <>
            <div className='pt-24 md:pt-32 pb-12 text-center px-6 sm:px-12 bg-gradient-to-b from-[#b6ae72] to-[#f7f3e8]'>
                 <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#5f6338] to-[#7f8050] bg-clip-text text-transparent'>
                    Our Team
                </h1>
            </div>

            <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-16 lg:py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
                    <h2 className="text-xl md:text-2xl font-semibold text-[#4f5533] mb-4">Board of Trustees</h2>
                    {renderListItem('Board of Trustees', governanceData.boardOfTrustees)}

                    <h2 className="text-xl md:text-2xl font-semibold text-[#4f5533] mt-8 mb-4">Board of Supervisor</h2>
                    {renderListItem('Board of Supervisor', governanceData.boardOfSupervisor)}

                    <h2 className="text-xl md:text-2xl font-semibold text-[#4f5533] mt-8 mb-4">Board of Executives</h2>
                    {governanceData.boardOfExecutives.map((item, index) => (
                         <div key={index} className="flex flex-col sm:flex-row py-2 border-b border-gray-200">
                            <div className="w-full sm:w-2/5 font-medium text-gray-600 pr-2">{item.role}</div>
                            <div className="w-full sm:w-3/5 text-gray-800">{item.name}</div>
                         </div>
                    ))}

                    <h2 className="text-xl md:text-2xl font-semibold text-[#4f5533] mt-8 mb-4">Program Lead</h2>
                    {renderListItem('Program Lead', governanceData.programLead)}

                    <h2 className="text-xl md:text-2xl font-semibold text-[#4f5533] mt-8 mb-4">Legal Aid Lead</h2>
                    {renderListItem('Legal Aid Lead', governanceData.legalAidLead)}

                    <h2 className="text-xl md:text-2xl font-semibold text-[#4f5533] mt-8 mb-4">Local Grassroot Teams</h2>
                    {renderListItem('Local grassroot teams in', governanceData.localTeams)}
                </div>
            </div>
        </>
    );
}

export default Governance;
