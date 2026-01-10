import React from 'react';

export default function InvestorCharter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Investor Charter in respect of Research Analysts</h1>
          <p className="text-lg text-gray-600">Guidelines and rights for investors dealing with Research Analysts.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-4 text-xl font-bold">A</span>
              Vision and Mission Statements for Investors
            </h2>
            <div className="ml-14 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
                <p className="text-gray-700">Invest with knowledge & safety.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission</h3>
                <p className="text-gray-700">Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-4 text-xl font-bold">B</span>
              Details of Business Transacted by the Research Analyst
            </h2>
            <ul className="ml-14 space-y-2 list-disc list-inside text-gray-700">
              <li>To publish research report based on the research activities of the RA</li>
              <li>To provide an independent unbiased view on securities.</li>
              <li>To offer unbiased recommendation, disclosing the financial interests in recommended securities.</li>
              <li>To provide research recommendation, based on analysis of publicly available information and known observations.</li>
              <li>To conduct audit annually</li>
              <li>To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.</li>
              <li>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-4 text-xl font-bold">C</span>
              Details of Services Provided to Investors (No Indicative Timelines)
            </h2>
            <div className="ml-14 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Onboarding of Clients</h3>
                <ul className="space-y-1 list-disc list-inside text-gray-700 ml-4">
                  <li>Sharing of terms and conditions of research services</li>
                  <li>Completing KYC of fee paying clients</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Disclosure to Clients</h3>
                <ul className="space-y-1 list-disc list-inside text-gray-700 ml-4">
                  <li>To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any</li>
                  <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
                  <li>To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures</li>
                  <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
                </ul>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>To distribute research reports and recommendations to the clients without discrimination.</li>
                <li>To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</li>
                <li>To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information</li>
                <li>To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines</li>
                <li>To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services</li>
                <li>To treat all clients with honesty and integrity</li>
                <li>To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-4 text-xl font-bold">D</span>
              Details of Grievance Redressal Mechanism
            </h2>
            <div className="ml-14 space-y-4 text-gray-700">
              <p>1. Investor can lodge complaint/grievance against Research Analyst in the following ways:</p>
              <div className="ml-4">
                <p className="font-semibold">Mode of filing the complaint with research analyst</p>
                <p>In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.</p>
              </div>
              <div className="ml-4">
                <p className="font-semibold">Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB)</p>
                <p>i. SCORES 2.0 (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner) (<a href="https://scores.sebi.gov.in" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">https://scores.sebi.gov.in</a>)</p>
                <p className="ml-4">Two level review for complaint/grievance against Research Analyst:</p>
                <ul className="ml-8 list-disc list-inside">
                  <li>First review done by designated body (RAASB)</li>
                  <li>Second review done by SEBI</li>
                </ul>
                <p>ii. Email to designated email ID of RAASB</p>
              </div>
              <p>2. If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on SMARTODR platform for its resolution through online conciliation or arbitration.</p>
              <p>With regard to physical complaints, investors may send their complaints to:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>Office of Investor Assistance and Education,<br />
                Securities and Exchange Board of India,<br />
                SEBI Bhavan, Plot No. C4-A, 'G' Block,<br />
                Bandra-Kurla Complex, Bandra (E),<br />
                Mumbai - 400 051</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-4 text-xl font-bold">E</span>
              Rights of Investors
            </h2>
            <ul className="ml-14 space-y-2 list-disc list-inside text-gray-700">
              <li>Right to Privacy and Confidentiality</li>
              <li>Right to Transparent Practices</li>
              <li>Right to fair and Equitable Treatment</li>
              <li>Right to Adequate Information</li>
              <li>Right to Initial and Continuing Disclosure - Right to receive information about all the statutory and regulatory disclosures</li>
              <li>Right to Fair & True Advertisement</li>
              <li>Right to Awareness about Service Parameters and Turnaround Times</li>
              <li>Right to be informed of the timelines for each service</li>
              <li>Right to be Heard and Satisfactory Grievance Redressal</li>
              <li>Right to have timely redressal</li>
              <li>Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst</li>
              <li>Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services</li>
              <li>Additional Rights to vulnerable consumers - Right to get access to services in a suitable manner even if differently abled</li>
              <li>Right to provide feedback on the financial products and services used</li>
              <li>Right against coercive, unfair, and one-sided clauses in financial agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-4 text-xl font-bold">F</span>
              Expectations from the Investors (Responsibilities of Investors)
            </h2>
            <div className="ml-14 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Do's</h3>
                <ol className="space-y-1 list-decimal list-inside text-gray-700 ml-4">
                  <li>Always deal with SEBI registered Research Analyst.</li>
                  <li>Ensure that the Research Analyst has a valid registration certificate.</li>
                  <li>Check for SEBI registration number. Please refer to the list of all SEBI registered Research Analyst which is available on SEBI website in the following link: <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">SEBI Registered RAs</a></li>
                  <li>Always pay attention towards disclosures made in the research reports before investing.</li>
                  <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)</li>
                  <li>Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.</li>
                  <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation.</li>
                  <li>Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.</li>
                  <li>Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.</li>
                  <li>Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.</li>
                  <li>Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.</li>
                  <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Don'ts</h3>
                <ol className="space-y-1 list-decimal list-inside text-gray-700 ml-4">
                  <li>Do not provide funds for investment to the Research Analyst.</li>
                  <li>Don't fall prey to luring advertisements or market rumors.</li>
                  <li>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
                  <li>Do not share login credential and password of your trading, demat or bank accounts with the Research Analyst.</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}