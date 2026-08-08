import { ShieldCheck, X, Lock, CheckCircle2, FileText, Mail, EyeOff } from 'lucide-react';
import type React from 'react';
import { Modal } from './Modal';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Gizlilik Politikası" className="max-w-3xl text-left space-y-6">
    <button onClick={onClose} aria-label="Gizlilik politikasını kapat" className="absolute top-6 right-6 text-[#78716C] hover:text-[#1F1E1B] p-2 rounded-xl bg-[#FAF9F5] border border-[#E5E1D8] transition-colors cursor-pointer">
      <X className="w-5 h-5" aria-hidden="true" />
    </button>

    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-[#F8F4EA] border border-[#B89248]/30 flex items-center justify-center text-[#B89248] shadow-xs">
        <ShieldCheck className="w-6 h-6" aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1F1E1B]">Gizlilik Politikası</h3>
        <p className="text-xs text-[#78716C] mt-0.5">GÜL STUDIOS web sitesi</p>
      </div>
    </div>

    <div className="space-y-6 text-xs sm:text-sm text-[#44403C] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
      <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5E1D8] flex items-center gap-3 text-xs text-[#57534E]">
        <Lock className="w-5 h-5 text-[#B89248] shrink-0" aria-hidden="true" />
        <p><strong>Özet:</strong> Bu web sitesi şu anda iletişim veya kapalı test formlarından kişisel veri toplamaz, saklamaz ya da üçüncü taraflarla paylaşmaz.</p>
      </div>

      <section className="space-y-2">
        <h4 className="text-sm font-bold text-[#1F1E1B] flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B89248]" aria-hidden="true" />1. Formlar ve iletişim</h4>
        <p className="pl-6">Web sitesindeki iletişim ve test talep alanları henüz gönderim altyapısına bağlı değildir. Bu nedenle yazılan bilgiler işlenmez veya iletilmez. Bizimle iletişim kurmak için e-posta bağlantısını kullanabilirsiniz.</p>
      </section>

      <section className="space-y-2">
        <h4 className="text-sm font-bold text-[#1F1E1B] flex items-center gap-2"><EyeOff className="w-4 h-4 text-[#2D5237]" aria-hidden="true" />2. İzleme ve üçüncü taraflar</h4>
        <p className="pl-6">Bu sürümde analiz, reklam veya izleme çerezi kullanılmaz. Yazı tipleri Google Fonts üzerinden yüklenir; bu istekler Google’ın kendi gizlilik politikasına tabidir.</p>
      </section>

      <section className="space-y-2">
        <h4 className="text-sm font-bold text-[#1F1E1B] flex items-center gap-2"><FileText className="w-4 h-4 text-[#B89248]" aria-hidden="true" />3. Uygulama bilgileri</h4>
        <p className="pl-6">Bu metin web sitesi davranışını açıklar. Hıfz uygulamasının veri işleme uygulamaları, uygulama yayımlandığında ayrı ve güncel bir gizlilik politikası ile sunulacaktır.</p>
      </section>

      <section className="space-y-2">
        <h4 className="text-sm font-bold text-[#1F1E1B] flex items-center gap-2"><Mail className="w-4 h-4 text-[#B89248]" aria-hidden="true" />4. İletişim</h4>
        <p className="pl-6">Gizlilik veya veri talepleri için <a href="mailto:gulstudiosapps@gmail.com" className="font-bold text-[#B89248] hover:underline">gulstudiosapps@gmail.com</a> adresine yazabilirsiniz.</p>
      </section>
    </div>

    <div className="pt-4 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#78716C]">
      <span>Son güncelleme: 8 Ağustos 2026</span>
      <button onClick={onClose} className="w-full sm:w-auto px-6 py-2.5 rounded-xl gold-button font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs">Anladım & Kapat</button>
    </div>
  </Modal>
);
