import ProgrammerImage from '../../../../assets/image_1.jpg'
// import CodeIcon from '../../../../assets/code-square-svgrepo-com.svg'
// import MobileIcon from '../../../../assets/mobile-alt-1-svgrepo-com.svg'
// import AdsIcon from '../../../../assets/advertisement-svgrepo-com.svg'
import Dots from '../../../../assets/dots.png'


function HomeBackgrounds() {
    return (
        <>
            <div id="HomeBackgrounds bg-slate-50" style={{ backgroundImage: `url(${Dots})`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}>
                <div className='max-w-[1440px] mx-auto pt-10 pb-24 px-12 2xl:px-0'>
                    <div className="text-center">
                        <h2 className="drop-shadow-md text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-950 ">Background</h2>
                    </div>
                    <div className="lg:px-0 pt-16 md:pt-24 lg:flex lg:gap-12 2xl:gap-0">
                        <div className='lg:flex-1 flex lg:flex-column justify-center lg:items-center'>
                            <img className='max-h-96 lg:max-h-none lg:h-4/5' src={ProgrammerImage} alt="" />
                        </div>
                        <div className='pt-10 lg:pt-0 lg:flex-1'>
                            <div className='bg-slate-100 px-6 py-10 shadow-lg rounded-lg'>
                                <div className='flex items-center'>
                                    {/* Anda bisa mengganti ikon atau menghilangkannya jika tidak relevan */}
                                    {/* <img className='h-10' src={MobileIcon} alt="" /> */}
                                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black ml-4'>
                                        Established
                                    </h3>
                                </div>
                                <p className='leading-6 text-sm lg:leading-8 lg:text-base text-gray-600 mt-4'>
                                    by the Indonesian Forestry and Allied Workers Union (Kahutindo Union) as mandated by its 7<sup>th</sup> National Congress in August 2024.
                                </p>
                            </div>
                            <div className='bg-slate-100 px-6 py-10 shadow-lg rounded-lg my-10'>
                                <div className='flex items-center'>
                                    {/* <img className='h-10' src={CodeIcon} alt="" /> */}
                                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black ml-4'>
                                        Purpose
                                    </h3>
                                </div>
                                <p className='leading-6 text-sm lg:leading-8 lg:text-base text-gray-600 mt-4'>
                                    Non-profit organization aiming for social change toward a sustainable, empowered, equitable and inclusive welfare society.
                                </p>
                            </div>
                            <div className='bg-slate-100 px-6 py-10 shadow-lg rounded-lg'>
                                <div className='flex items-center'>
                                    {/* <img className='h-10' src={AdsIcon} alt="" /> */}
                                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black ml-4'>
                                        Mission
                                    </h3>
                                </div>
                                <p className='leading-6 text-sm lg:leading-8 lg:text-base text-gray-600 mt-4'>
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