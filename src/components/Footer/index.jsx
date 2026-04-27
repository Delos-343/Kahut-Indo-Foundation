import RevoImg from '../../assets/logo_perusahaan_2.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='bg-[#b6ae72]'>
            <div className="text-white flex flex-col lg:flex-row gap-12 justify-around py-12 px-12 2xl:px-0 max-w-[1440px] mx-auto">
                <div className="flex-1">
                    <Link to="/">
                        <img className='h-24 inline-block' src={RevoImg} alt="Kahutindo Foundation logo" />
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
                            <Link to="/" className="hover:underline transition duration-300 ease-in-out"><p>Home</p></Link>
                        </li>
                        <li className='my-2'>
                            <Link to="/contact-us" className="hover:underline transition duration-300 ease-in-out">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h4 className='text-xl'>
                        Contact Us
                    </h4>
                    <div className='flex gap-3 mt-4'>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <InstagramIcon />
                        </a>
                        <a href="https://wa.me/628567990037" target="_blank" rel="noreferrer">
                            <WhatsAppIcon />
                        </a>
                        <a href="mailto:info@kahutindofoundation.org" target="_blank" rel="noreferrer">
                            <EmailIcon />
                        </a>
                    </div>
                    <p className='mt-4 leading-relaxed'>
                        CP: +628567990037
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
