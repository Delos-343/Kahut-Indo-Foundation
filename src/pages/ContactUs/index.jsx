import React from 'react';
import ReactGA from "react-ga4"; // Masih dipertahankan jika Anda ingin tracking

// --- Ganti dengan path logo Yayasan yang benar ---
import YayasanLogo from '../../assets/logo_perusahaan.png'; // Sesuaikan path ini
// -------------------------------------------------

// Import ikon jika diperlukan (opsional, bisa diganti teks biasa)
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // MUI punya WhatsApp, bagus!

function ContactUs() {
    // Tracking Google Analytics (jika masih diperlukan)
    ReactGA.send({
        hitType: "pageview",
        page: "/contact-us", // Pastikan path ini sesuai dengan routing Anda
        title: "Contact Us Page (Yayasan)" // Judul bisa disesuaikan
    });

    // Data Kontak (dari gambar)
    const contactInfo = {
        orgName: 'Yayasan Karsa Hutani Terra Indonesia (Kahutindo Foundation)',
        address: [
            'c/o Kahutindo Training Center',
            'Jl. Raya Bandungan Km 1 No. 9',
            'Bergaslor, Bergas, Kab. Semarang 50552, Central Java',
            'Indonesia'
        ],
        email: 'info@kahutindofoundation.org',
        phone: '+62 298 526111',
        whatsapp: ' +62 8118771377',
        whatsappLink: 'https://wa.me/628118771377' // Format link WhatsApp
    };

    return (
        <>
            {/* Spacer untuk Navbar Fixed (jika ada) */}
            {/* Warna background spacer bisa disesuaikan atau dihapus jika tidak perlu */}
            <div className='pt-20 bg-[#C4C466]'></div>

            {/* Konten Utama Halaman Kontak */}
            {/* Background disesuaikan seperti gambar (gradien beige/tan) */}
            <div className="min-h-screen bg-gradient-to-b from-[#C4C466] to-[#fcfaf5] py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24">
                <div className="max-w-4xl mx-auto"> {/* Container utama */}

                    {/* Judul */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B4513] mb-12 md:mb-16 text-center"> {/* Warna Coklat Tua */}
                        Reach out to collaborate
                    </h1>

                    {/* Bagian Atas: Logo & Alamat */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12 md:mb-16">
                        {/* Kolom Kiri: Logo */}
                        <div className="w-48 md:w-1/5 flex-shrink-0">
                            <img src={YayasanLogo} alt="Yayasan Logo" className="w-full h-auto" />
                        </div>

                        {/* Kolom Kanan: Nama & Alamat */}
                        <div className="w-full md:w-4/5 text-center md:text-left text-[#6a4f3a]"> {/* Warna teks coklat muda */}
                            <h2 className="text-xl md:text-2xl font-semibold mb-3">
                                {contactInfo.orgName}
                            </h2>
                            <h3 className="text-lg font-medium mb-2">Visiting address:</h3>
                            {contactInfo.address.map((line, index) => (
                                <p key={index} className="text-base leading-relaxed">{line}</p>
                            ))}
                        </div>
                    </div>

                    {/* Bagian Bawah: Detail Kontak */}
                    <div className="mt-8 pt-8 border-t border-[#dcd1c0]"> {/* Garis pemisah */}
                         <div className="space-y-4 max-w-md mx-auto md:mx-0 text-center md:text-left"> {/* Grouping kontak */}
                            {/* Email */}
                            <div className="flex items-center justify-center md:justify-start group">
                                <EmailIcon className="text-[#8B4513] mr-3" />
                                <span className="font-medium text-gray-600 w-16">Email:</span>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-blue-600 hover:text-blue-800 hover:underline break-all ml-2"
                                >
                                    {contactInfo.email}
                                </a>
                            </div>
                             {/* Phone */}
                             <div className="flex items-center justify-center md:justify-start group">
                                <PhoneIcon className="text-[#8B4513] mr-3" />
                                <span className="font-medium text-gray-600 w-16">Phone:</span>
                                <a
                                     href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} // Hapus spasi untuk link tel
                                     className="text-gray-800 hover:text-black ml-2"
                                 >
                                    {contactInfo.phone}
                                 </a>
                            </div>
                             {/* Whatsapp */}
                             <div className="flex items-center justify-center md:justify-start group">
                                <WhatsAppIcon className="text-[#8B4513] mr-3" />
                                <span className="font-medium text-gray-600 w-16">Whatsapp: </span>
                                <a
                                     href={contactInfo.whatsappLink}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="text-green-600 hover:text-green-800 hover:underline ml-2"
                                 >
                                    {contactInfo.whatsapp}
                                 </a>
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ContactUs;