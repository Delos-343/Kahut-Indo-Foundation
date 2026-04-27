
// Data aktivitas dari gambar Ecolabel, Climate, Green Jobs & Environment
const environmentItems = [
  "Research & data analysis on social-related impacts of climate & industries",
  "Trainings of Forest Management, Unions and Local Communities on Forest Certification",
  "Standard-setting for Green Jobs (GJ check)",
  "Green Jobs Award",
  "Capacity Building of Stakeholders and Rights holders in Forest Operations for Social Dialogue",
  "Carbon-offset Projects: restoration of degraded lands and community development",
  "Education on domestic waste management & circular economy",
  "Education on sustainable farming"
];

/**
 * Komponen untuk menampilkan daftar aktivitas Ecolabel, Climate, Green Jobs & Environment
 * dalam tabel dengan latar belakang gradien spesifik.
 */
// Nama fungsi dibuat lebih ringkas agar mudah dibaca, namun Anda bisa tetap menggunakan nama panjang jika mau.
function EcoClimateEnvironment() { // Anda bisa juga menamakannya EcolabelClimateGreenJobsEnvironment jika ingin sama persis dengan judul
  return (
    // Container utama dengan background gradient, padding, dan layout flex
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#C4C466] to-[#fcfaf5] p-6 pt-20"> {/* pt-20 untuk jarak dari atas */}

      {/* Judul Halaman/Bagian (sesuai gambar) */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-8">
        Ecolabel, Climate, Green Jobs & Environment
      </h2>

      {/* Container untuk Tabel agar bisa dibatasi lebarnya */}
      <div className="w-full max-w-4xl overflow-x-auto"> {/* max-w-4xl membatasi lebar tabel, overflow-x-auto untuk layar kecil */}

        {/* Tabel untuk menampilkan data */}
        {/* Styling tabel dibuat konsisten dengan komponen sebelumnya */}
        <table className="w-full bg-white bg-opacity-60 rounded-lg shadow-md border border-gray-300">
          {/* Kepala Tabel (Header) */}
          <thead className="bg-white bg-opacity-80">
            <tr>
              <th className="p-3 text-center font-semibold text-gray-700 border-b border-gray-300 w-16">No.</th>
              <th className="p-3 text-left font-semibold text-gray-700 border-b border-gray-300">Program / Initiative</th> {/* Ubah judul kolom jika perlu */}
            </tr>
          </thead>

          {/* Badan Tabel (Body) */}
          <tbody>
            {/* Melakukan iterasi (looping) pada array environmentItems */}
            {environmentItems.map((item, index) => (
              // Setiap baris (tr) harus memiliki key unik
              <tr key={index} className="hover:bg-white/50 even:bg-white/30 transition-colors duration-150">
                {/* Kolom Nomor */}
                <td className="p-3 text-center border-b border-gray-300">{index + 1}</td>
                {/* Kolom Nama Aktivitas/Item */}
                <td className="p-3 text-left border-b border-gray-300">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

// Pastikan nama export sesuai dengan nama fungsi Anda
export default EcoClimateEnvironment; // atau export default EcolabelClimateGreenJobsEnvironment;