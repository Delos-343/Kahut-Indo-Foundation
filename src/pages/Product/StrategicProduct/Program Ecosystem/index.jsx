/**
 * Komponen untuk menampilkan bagian "Program Ecosystem"
 * dengan layout responsif dan spacing yang konsisten.
 */

import capacityImage from "../Program Ecosystem/components/program-ecosystem.png";

function ProgramEcosystem() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#b6ae72] to-[#f7f3e8] px-4 py-20 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 pt-12 md:pt-16">
        <h1 className="text-center text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl">
          Program Ecosystem
        </h1>

        <div className="w-full max-w-5xl">
          <img
            src={capacityImage}
            alt="Ilustrasi Program Ecosystem"
            className="h-auto w-full rounded-lg object-contain shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default ProgramEcosystem;
