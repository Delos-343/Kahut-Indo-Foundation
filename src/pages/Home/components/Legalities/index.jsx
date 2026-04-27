import ProgrammerImage from '../../../../assets/image_3.jpg'
// import CodeIcon from '../../../../assets/code-square-svgrepo-com.svg'
// import MobileIcon from '../../../../assets/mobile-alt-1-svgrepo-com.svg'
// import AdsIcon from '../../../../assets/advertisement-svgrepo-com.svg'

function HomeLegalities() {
    return (
        <>
            <div id="HomeLegalities">
                <div className='max-w-[1440px] mx-auto pt-10 pb-24 px-12 2xl:px-0'>
                    <div className="text-center">
                        <h2 className="drop-shadow-md text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-950">Legalities</h2>
                    </div>
                    <div className="lg:px-0 pt-16 md:pt-24">
                        <div className='lg:flex-1 flex lg:flex-column justify-center lg:items-center mb-8'>
                            <img className='w-64 h-64 rounded-lg ' src={ProgrammerImage} alt="Legal Illustration" />
                        </div>
                        <div className='lg:flex-1'>
                            <ul className="list-disc pl-6 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                                <li className="mb-4">
                                    Notary Deed No. 400 by Public Notary Herman Soesilo dated 11 December 2024.
                                </li>
                                <li className="mb-4">
                                    Registered at the Ministry of Law and Human Rights RI (Kemenkumham) No: AHU-0019936.AH.01.04 in 2024 dated 16 December 2024 on the Attestation of Establishment of Yayasan Karsa Hutani Terra Indonesia (Yayasan Kahutindo).
                                </li>
                                <li className="mb-4">
                                    Tax Registration No. (NPWP): 1000 0000 0053 4852
                                </li>
                                <li>
                                    Business Identification No. (NIB): 0303250053139
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeLegalities