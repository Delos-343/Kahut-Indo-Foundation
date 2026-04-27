/**
 * Komponen untuk menampilkan bagian "Program Ecosystem"
 * dengan latar belakang gradien spesifik dan jarak atas dari Navbar.
 *
 */

// Pastikan path import ini sudah benar sesuai struktur folder Anda
import capacityImage from '../Program Ecosystem/components/program-ecosystem.png';

function ProgramEcosystem() {
    return (
      // Container utama: Tambahkan kelas margin-top (misal: mt-16)
      // untuk memberi jarak dari elemen di atasnya (Navbar).
      // Sesuaikan nilai '16' jika perlu (misal: 12, 20, 24).
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#C4C466] to-[#fcfaf5] p-6"> {/* <-- mt-16 DITAMBAHKAN DI SINI */}

        {/* --- Konten Teks --- */}
        {/* Memberi sedikit margin bawah pada H1 agar ada jarak ke gambar */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-6"> {/* mb-6 ditambahkan */}
         Program Ecosystem
       </h1>

       {/* --- Elemen Gambar --- */}
       <img
         src={capacityImage}
         alt="Ilustrasi ProgramEcosystem"
         // Kelas ukuran gambar tetap sama
         // Margin bawah pada gambar bisa dihapus atau dikurangi karena H1 sudah diberi margin bawah
         className="w-full max-w-2xl h-auto rounded-lg shadow-md object-contain"
       />

     </div>
    );
  }

  export default ProgramEcosystem;