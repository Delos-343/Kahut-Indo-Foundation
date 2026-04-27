import Dots from '../../../../assets/dots.png'

// Placeholder Icon component (replace with your actual icon component/library)
const PlaceholderIcon = () => (
    <svg
        className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0" // Adjust size and color as needed
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            // Example using a simple circle or checkmark, replace path data with your icon
            // d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Checkmark circle example
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" // Simple circle example
        />
    </svg>
);

function Issues() { // Renamed component for clarity
    const issues = [
        'Lack of clarity on decision-making processes',
        'Slow development and adoption of new features',
        'Difficulty in coordinating community efforts',
        'Inadequate funding for ecosystem projects',
    ];

    return (
        <>
            <div className="pt-24 md:pt-32 pb-16 text-center px-6 sm:px-12 md:px-24 lg:px-36">
                {/* Logo */}
                {/* <img
                    className="h-48 sm:h-56 md:h-64 inline-block mb-8"
                    src={RevoLogo}
                    alt="Revo Foundation Logo"
                /> */}
                {/* Main Title */}
                <h3 className="text-3xl md:text-4xl font-semibold mt-6 mb-12 text-cyan-800">
                    Issues addressed by the Foundation
                </h3>

                {/* Issues List Section */}
                <div className="mt-8 text-left max-w-4xl mx-auto"> {/* Adjusted top margin */}
                    {/* Removed the subheading from here */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {issues.map((issue, index) => (
                            <div key={index} className="flex items-start p-3">
                                <PlaceholderIcon />
                                <span className="text-base md:text-lg text-gray-600">
                                    {issue}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Issues; // Export the renamed component