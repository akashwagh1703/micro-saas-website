import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../config';

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab safe-bottom safe-right fixed z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/40 transition hover:scale-110 hover:bg-emerald-600 sm:h-14 sm:w-14"
      aria-label="WhatsApp us"
      title="WhatsApp us"
    >
      <MessageCircle size={24} fill="white" className="text-white sm:hidden" />
      <MessageCircle size={28} fill="white" className="hidden text-white sm:block" />
    </a>
  );
}
