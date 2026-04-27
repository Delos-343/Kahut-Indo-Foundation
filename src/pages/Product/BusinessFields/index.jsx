import React from 'react';

// Data (tidak berubah)
const businessFieldsData = [
  // ... (data Anda di sini, sama seperti sebelumnya)
  { code: '88992', id: 'Aktivitas Sosial Swasta Tanpa Akomodasi Lainnya', en: 'Other private social activities without accommodation' },
  { code: '88919', id: 'Aktivitas Sosial Pengumpulan Dana Lainnya', en: 'Other Fund-raising Social activities' },
  { code: '94990', id: 'Aktivitas Organisasi Keanggotaan Lainnya', en: 'Other membership-based activities' },
  { code: '70209', id: 'Aktivitas Konsultansi Manajemen Lainnya', en: 'Other management consultancy activities' },
  { code: '74909', id: 'Aktivitas Profesional, Ilmiah & Teknis Lainnya', en: 'Other professional, scientific & technical activities' },
  { code: '78429', id: 'Pelatihan Kerja Swasta Lainnya', en: 'Other private vocational trainings' },
  { code: '85499', id: 'Pendidikan Lainnya Swasta', en: 'Other private education providers' },
  { code: '02403', id: 'Jasa Rehabilitasi dan Restorasi Kehutanan Sosial', en: 'Social forestry rehabilitation & restoration services' },
  { code: '02402', id: 'Jasa Perlindungan Hutan & Konservasi Alam', en: 'Forest protection & nature conservation services' },
  { code: '71201', id: 'Jasa Sertifikasi', en: 'Certification services' },
  { code: '85500', id: 'Kegiatan Penunjang Pendidikan', en: 'Education support activities' },
  { code: '82990', id: 'Aktivitas Jasa Penunjang Usaha Lainnya', en: 'Other business support services activities' },
  { code: '69109', id: 'Aktivitas Hukum Lainnya', en: 'Other law activities' },
  { code: '68111', id: 'Real Estat yang dimiliki sendiri atau disewa', en: 'Own or rental real-estate/properties' },
];
const leftColumnData = businessFieldsData.slice(0, 7);
const rightColumnData = businessFieldsData.slice(7);

function BusinessFields() {
  return (
    // Container utama:
    // - Hapus 'container mx-auto'
    // - Tambah padding atas (misal pt-24 md:pt-32) untuk jarak dari navbar
    // - Pertahankan padding bawah (misal pb-12 md:pb-16)
    // - Pertahankan padding horizontal (px-4) agar konten tidak menempel di tepi layar kecil
    <div className="min-h-screen px-4 pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-[#C4C466] to-[#fcfaf5]"> {/* Perubahan di sini */}

      {/* Judul */}
      {/* Tidak perlu container tambahan karena sudah text-center */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
          Business Fields (ISIC 2020)
        </h1>
        <p className="text-lg md:text-xl text-green-700 font-medium">
          Bidang Usaha Sesuai KBLI 2020
        </p>
      </div>

      {/* Kontainer Grid untuk dua kolom */}
      {/* Pertahankan 'max-w-6xl mx-auto' di sini agar grid tetap di tengah */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6">

        {/* Kolom Kiri */}
        <div className="space-y-6">
          {leftColumnData.map((item, index) => (
            <div key={`left-${item.code}-${index}`} className="bg-white p-4 rounded shadow-md border-l-4 border-cyan-500">
              <p className="text-sm font-semibold text-cyan-600 mb-1">{item.code}</p>
              <p className="text-base font-medium text-gray-700">{item.id}</p>
              <p className="text-sm text-gray-500 italic mt-1">{item.en}</p>
            </div>
          ))}
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-6">
          {rightColumnData.map((item, index) => (
            <div key={`right-${item.code}-${index}`} className="bg-white p-4 rounded shadow-md border-l-4 border-green-500">
              <p className="text-sm font-semibold text-green-600 mb-1">{item.code}</p>
              <p className="text-base font-medium text-gray-700">{item.id}</p>
              <p className="text-sm text-gray-500 italic mt-1">{item.en}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessFields;