import Dots from '../../../../assets/dots.png'
import { Link } from 'react-router-dom'

function HomeContactUs() {
    return (
        <>
            <div id="HomeContactUs" className='bg-slate-50' style={{ backgroundImage: `url(${Dots})`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}>
                <div className='max-w-[1440px] mx-auto'>
                    <div className="py-16 md:py-20 lg:py-24 px-12 2xl:px-0 md:flex justify-between">
                        <div className='md:w-2/3'>
                            <h2 className="drop-shadow-md text-2xl md:text-3xl lg:text-4xl text-indigo-950 font-semibold py-6 md:py-8 lg:py-10">Connected With Us</h2>
                            <p className="text-sm lg:text-base my-4 text-gray-600 ">
                            Contact us today to begin your journey towards sustainable forest management and success..
                            </p>
                        </div>
                        <div className="md:flex md:flex-col md:justify-center pt-10 md:pt-0">
                            <div className="transition duration-200 ease-in-out hover:transform hover:translate-y-[-5px]">
                                <Link to={'/contact-us'}>
                                    <div className="bg-[#C4C466] py-4 px-6 rounded-lg inline-block shadow-xl">
                                        <p className="text-white">
                                            Start Here
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContactUs

// import NaturalPattern from '../../../../assets/natural-pattern.svg'
// style={{ backgroundImage: `url(${NaturalPattern})`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}