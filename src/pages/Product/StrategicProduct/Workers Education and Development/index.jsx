import React from "react";

const educationPrograms = [
  "Diploma Scholarship (Bachelor Degree) for Union Officials",
  "Trade Union Capacity Building in Organizing & Leadership",
  "Digital Management",
  "Workers Housing Development",
  "Boarding accommodation for plantation workers children in primary/secondary schools & soft skills development",
  "Creches / childcare",
  "Workers' night courses",
  "Pre-retirement orientation courses",
  "Post-termination orientation courses",
];

function WorkersEducation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#b6ae72] to-[#f7f3e8] px-4 py-20 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center pt-8 md:pt-12">
        <h2 className="mb-8 text-center text-3xl font-semibold text-gray-800 sm:text-4xl">
          Workers Education & Development
        </h2>

        <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-xl backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#8a8b5a]">
                <tr>
                  <th className="w-20 px-4 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white">
                    No.
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold uppercase tracking-wide text-white">
                    Program / Activity
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#ddd7c4]">
                {educationPrograms.map((program, index) => (
                  <tr
                    key={index}
                    className="transition-colors duration-150 even:bg-white/50 hover:bg-white/80"
                  >
                    <td className="px-4 py-4 text-center text-sm font-medium text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-4 py-4 text-sm leading-6 text-gray-700">
                      {program}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkersEducation;
