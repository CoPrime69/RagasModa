type ModalProps = {
    isOpen: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
};

export default function Modal({ isOpen, title, children, onClose }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 transform transition-transform duration-300 scale-100">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                {children}
                <button 
                    onClick={onClose} 
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
}