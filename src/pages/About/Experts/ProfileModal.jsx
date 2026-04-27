import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import CloseIcon from '@mui/icons-material/Close'; // Using MUI icon for close button

function ProfileModal({ member, isOpen, onClose }) {
    // If no member is selected or modal is not open, render nothing
    if (!isOpen || !member) {
        return null;
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={onClose}>
                {/* Overlay */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        {/* Modal Panel */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 sm:p-8 text-left align-middle shadow-xl transition-all relative">
                                {/* Close Button */}
                                <button
                                    type="button"
                                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                                    onClick={onClose}
                                >
                                    <CloseIcon />
                                </button>

                                {/* Modal Content */}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                    {/* Image */}
                                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                                        <img
                                            className="h-36 w-36 rounded-full object-cover border-4 border-red-200 shadow-md"
                                            src={member.imageUrl}
                                            alt={`Profile of ${member.name}`}
                                        />
                                    </div>
                                    {/* Text Content */}
                                    <div className="mt-3 sm:mt-0 text-center sm:text-left">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-xl lg:text-2xl font-semibold leading-6 text-gray-900 mb-3"
                                        >
                                            {member.name}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                             {/* Menampilkan deskripsi member */}
                                             {/* text-justify ditambahkan untuk membuat teks rata kiri-kanan */}
                                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                                                {member.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default ProfileModal;