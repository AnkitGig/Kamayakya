import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GrievanceRedressal from "./pages/GrievanceRedressal";
import RefundPolicy from "./pages/RefundPolicy";
import InvestorCharter from "./pages/InvestorCharter";
import ComplaintData from "./pages/ComplaintData";
import Disclaimer from "./pages/Disclaimer";
import Disclosure from "./pages/Disclosure";
import Footer from "./components/Footer";
import PaymentPage from "./pages/Payment";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/investor-charter" element={<InvestorCharter />} />
        <Route path="/complaint-data" element={<ComplaintData />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/disclosure" element={<Disclosure />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
