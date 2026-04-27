import React from 'react';
import ReactGA from 'react-ga4';
import YayasanLogo from '../../assets/logo_perusahaan.png';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function ContactUs() {
    ReactGA.send({
        hitType: 'pageview',
        page: '/contact-us',
        title: 'Contact Us Page (Yayasan)'
    });

    const contactInfo = {
        orgName1: 'Yayasan Karsa Hutani Terra Indonesia',
        orgName2: '(KahutIndo Foundation)',
        address: [
            'c/o Kahutindo Training Center, Jl. Raya Bandungan Km 1 No. 9, Bergaslor, Bergas, Kab. Semarang 50552, Central Java, Indonesia'
        ],
        email: 'info@kahutindofoundation.org',
        phone: '+628567990037',
        whatsapp: '+628567990037',
        whatsappLink: 'https://wa.me/628567990037'
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-[#b6ae72] to-[#f7f3e8] py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24">
                <div className="max-w-4xl mx-auto mt-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6d5739] mb-12 md:mb-16 text-center">
                        Reach Out to Collaborate
                    </h1>

                    <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-[12rem_minmax(0,1fr)] gap-6 md:gap-10 items-start">
                        <div className="mx-auto md:mx-0 w-48 md:w-full md:max-w-[12rem] shrink-0">
                            <img
                                src={YayasanLogo}
                                alt="Kahutindo Foundation logo"
                                className="h-auto w-full object-contain"
                            />
                        </div>

                        <div className="flex h-full flex-col text-center md:text-left text-[#6a5a41]">
                            <h2 className="mb-4 text-xl md:text-2xl font-semibold">
                                {contactInfo.orgName1}
                            </h2>

                            <h2 className="mb-4 text-xl md:text-2xl font-semibold">
                                {contactInfo.orgName2}
                            </h2>

                            <div className="mt-auto">
                                <h3 className="mb-2 text-lg font-normal"> Visiting Address: </h3>
                                <p className="text-base font-light leading-relaxed">
                                    c/o Kahutindo Training Center, Jl. Raya Bandungan Km 1 No. 9, Bergaslor, Bergas, Kab. Semarang 50552, Central Java, Indonesia
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-[#d9cfb9]">
                        <div className="mx-auto max-w-md space-y-4 text-center md:mx-0 md:text-left">
                            {[
                            {
                                icon: <EmailIcon className="shrink-0 text-[#6d5739]" />,
                                label: "Email:",
                                value: contactInfo.email,
                                href: `mailto:${contactInfo.email}`,
                                className: "text-blue-600 hover:text-blue-800 hover:underline break-all",
                                target: undefined,
                                rel: undefined,
                            },
                            {
                                icon: <PhoneIcon className="shrink-0 text-[#6d5739]" />,
                                label: "CP:",
                                value: contactInfo.phone,
                                href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
                                className: "text-gray-800 hover:text-black",
                                target: undefined,
                                rel: undefined,
                            },
                            {
                                icon: <WhatsAppIcon className="shrink-0 text-[#6d5739]" />,
                                label: "WhatsApp:",
                                value: contactInfo.whatsapp,
                                href: contactInfo.whatsappLink,
                                className: "text-green-600 hover:text-green-800 hover:underline",
                                target: "_blank",
                                rel: "noopener noreferrer",
                            },
                            ].map((item) => (
                            <div
                                key={item.label}
                                className="grid grid-cols-[auto_5rem_minmax(0,1fr)] items-center gap-2 md:gap-3"
                            >
                                <div className="flex justify-center md:justify-start">
                                {item.icon}
                                </div>

                                <span className="text-left font-medium text-slate-600">
                                {item.label}
                                </span>

                                <a
                                href={item.href}
                                target={item.target}
                                rel={item.rel}
                                className={`min-w-0 text-left ${item.className}`}
                                >
                                {item.value}
                                </a>
                            </div>
                            ))}
                        </div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
