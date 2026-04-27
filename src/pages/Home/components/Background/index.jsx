import ProgrammerImage from '../../../../assets/image_1.jpg'
import Dots from '../../../../assets/dots.png'

function HomeBackgrounds() {
    return (
        <>
            <div
                id="HomeBackgrounds"
                className="bg-slate-50"
                style={{
                    backgroundImage: `url(${Dots})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'contain'
                }}
            >
                <div className='max-w-[1440px] mx-auto pt-10 pb-24 px-6 sm:px-10 md:px-12 2xl:px-0'>
                    
                    {/* TITLE */}
                    <div className="text-center">
                        <h2 className="drop-shadow-md text-2xl md:text-3xl lg:text-4xl font-semibold text-[#20311d]">
                            Background
                        </h2>
                    </div>

                    {/* CONTENT */}
                    <div className="pt-16 md:pt-24 lg:flex lg:gap-12 2xl:gap-0">
                        
                        {/* IMAGE */}
                        <div className='lg:flex-1 flex justify-center lg:items-center'>
                            <img
                                className='max-h-80 sm:max-h-96 lg:max-h-none lg:h-4/5 object-contain'
                                src={ProgrammerImage}
                                alt="Background illustration"
                            />
                        </div>

                        {/* TEXT BLOCKS */}
                        <div className='pt-10 lg:pt-0 lg:flex-1 space-y-10'>
                            
                            {/* ESTABLISHED */}
                            <div className='bg-[#f2f4ec] px-6 py-10 shadow-lg rounded-lg'>
                                <div className='flex items-center'>
                                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black'>
                                        Established
                                    </h3>
                                </div>
                                <p className='leading-6 text-sm lg:leading-8 lg:text-base text-slate-600 mt-4 text-left sm:text-justify [hyphens:auto]'>
                                    by the Indonesian Forestry and Allied Workers Union (Kahutindo Union) as mandated by its 7<sup>th</sup> National Congress in August 2024.
                                </p>
                            </div>

                            {/* PURPOSE */}
                            <div className='bg-[#f2f4ec] px-6 py-10 shadow-lg rounded-lg'>
                                <div className='flex items-center'>
                                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black'>
                                        Purpose
                                    </h3>
                                </div>
                                <p className='leading-6 text-sm lg:leading-8 lg:text-base text-slate-600 mt-4 text-left sm:text-justify [hyphens:auto]'>
                                    Non-profit organization aiming for social change toward a sustainable, empowered, equitable and inclusive welfare society.
                                </p>
                            </div>

                            {/* MISSION */}
                            <div className='bg-[#f2f4ec] px-6 py-10 shadow-lg rounded-lg'>
                                <div className='flex items-center'>
                                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black'>
                                        Mission
                                    </h3>
                                </div>
                                <p className='leading-6 text-sm lg:leading-8 lg:text-base text-slate-600 mt-4 text-left sm:text-justify [hyphens:auto]'>
                                    Improving the welfare of workers and communities whose livelihood is dependent and/or affected by industries through capacity building, alternative dispute resolutions, local economic development, and other relevant programs.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBackgrounds
