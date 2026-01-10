import React from 'react';

export default function ComplaintData() {
  const monthlyData = [
    { sr: 1, source: 'Directly from Investors', pendingLast: 0, received: 0, resolved: 0, totalPending: 0, pending3Months: 0, avgTime: 'N. A' },
    { sr: 2, source: 'SEBI (SCORES)', pendingLast: 0, received: 0, resolved: 0, totalPending: 0, pending3Months: 0, avgTime: 'N. A' },
    { sr: 3, source: 'Other Sources (If any)', pendingLast: 0, received: 0, resolved: 0, totalPending: 0, pending3Months: 0, avgTime: 'N. A' },
    { sr: '', source: 'Grand Total', pendingLast: 0, received: 0, resolved: 0, totalPending: 0, pending3Months: 0, avgTime: 'N. A' }
  ];

  const monthlyDisposal = [
    { sr: 1, month: 'December 2025', carried: 0, received: 0, resolved: 0, pending: 0 },
    { sr: '', month: 'Grand Total', carried: 0, received: 0, resolved: 0, pending: 0 }
  ];

  const annualDisposal = [
    { sr: 1, year: '2025-26', carried: '', received: '', resolved: '', pending: '' },
    { sr: '', year: 'Grand Total', carried: 0, received: 0, resolved: 0, pending: 0 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Complaint Data</h1>
          <p className="text-lg text-gray-600">Data for the month ending – December, 2025</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-12">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Complaint Data Summary</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Sr. No.</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Received from</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Pending at the end of last month</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Received</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Resolved</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Total Pending</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Pending complaints &gt; 3months</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Average Resolution time (in days)</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyData.map((row, index) => (
                    <tr key={index} className={`${row.source === 'Grand Total' ? 'bg-gray-50 font-semibold' : 'hover:bg-gray-50'}`}>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.sr || '-'}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.source}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.pendingLast}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.received}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.resolved}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.totalPending}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.pending3Months}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.avgTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Trend of Monthly Disposal of Complaints</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Sr. No.</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Month</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Carried forward from previous month</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Received</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Resolved</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Pending</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyDisposal.map((row, index) => (
                    <tr key={index} className={`${row.month === 'Grand Total' ? 'bg-gray-50 font-semibold' : 'hover:bg-gray-50'}`}>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.sr || '-'}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.month}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.carried}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.received}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.resolved}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.pending}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Trend of Annual Disposal of Complaints</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Sr. No.</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Year</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Carried forward from previous month</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Received</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Resolved</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">Pending</th>
                  </tr>
                </thead>
                <tbody>
                  {annualDisposal.map((row, index) => (
                    <tr key={index} className={`${row.year === 'Grand Total' ? 'bg-gray-50 font-semibold' : 'hover:bg-gray-50'}`}>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.sr || '-'}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.year}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.carried || '-'}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.received || '-'}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.resolved || '-'}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">{row.pending}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}