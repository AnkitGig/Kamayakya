import React from 'react';

export default function Disclosure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Disclosure</h1>
          <p className="text-lg text-gray-600">In accordance with SEBI (Research Analyst) Regulations, 2014</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <p className="text-gray-700 leading-relaxed">
            The particulars given in this Disclosure Document have been prepared in accordance with SEBI (Research Analyst) Regulations, 2014. For the purpose of this Disclosure Document, Research Analyst Is Kaushal Kumar Sharma, (hereinafter referred as "Research Entity").
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3 text-lg font-bold">1</span>
              History, Present Business and Background
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Kaushal Kumar Sharma is registered with SEBI as Research Analyst with registration no. INH000024310. The Research Analyst got its registration on 17th December, 2025 and is engaged in offering research and recommendation services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3 text-lg font-bold">2</span>
              Terms and Conditions of Research Services
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700 ml-4">
              <li>The Research Services will be limited to providing independent research recommendation and shall not be involved in any advisory or portfolio allocation services.</li>
              <li>The Research Analyst never guarantees the returns on the recommendation provided. Investor shall take note that Investment/trading in stocks/Index or other securities is always subject to market risk. Past performance is never a guarantee of same future results.</li>
              <li>The Research Analyst shall not be responsible for any loss to the Investors.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3 text-lg font-bold">3</span>
              Disciplinary History
            </h2>
            <p className="text-gray-700 leading-relaxed">
              There are no pending material litigations or legal proceedings against the Research Analyst. As on date, no penalties / directions have been issued by SEBI under the SEBI Act or Regulations made there under against the Research Analyst relating to Research Analyst services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3 text-lg font-bold">4</span>
              Details of its Associates
            </h2>
            <p className="text-gray-700 leading-relaxed">No associates</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3 text-lg font-bold">5</span>
              Disclosures with Respect to Research and Recommendations Services
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700 ml-4">
              <li>The Research Analyst or any of its officer/employee does not trade in securities which are subject matter of recommendation.</li>
              <li>There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise.</li>
              <li>Research Analyst or its employee or its associates have not received any compensation from the company which is subject matter of recommendation.</li>
              <li>Research Analyst or its employee or its associates have not managed or co-managed the public offering of any company.</li>
              <li>Research Analyst or its employee or its associates have not received any compensation for investment banking or merchant banking of brokerage services from the subject company.</li>
              <li>Research Analyst or its employee or its associates have not received any compensation for products or services other than above from the subject company.</li>
              <li>Research Analyst or its employee or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report/ recommendation.</li>
              <li>The subject company was not a client of Research Analyst or its employee or its associates during twelve months preceding the date of recommendation services provided.</li>
              <li>Research Analysts or its employee or its associates has not served as an officer, director or employee of the subject company.</li>
              <li>Research Analysts has not been engaged in market making activity of the subject company.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}