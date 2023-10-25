export default function Modal({ open, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors z-10 p-3 ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`max-h-[700px] overflow-y-scroll bg-white rounded-xl shadow  p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          className="absolute top-2 right-2 p-1 px-2 rounded-lg text-grey-30 bg-white hover:bg-grey-30 hover:text-white"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
