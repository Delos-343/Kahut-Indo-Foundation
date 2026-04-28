import { useState, useEffect } from 'react';
import RevoImg from '../../assets/logo_perusahaan_2.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [isAboutUsSubmenuOpen, setIsAboutUsSubmenuOpen] = useState(false);
    const [isProductSubmenuOpen, setIsProductSubmenuOpen] = useState(false);

    const [isStrategicProgramSubmenuOpen, setIsStrategicProgramSubmenuOpen] = useState(false);

    const scrollToTop = () => window.scrollTo(0, 0);

    useEffect(() => {

        const handleScroll = () => setIsScrolled(window.scrollY > 0);

        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const closeAllDesktopSubmenus = () => {

        setIsAboutUsSubmenuOpen(false);

        setIsProductSubmenuOpen(false);

        setIsStrategicProgramSubmenuOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) closeAllDesktopSubmenus();
    };

    const handleMobileLinkClick = () => {
        setIsOpen(false);
        closeAllDesktopSubmenus();
    };

    // FIXED: centralized desktop text color here
    const navLinkClasses =
        'my-auto mx-1 py-4 px-4 transition-colors duration-300 text-slate-100 hover:text-white flex items-center cursor-pointer';

    const mobileNavLinkClasses =
        'block py-2 transition-colors duration-300 text-slate-800 hover:text-slate-950 font-light';

    const desktopSubmenuItemClasses =
        'block px-4 py-2 text-sm text-slate-800 hover:bg-[#d8e0c0] hover:text-slate-950 whitespace-nowrap';

    const desktopNestedSubmenuItemClasses =
        'block px-4 py-2 text-sm text-slate-800 hover:bg-[#d2ddba] hover:text-slate-950 whitespace-nowrap';

    return (
        <>
            <div className={`fixed z-20 w-full transition-colors duration-300 ${isScrolled || isOpen ? 'bg-[#C4C466] shadow-md' : 'bg-transparent'}`}>
                <div className="flex justify-between items-center px-6 md:px-12 2xl:px-0 max-w-[1440px] mx-auto h-16">
                    
                    <div className="flex-shrink-0">
                        <Link to="/" onClick={() => { setIsOpen(false); closeAllDesktopSubmenus(); }}>
                            <img className="h-12 md:h-14 p-1" src={RevoImg} alt="Kahutindo Foundation logo" />
                        </Link>
                    </div>

                    {/* Mobile */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="flex items-center px-3 py-2 text-white hover:text-gray-300">
                            <MenuIcon />
                        </button>
                    </div>

                    {/* Desktop */}
                    <div className="hidden lg:flex items-center space-x-1">
                        
                        <Link to="/" className={navLinkClasses} onClick={closeAllDesktopSubmenus}>
                            Home
                        </Link>

                        <div
                            className="relative my-auto"
                            onMouseEnter={() => { closeAllDesktopSubmenus(); setIsProductSubmenuOpen(true); }}
                            onMouseLeave={() => setIsProductSubmenuOpen(false)}
                        >
                            <div className={navLinkClasses}>
                                Our Works
                                {isProductSubmenuOpen
                                    ? <KeyboardArrowUpIcon fontSize="small" className="ml-1" />
                                    : <KeyboardArrowDownIcon fontSize="small" className="ml-1" />
                                }
                            </div>

                            {isProductSubmenuOpen && (
                                <div className="absolute left-0 mt-0 w-auto bg-white rounded-md shadow-lg py-1 z-30">
                                    <Link to="/products/business-field" className={desktopSubmenuItemClasses} onClick={closeAllDesktopSubmenus}>
                                        Activities
                                    </Link>

                                    <div
                                        className="relative"
                                        onMouseEnter={() => setIsStrategicProgramSubmenuOpen(true)}
                                        onMouseLeave={() => setIsStrategicProgramSubmenuOpen(false)}
                                    >
                                        <div className={`${desktopSubmenuItemClasses} flex justify-between items-center cursor-default`}>
                                            Strategic Programs
                                            <KeyboardArrowRightIcon fontSize="small" className="ml-2" />
                                        </div>

                                        {isStrategicProgramSubmenuOpen && (
                                            <div className="absolute left-full top-0 ml-px w-auto bg-white rounded-md shadow-lg py-1 z-40">
                                                <Link to="/product/strategic-program/ecosystem" className={desktopNestedSubmenuItemClasses}>Program Ecosystem</Link>
                                                <Link to="/product/strategic-program/workers-dev" className={desktopNestedSubmenuItemClasses}>Workers Education & Development</Link>
                                                <Link to="/product/strategic-program/industrial-training" className={desktopNestedSubmenuItemClasses}>Industrial Capacity Building & Vocational Trainings</Link>
                                                <Link to="/product/strategic-program/fund-mgmt" className={desktopNestedSubmenuItemClasses}>Fund and Asset Management</Link>
                                                <Link to="/product/strategic-program/ecolabel-env" className={desktopNestedSubmenuItemClasses}>Ecolabel, Climate, Green Jobs & Environment</Link>
                                                <Link to="/product/strategic-program/legal-adr" className={desktopNestedSubmenuItemClasses}>Legal Aid & Alternative Dispute Resolution</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/contact-us" className={navLinkClasses} onClick={closeAllDesktopSubmenus}>
                            Contact Us
                        </Link>

                        <div
                            className="relative my-auto"
                            onMouseEnter={() => { closeAllDesktopSubmenus(); setIsAboutUsSubmenuOpen(true); }}
                            onMouseLeave={() => setIsAboutUsSubmenuOpen(false)}
                        >
                            <div className={navLinkClasses}>
                                About Us
                                {isAboutUsSubmenuOpen
                                    ? <KeyboardArrowUpIcon fontSize="small" className="ml-1" />
                                    : <KeyboardArrowDownIcon fontSize="small" className="ml-1" />
                                }
                            </div>

                            {isAboutUsSubmenuOpen && (
                                <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-30">
                                    <Link to="/expert-teams" className={desktopSubmenuItemClasses}>Expert Teams</Link>
                                    <Link to="/our-team" className={desktopSubmenuItemClasses}>Our Team</Link>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                {/* Mobile Menu unchanged */}
                <div className={`fixed left-0 right-0 top-16 z-40 overflow-y-auto transition-all duration-300 lg:hidden ${isOpen ? 'bottom-0 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-[#C4C466] to-white px-6 md:px-12 py-4 text-green-600">

                        <Link to="/" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Home </Link>

                        <Link to="/expert-teams" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Expert Teams </Link>

                        <Link to="/our-team" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Our Team </Link>

                        <Link to="/products/business-field" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Activities </Link>

                        <Link to="/product/strategic-program/ecosystem" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Program Ecosystem</Link>

                        <Link to="/product/strategic-program/workers-dev" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Workers Edu & Development </Link>

                        <Link to="/product/strategic-program/industrial-training" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Industrial Training </Link>

                        <Link to="/product/strategic-program/fund-mgmt" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Fund & Asset Management </Link>

                        <Link to="/product/strategic-program/ecolabel-env" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Ecolabel & Environment </Link>

                        <Link to="/product/strategic-program/legal-adr" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Legal Aid & Dispute </Link>

                        <Link to="/contact-us" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}> Contact Us </Link>

                    </div>
                </div>
            </div>

            {isScrolled && (
                <div onClick={scrollToTop} className="cursor-pointer fixed z-10 right-8 bottom-8 lg:right-16 lg:bottom-16 bg-[#C4C466] rounded-full p-3 shadow-lg">
                    <ArrowUpwardIcon sx={{ color: '#f7f9f2' }} />
                </div>
            )}
        </>
    );
}

export default Navbar;