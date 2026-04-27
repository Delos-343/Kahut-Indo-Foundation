import { useState, useEffect } from 'react';
import RevoImg from "../../assets/logo_perusahaan_2.png";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { blue, red } from '@mui/material/colors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; // Icon for nested submenu

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state
    const [isAboutUsSubmenuOpen, setIsAboutUsSubmenuOpen] = useState(false); // Desktop About Us submenu state
    const [isProductSubmenuOpen, setIsProductSubmenuOpen] = useState(false); // Desktop Product submenu state
    const [isStrategicProgramSubmenuOpen, setIsStrategicProgramSubmenuOpen] = useState(false); // Desktop Strategic Program sub-submenu state

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false); // Close mobile menu on resize to desktop
                // Optionally close desktop submenus on resize as well if needed
                // setIsAboutUsSubmenuOpen(false);
                // setIsProductSubmenuOpen(false);
                // setIsStrategicProgramSubmenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Close desktop menus when opening mobile menu
        if (!isOpen) {
           closeAllDesktopSubmenus();
        }
    };

    // Function to close ALL desktop submenus
    const closeAllDesktopSubmenus = () => {
        setIsAboutUsSubmenuOpen(false);
        setIsProductSubmenuOpen(false);
        setIsStrategicProgramSubmenuOpen(false); // Ensure this is closed too
    }

    // Function to close mobile menu AND all desktop submenus
    const handleMobileLinkClick = () => {
        setIsOpen(false);
        closeAllDesktopSubmenus();
    }

    // --- Styling Classes ---
    const navLinkClasses = "my-auto mx-1 py-4 px-4 transition-colors duration-300 text-black hover:text-gray-300 flex items-center cursor-pointer"; // Added cursor-pointer for non-Link elements
    const mobileNavLinkClasses = "block py-2 transition-colors duration-300 text-black hover:text-gray-300";
    const desktopSubmenuItemClasses = "block px-4 py-2 text-sm text-gray-700 hover:bg-[#e4e4b8] hover:text-black whitespace-nowrap"; // Added whitespace-nowrap
    const desktopNestedSubmenuItemClasses = "block px-4 py-2 text-sm text-gray-700 hover:bg-[#dcdcae] hover:text-black whitespace-nowrap"; // Slightly different hover for nested

    return (
        <>
            {/* Navbar Background */}
            <div className={`fixed z-20 w-full transition-colors duration-300 ${isScrolled || isOpen ? 'bg-[#C4C466] shadow-md' : 'bg-transparent'}`}>
                {/* Navbar Container */}
                <div className="flex justify-between items-center px-6 md:px-12 2xl:px-0 max-w-[1440px] mx-auto h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to={"/"} onClick={() => { setIsOpen(false); closeAllDesktopSubmenus(); }}>
                            <img className="h-12 md:h-14 p-1" src={RevoImg} alt="Revo Creative Company Logo" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="flex items-center px-3 py-2 text-white hover:text-gray-300">
                            <MenuIcon />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={`hidden lg:flex items-center space-x-1`}> {/* Reduced space slightly */}
                        <Link to={"/"} className={navLinkClasses} onClick={closeAllDesktopSubmenus}>
                            Home
                        </Link>
                        {/* <Link to={"/portfolio"} className={navLinkClasses} onClick={closeAllDesktopSubmenus}>
                            Portfolio
                        </Link> */}

                        {/* Product Desktop Dropdown (NEW) */}
                        <div
                            className="relative my-auto"
                            onMouseEnter={() => { closeAllDesktopSubmenus(); setIsProductSubmenuOpen(true); }} // Close others first
                            onMouseLeave={() => setIsProductSubmenuOpen(false)}
                        >
                            <div className={navLinkClasses}> {/* Use div for hover area, not Link */}
                                Product
                                {isProductSubmenuOpen
                                    ? <KeyboardArrowUpIcon fontSize="small" className="ml-1" />
                                    : <KeyboardArrowDownIcon fontSize="small" className="ml-1" />
                                }
                            </div>

                            {/* Product Submenu Panel (Level 1) */}
                            {isProductSubmenuOpen && (
                                <div
                                    className="absolute left-0 mt-0 w-auto bg-white rounded-md shadow-lg py-1 z-30" // Adjusted width to auto
                                    onMouseEnter={() => setIsProductSubmenuOpen(true)} // Keep open
                                    onMouseLeave={() => setIsProductSubmenuOpen(false)} // Close L1
                                >
                                    <Link
                                        to="/product/business-fields" // Define your route
                                        className={desktopSubmenuItemClasses}
                                        onClick={closeAllDesktopSubmenus}
                                    >
                                        Business Fields
                                    </Link>

                                    {/* Strategic Program Container (for nested submenu) */}
                                    <div
                                        className="relative" // Container for L2 positioning
                                        onMouseEnter={() => setIsStrategicProgramSubmenuOpen(true)}
                                        onMouseLeave={() => setIsStrategicProgramSubmenuOpen(false)}
                                    >
                                        <div className={`${desktopSubmenuItemClasses} flex justify-between items-center cursor-default`}> {/* Non-link item */}
                                            Strategic Program
                                            <KeyboardArrowRightIcon fontSize="small" className="ml-2" />
                                        </div>

                                        {/* Strategic Program Sub-Submenu Panel (Level 2) */}
                                        {isStrategicProgramSubmenuOpen && (
                                            <div
                                               className="absolute left-full top-0 mt-0 ml-px w-auto bg-white rounded-md shadow-lg py-1 z-40" // Positioned to the right, higher z-index
                                               onMouseEnter={() => { setIsProductSubmenuOpen(true); setIsStrategicProgramSubmenuOpen(true); }} // Keep both open
                                               onMouseLeave={() => setIsStrategicProgramSubmenuOpen(false)} // Close L2
                                            >
                                                <Link to="/product/strategic-program/ecosystem" className={desktopNestedSubmenuItemClasses} onClick={closeAllDesktopSubmenus}>Program Ecosystem</Link>
                                                <Link to="/product/strategic-program/workers-dev" className={desktopNestedSubmenuItemClasses} onClick={closeAllDesktopSubmenus}>Workers Education & Development</Link>
                                                <Link to="/product/strategic-program/industrial-training" className={desktopNestedSubmenuItemClasses} onClick={closeAllDesktopSubmenus}>Industrial Capacity Building & Vocational Trainings</Link>
                                                <Link to="/product/strategic-program/fund-mgmt" className={desktopNestedSubmenuItemClasses} onClick={closeAllDesktopSubmenus}>Fund and Asset Management</Link>
                                                <Link to="/product/strategic-program/ecolabel-env" className={desktopNestedSubmenuItemClasses} onClick={closeAllDesktopSubmenus}>Ecolabel, Climate, Green Jobs & Environment</Link>
                                                <Link to="/product/strategic-program/legal-adr" className={desktopNestedSubmenuItemClasses} onClick={closeAllDesktopSubmenus}>Legal Aid & Alternative Dispute Resolution</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to={"/contact-us"} className={navLinkClasses} onClick={closeAllDesktopSubmenus}>
                            Contact Us
                        </Link>

                        {/* About Us Desktop Dropdown */}
                        <div
                            className="relative my-auto"
                            onMouseEnter={() => { closeAllDesktopSubmenus(); setIsAboutUsSubmenuOpen(true); }} // Close others first
                            onMouseLeave={() => setIsAboutUsSubmenuOpen(false)}
                        >
                            <Link
                               
                                className={navLinkClasses}
                            >
                                About Us
                                {isAboutUsSubmenuOpen
                                    ? <KeyboardArrowUpIcon fontSize="small" className="ml-1" />
                                    : <KeyboardArrowDownIcon fontSize="small" className="ml-1" />
                                }
                            </Link>
                            {/* Desktop Submenu Panel */}
                            {isAboutUsSubmenuOpen && (
                                <div
                                    className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-30"
                                    onMouseEnter={() => setIsAboutUsSubmenuOpen(true)} // Keep open
                                    onMouseLeave={() => setIsAboutUsSubmenuOpen(false)} // Close
                                >
                                    <Link
                                        to="/about-us/experts"
                                        className={desktopSubmenuItemClasses}
                                        onClick={closeAllDesktopSubmenus}
                                    >
                                        Experts and Teams
                                    </Link>
                                    <Link
                                        to="/about-us/governance"
                                        className={desktopSubmenuItemClasses}
                                        onClick={closeAllDesktopSubmenus}
                                    >
                                        Governance
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}> {/* Increased max-h */}
                     {/* Changed background for visibility */}
                    <div className="bg-[#d1d18f] px-6 md:px-12 py-2">
                        <Link to={"/"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                            Home
                        </Link>
                        {/* <Link to={"/portfolio"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                            Portfolio
                        </Link> */}

                        {/* Product Section in Mobile (NEW) */}
                         {/* Note: Mobile doesn't typically use complex hover dropdowns. Displaying all levels. */}
                        <div className={`${mobileNavLinkClasses} font-semibold`}> {/* Non-clickable header */}
                            Product
                        </div>
                        <div className="pl-4">
                             <Link to={"/product/business-fields"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                                Business Fields
                            </Link>
                            <div className={`${mobileNavLinkClasses} font-medium`}> {/* Non-clickable sub-header */}
                                Strategic Program
                            </div>
                            <div className="pl-4"> {/* Sub-Submenu items */}
                                <Link to="/product/strategic-program/ecosystem" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>Program Ecosystem</Link>
                                <Link to="/product/strategic-program/workers-dev" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>Workers Education & Development</Link>
                                <Link to="/product/strategic-program/industrial-training" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>Industrial Capacity Building & ...</Link> {/* Truncate or wrap needed */}
                                <Link to="/product/strategic-program/fund-mgmt" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>Fund and Asset Management</Link>
                                <Link to="/product/strategic-program/ecolabel-env" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>Ecolabel, Climate, Green Jobs ...</Link> {/* Truncate or wrap needed */}
                                <Link to="/product/strategic-program/legal-adr" className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>Legal Aid & Alternative ...</Link> {/* Truncate or wrap needed */}
                            </div>
                        </div>

                        <Link to={"/contact-us"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                            Contact Us
                        </Link>

                        {/* About Us Section in Mobile */}
                        <Link to={"/about-us"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                            About Us (Main)
                        </Link>
                        <div className="pl-4">
                             <Link to={"/about-us/experts"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                                Experts and Teams
                            </Link>
                            <Link to={"/about-us/governance"} className={mobileNavLinkClasses} onClick={handleMobileLinkClick}>
                                Governance
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {isScrolled && (
                 <div
                     onClick={scrollToTop}
                     className='cursor-pointer fixed z-10 text-right right-8 bottom-8 lg:right-16 lg:bottom-16 inline-block bg-[#C4C466] rounded-full p-3 shadow-lg hover:bg-[#b8b85e] transition-colors'
                 >
                     <ArrowUpwardIcon sx={{ color: red[50] }} />
                 </div>
             )}
        </>
    );
}

export default Navbar;