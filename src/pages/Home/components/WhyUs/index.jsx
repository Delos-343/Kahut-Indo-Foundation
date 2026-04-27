// import FreshIdea from '../../../../assets/undraw_lightbulb_moment_re_ulyo.svg';
// import CuttingEdge from '../../../../assets/undraw_programmer_re_owql.svg';
// import SeriousGroup from '../../../../assets/undraw_solution_mindset_re_57bf.svg';
// import CustomerReview from '../../../../assets/undraw_reviews_lp8w.svg';
// import DreamerPerson from '../../../../assets/undraw_dreamer_re_9tua.svg';
// import SaveMoney from '../../../../assets/undraw_savings_re_eq4w.svg';
// import BeneficiariesIcon from '../../../../assets/undraw_savings_re_eq4w.svg'; // Ganti dengan ikon yang sesuai - Sepertinya tidak digunakan
import WorkersIcon from '../../../../assets/pekerja.jpg';
import IndigenousIcon from '../../../../assets/sukuadat.jpg';
import LocalIcon from '../../../../assets/local_communities.jpg';
import StakeHolderIcon from '../../../../assets/stakeholders.jpg';
import GovernmentIcon from '../../../../assets/government.jpg';
import Dots from '../../../../assets/dots.png'


function HomeWhyUs() {
    return (
        <>
            <div id="HomeWhyUs" className='max-w-[1440px] mx-auto px-12 2xl:px-0 py-10' style={{ backgroundImage: `url(${Dots})`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}>
                <h2 className="drop-shadow-md text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-950 py-12">Beneficiaries</h2>
                <div className="flex flex-wrap justify-center">
                    {/* Container untuk setiap item beneficiary - mengatur layout grid */}
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-8 md:my-10 lg:my-12">
                        {/* beneficiary-card: Ini adalah div yang menampilkan konten sebagai kartu. Diberi background, padding, sudut membulat (rounded), dan shadow */}
                        <div className="beneficiary-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                            {/* Gambar ikon beneficiary, ukurannya sedikit diperbesar (h-40) */}
                            <img className="h-40 mb-8 md:mb-10 lg:mb-12" src={WorkersIcon} alt="Workers Icon" />
                            <h3 className="text-lg lg:text-xl text-center font-bold text-indigo-950 mb-4">Workers & Families</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Workers, union members and their families</p>
                        </div>
                    </div>

                    {/* Container untuk setiap item beneficiary - mengatur layout grid */}
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-8 md:my-10 lg:my-12">
                        {/* beneficiary-card: Ini adalah div yang menampilkan konten sebagai kartu. Diberi background, padding, sudut membulat (rounded), dan shadow */}
                        <div className="beneficiary-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                            {/* Gambar ikon beneficiary, ukurannya sedikit diperbesar (h-40) */}
                            <img className="h-40 mb-8 md:mb-10 lg:mb-12" src={LocalIcon} alt="Local Communities Icon" />
                            <h3 className="text-lg lg:text-xl text-center font-bold text-indigo-950 mb-4">Local Communities</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Local communities</p>
                        </div>
                    </div>

                    {/* Container untuk setiap item beneficiary - mengatur layout grid */}
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-8 md:my-10 lg:my-12">
                         {/* beneficiary-card: Ini adalah div yang menampilkan konten sebagai kartu. Diberi background, padding, sudut membulat (rounded), dan shadow */}
                        <div className="beneficiary-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                             {/* Gambar ikon beneficiary, ukurannya sedikit diperbesar (h-40) */}
                            <img className="h-40 mb-8 md:mb-10 lg:mb-12" src={IndigenousIcon} alt="Indigenous Peoples Icon" />
                            <h3 className="text-lg lg:text-xl text-center font-bold text-indigo-950 mb-4">Indigenous Peoples</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Indigenous peoples’ groups</p>
                        </div>
                    </div>

                    {/* Container untuk setiap item beneficiary - mengatur layout grid */}
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-8 md:my-10 lg:my-12">
                         {/* beneficiary-card: Ini adalah div yang menampilkan konten sebagai kartu. Diberi background, padding, sudut membulat (rounded), dan shadow */}
                        <div className="beneficiary-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                            {/* Gambar ikon beneficiary, ukurannya sedikit diperbesar (h-40) */}
                            <img className="h-40 mb-8 md:mb-10 lg:mb-12" src={StakeHolderIcon} alt="Industry Players Icon" />
                            <h3 className="text-lg lg:text-xl text-center font-bold text-indigo-950 mb-4">Industry Players</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Industry players and stakeholders</p>
                        </div>
                    </div>

                    {/* Container untuk setiap item beneficiary - mengatur layout grid */}
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4 my-8 md:my-10 lg:my-12">
                         {/* beneficiary-card: Ini adalah div yang menampilkan konten sebagai kartu. Diberi background, padding, sudut membulat (rounded), dan shadow */}
                        <div className="beneficiary-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                            {/* Gambar ikon beneficiary, ukurannya sedikit diperbesar (h-40) */}
                            <img className="h-40 mb-8 md:mb-10 lg:mb-12" src={GovernmentIcon} alt="Government Icon" />
                            <h3 className="text-lg lg:text-xl text-center font-bold text-indigo-950 mb-4">Government</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Government</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeWhyUs;