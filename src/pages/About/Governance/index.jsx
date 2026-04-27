import React from "react";

function Governance() {
  const governanceData = {
    boardOfTrustees: [{ role: "Trustee", name: "Khoirul Anam" }],
    boardOfSupervisor: [{ role: "Supervisor", name: "Wahyu Ramdhani" }],
    boardOfExecutives: [
      { role: "President", name: "Rulita Wijayaningdyah" },
      { role: "Vice President", name: "Agus Salim" },
      { role: "Vice President", name: "Sukarjo" },
      { role: "Vice President", name: "Jayadi Muh Thaha" },
      { role: "Secretary", name: "Noer Tjahjono" },
      { role: "Treasurer", name: "Ririn Rinawati" },
    ],
    programLead: [{ role: "Lead", name: "To Be Assigned" }],
    legalAidLead: [{ role: "Lead", name: "Pikiran Daeli" }],
    localTeams: [{ role: "Regions", name: "Jawa, Sumatera, Kalimantan, Sulawesi & Bali" }],
  };

  const isPlaceholder = (val) =>
    typeof val === "string" && val.toLowerCase().includes("to be assigned");

  // Reusable Table Component
  const GovernanceTable = ({ data }) => (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full">
        <thead className="bg-[#7f8050]">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-white uppercase tracking-wide">
              Position
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-white uppercase tracking-wide">
              Name
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr
              key={index}
              className="even:bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <td className="px-4 py-3 text-sm font-medium text-gray-700">
                {item.role}
              </td>
              <td
                className={`px-4 py-3 text-sm ${
                  isPlaceholder(item.name)
                    ? "italic text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {item.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Section Wrapper
  const Section = ({ title, data }) => (
    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
      <h2 className="text-lg md:text-xl font-semibold text-[#4f5533] mb-6">
        {title}
      </h2>
      <GovernanceTable data={data} />
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#b6ae72] to-[#f7f3e8] px-6 pt-28 pb-12 text-center sm:px-12 md:pt-32">
        <h1 className="bg-gradient-to-r from-[#5f6338] to-[#7f8050] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Our Team
        </h1>
      </section>

      {/* Content */}
      <section className="bg-[#f5f2e7] px-6 py-16 sm:px-12 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl space-y-10">

          <Section title="Board of Trustees" data={governanceData.boardOfTrustees} />

          <Section title="Board of Supervisor" data={governanceData.boardOfSupervisor} />

          <Section title="Board of Executives" data={governanceData.boardOfExecutives} />

          <Section title="Program Lead" data={governanceData.programLead} />

          <Section title="Legal Aid Lead" data={governanceData.legalAidLead} />

          <Section title="Local Grassroot Teams" data={governanceData.localTeams} />

        </div>
      </section>
    </>
  );
}

export default Governance;
