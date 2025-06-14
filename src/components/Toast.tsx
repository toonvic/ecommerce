import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

type ToastProps = {
  show: boolean;
  onClose: () => void;
};

export default function Toast({ show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 right-6 max-w-[300px] sm:max-w-xs bg-white border border-[#d46d94] text-[#d46d94] px-5 py-4 rounded-xl shadow-lg flex items-center gap-4 z-50"
        >
          <CheckCircle className="w-5 h-5 shrink-0" />
          <div className="flex-1 text-sm leading-tight">
            Produto <br className="block sm:hidden" /> adicionado ao carrinho
          </div>
          <Link
            to="/carrinho"
            className="bg-[#d46d94] hover:bg-[#bb5f83] text-white px-3 py-1 rounded-full text-xs font-medium cursor-pointer"
          >
            Ver
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
