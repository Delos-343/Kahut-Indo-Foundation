import RevoImg from '../../assets/logo_perusahaan_2.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';


function Footer() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='bg-[#C4C466]'>
                <div className="text-white flex flex-col lg:flex-row gap-12 justify-around py-12 px-12 2xl:px-0 max-w-[1440px] mx-auto">
                    <div className="flex-1">
                        <Link to="/">
                            <img className='h-24 inline-block' src={RevoImg} alt="revo creative company logo" />
                        </Link>
                        <h4 className='text-xl leading-relaxed pt-4'>
                            Office Address
                        </h4>
                        <p className='leading-relaxed'>
                        Jl. Raya Bandungan Km 1 No. 9 Bergaslor, Bergas, Kab. Semarang 50552, Central Java, Indonesia<br />
                        </p>
                    </div>
                    <div className="flex-1">
                        <h4 className='text-xl leading-relaxed'>
                            Sections
                        </h4>
                        <ul className='leading-relaxed'>
                            <li className='my-2 mt-4'>
                                <Link to={"/"} className="hover:underline transition duration-300 ease-in-out" href=""><p>Home</p></Link>
                            </li>
                            <li className='my-2'>
                                <Link to={"/portfolio"} className="hover:underline transition duration-300 ease-in-out" href=""><p>Portfolio</p></Link>
                            </li>
                            <li className='my-2'>
                                <Link to={"/contact-us"} className="hover:underline transition duration-300 ease-in-out" href="">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h4 className='text-xl'>
                            Contact Us
                            <div className='flex gap-3'>
                                <a href="https://www.instagram.com" target="_blank">
                                    <InstagramIcon />
                                </a>
                                <a href="https://wa.me/628118771377" target="_blank">
                                    <WhatsAppIcon />
                                </a>
                                <a href="mailto:info@kahutindofoundation.org" target="_blank">
                                    <EmailIcon />
                                </a>
                            </div>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer