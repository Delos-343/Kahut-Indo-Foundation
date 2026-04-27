import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import NotFound from '../pages/NotFound';
import AboutUs from '../pages/About';
import Experts from '../pages/About/Experts';
import Governance from '../pages/About/Governance';

import BusinessFields from '../pages/Product/BusinessFields';
import UnderConstruction from '../pages/UnderConstruction';
import IndustrialCapacity from '../pages/Product/StrategicProduct/Industrial Capacity and Vocational Training';
import ProgramEcosystem from '../pages/Product/StrategicProduct/Program Ecosystem';
import WorkersEducation from '../pages/Product/StrategicProduct/Workers Education and Development';
import FundAsset from '../pages/Product/StrategicProduct/Fund and Asset Management';
import EcoClimateEnvironment from '../pages/Product/StrategicProduct/Ecolabel  Climate Green Jobs  Environment';
import LegalAidDisputeResolution from '../pages/Product/StrategicProduct/Legal Aid Dispute Resolution';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/experts" element={<Experts />} />
            <Route path="/about-us/governance" element={<Governance />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/product/business-fields" element={<BusinessFields/>} />
            <Route path="/product/strategic-program/ecosystem" element={<ProgramEcosystem />} />
            <Route path="/product/strategic-program/workers-dev" element={<WorkersEducation />} />
            <Route path="/product/strategic-program/industrial-training" element={<IndustrialCapacity />} />
            <Route path="/product/strategic-program/fund-mgmtg" element={<FundAsset />} />
            <Route path="/product/strategic-program/ecolabel-env" element={<EcoClimateEnvironment />} />
            <Route path="/product/strategic-program/legal-adr" element={<LegalAidDisputeResolution />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}


export default App;