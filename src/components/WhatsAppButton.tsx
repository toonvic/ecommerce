export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5547988493983"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe5a] rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50 cursor-pointer"
    >
      <img src="/whats.svg" alt="WhatsApp" className="w-7 h-7 invert" />
    </a>
  );
}
