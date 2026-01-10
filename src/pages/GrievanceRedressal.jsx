import React from 'react';

export default function GrievanceRedressal() {
  const escalationData = [
    {
      designation: "Customer Care",
      name: "Kaushal Kumar Sharma",
      address: "102 First Floor 62 Sanvid Nagar Main Road Kanadiya Road, Indore, Madhya Pradesh, 452001",
      contact: "918226010451",
      email: "sharmakaushal312@gmail.com",
      hours: "Mon-Sat 09AM – 05 PM"
    },
    {
      designation: "Head of Customer Care",
      name: "Kaushal Kumar Sharma",
      address: "102 First Floor 62 Sanvid Nagar Main Road Kanadiya Road, Indore, Madhya Pradesh, 452001",
      contact: "918226010451",
      email: "sharmakaushal312@gmail.com",
      hours: "Mon-Sat 09AM – 05 PM"
    },
    {
      designation: "Compliance Officer",
      name: "Kaushal Kumar Sharma",
      address: "102 First Floor 62 Sanvid Nagar Main Road Kanadiya Road, Indore, Madhya Pradesh, 452001",
      contact: "918226010451",
      email: "sharmakaushal312@gmail.com",
      hours: "Mon-Sat 09AM – 05 PM"
    },
    {
      designation: "CEO",
      name: "–",
      address: "–",
      contact: "–",
      email: "–",
      hours: "–"
    },
    {
      designation: "Principal Officer",
      name: "Kaushal Kumar Sharma",
      address: "102 First Floor 62 Sanvid Nagar Main Road Kanadiya Road, Indore, Madhya Pradesh, 452001",
      contact: "918226010451",
      email: "sharmakaushal312@gmail.com",
      hours: "Mon-Sat 09AM – 05 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Grievance Redressal / Escalation Matrix</h1>
          <p className="text-lg text-gray-600">If you have a grievance, you can reach out to our Support Team for assistance.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Designation</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Contact Person Name</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Address</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Contact No.</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Email-ID</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Working Hours</th>
                </tr>
              </thead>
              <tbody>
                {escalationData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.designation}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.name}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.address}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.contact}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.email}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The abovementioned details would facilitate the complainants to approach the concerned RA before filing complaint to SEBI. For more details go to: <a href="https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">BSE Notices</a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              We aim to resolve all grievances within 21 working days from the date of receipt.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If your grievance is not resolved within this timeframe, you can escalate it to SEBI's SCORES Platform (SEBI Complaints Redress System). SCORES Portal: <a href="https://scores.sebi.gov.in" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">scores.sebi.gov.in</a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              In case you are unsatisfied with the resolution provided through our support or the SCORES platform, you can access the Online Dispute Resolution (ODR) Portal. ODR Portal: <a href="https://smartodr.in" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">smartodr.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}