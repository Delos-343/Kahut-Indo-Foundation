import React from 'react';

// Data program/aktivitas dari gambar Anda
const educationPrograms = [
  "Diploma Scholarship (Bachelor Degree) for Union Officials",
  "Trade Union Capacity Building in Organizing & Leadership",
  "Digital Management",
  "Workers Housing Development",
  "Boarding accommodation for plantation workers children in primary/secondary schools & soft skills development",
  "Creches / childcare",
  "Workers' night courses",
  "Pre-retirement orientation courses",
  "Post-termination orientation courses"
];

/**
 * Komponen untuk menampilkan daftar program edukasi pekerja dalam tabel
 * dengan latar belakang gradien spesifik.
 */
function WorkersEducation() {
  return (
    // Container utama dengan background gradient, padding, dan layout flex
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#C4C466] to-[#fcfaf5] p-6 pt-20"> {/* pt-20 untuk jarak dari atas */}

      {/* Judul Halaman/Bagian */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-8">
        Workers Education & Development
      </h2>

      {/* Container untuk Tabel agar bisa dibatasi lebarnya */}
      <div className="w-full max-w-4xl overflow-x-auto"> {/* max-w-4xl membatasi lebar tabel, overflow-x-auto untuk layar kecil */}

        {/* Tabel untuk menampilkan data */}
        <table className="w-full bg-white bg-opacity-60 rounded-lg shadow-md border border-gray-300">
          {/* Kepala Tabel (Header) */}
          <thead className="bg-white bg-opacity-80">
            <tr>
              <th className="p-3 text-center font-semibold text-gray-700 border-b border-gray-300 w-16">No.</th>
              <th className="p-3 text-left font-semibold text-gray-700 border-b border-gray-300">Program / Activity</th>
            </tr>
          </thead>

          {/* Badan Tabel (Body) */}
          <tbody>
            {/* Melakukan iterasi (looping) pada array educationPrograms */}
            {educationPrograms.map((program, index) => (
              // Setiap baris (tr) harus memiliki key unik
              <tr key={index} className="hover:bg-white/50 even:bg-white/30 transition-colors duration-150">
                {/* Kolom Nomor */}
                <td className="p-3 text-center border-b border-gray-300">{index + 1}</td>
                {/* Kolom Nama Program */}
                <td className="p-3 text-left border-b border-gray-300">{program}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default WorkersEducation;