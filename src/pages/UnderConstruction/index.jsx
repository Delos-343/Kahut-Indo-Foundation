import UnderConstructionImage from '../../assets/underconstruction.png';
import { Link } from 'react-router-dom';

function UnderConstruction() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#C4C466] to-[#fcfaf5] p-4">
            <img src={UnderConstructionImage} alt="Page Not Found" className="w-40 mb-8" />
            <h1 className="text-3xl font-bold text-black-950 mb-4">We're working on it!</h1>
            <p className="text-gray-600 text-center mb-8">
                Oopss! The page you are looking for is still under construction. Please check it later!.
            </p>
            <Link to="/" className="text-black-600 hover:text-black-800 font-semibold">
                Go back to the homepage
            </Link>
        </div>
    );
}

export default UnderConstruction;
