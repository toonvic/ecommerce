import { motion, AnimatePresence } from "framer-motion";

type FilterDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function FilterDrawer({ isOpen, onClose, children }: FilterDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-xl flex flex-col p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Filtrar</p>
              <button onClick={onClose}>✕</button>
            </div>

            <div className="flex-1 overflow-y-auto">{children}</div>

            <div className="space-y-2 pt-4 border-t">
              <button
                onClick={onClose}
                className="bg-[#d46d94] text-white w-full py-2 rounded-full text-sm font-semibold"
              >
                FILTRAR
              </button>
              <button
                onClick={onClose}
                className="bg-[#fdf5f7] border w-full py-2 rounded-full text-sm font-semibold"
              >
                LIMPAR FILTROS
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
