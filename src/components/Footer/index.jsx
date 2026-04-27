import RevoImg from '../../assets/logo_perusahaan_2.png'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#C4C466] text-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 2xl:px-0 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Logo + Address */}
          <div>
            <Link to="/">
              <img
                className="h-20 mb-4"
                src={RevoImg}
                alt="Kahutindo Foundation logo"
              />
            </Link>

            <h4 className="text-lg font-semibold mb-2">
              Office Address
            </h4>

            <p className="text-sm leading-relaxed text-white/90">
              Jl. Raya Bandungan Km 1 No. 9 Bergaslor, Bergas,
              Kab. Semarang 50552, Central Java, Indonesia
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:underline hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products/business-field" className="hover:underline hover:text-white transition">
                  Our Works
                </Link>
              </li>
              <li>
                <Link to="/our-team" className="hover:underline hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contact
            </h4>

            <div className="flex items-center gap-4 mb-4">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                <InstagramIcon />
              </a>

              <a href="https://wa.me/628567990037" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
                <WhatsAppIcon />
              </a>

              <a href="mailto:info@kahutindofoundation.org" className="hover:scale-110 transition">
                <EmailIcon />
              </a>
            </div>

            <p className="text-sm text-white/90">
              +62 856 7990 037
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} KahutIndo Foundation. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
