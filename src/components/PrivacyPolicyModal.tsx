import React from 'react';
import { ShieldCheck, X, Lock, CheckCircle2, FileText, Mail, EyeOff } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1E1B]/60 backdrop-blur-md overflow-y-auto">
      <div className="glass-card-light max-w-3xl w-full p-6 sm:p-10 rounded-3xl border border-[#E5E1D8] relative bg-[#FDFBF7] shadow-2xl my-8 text-left space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#78716C] hover:text-[#1F1E1B] p-2 rounded-xl bg-[#FAF9F5] border border-[#E5E1D8] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F8F4EA] border border-[#B89248]/30 flex items-center justify-center text-[#B89248] shadow-xs">
            <ShieldCheck className="w-6 h-6 text-[#B89248]" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1F1E1B]">Gizlilik Politikası (Privacy Policy)</h3>
            <p className="text-xs text-[#78716C] mt-0.5">Google Play & KVKK Standartlarına Tam Uyumlu • GÜL STUDIOS</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-xs sm:text-sm text-[#44403C] leading-relaxed max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          
          <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5E1D8] flex items-center gap-3 text-xs text-[#57534E]">
            <Lock className="w-5 h-5 text-[#B89248] shrink-0" />
            <p>
              <strong>GÜL STUDIOS Özet Bildirimi:</strong> Kullanıcılarımızın gizliliği ve veri güvenliği temel insan hakkıdır. Hıfz ve diğer tüm uygulamalarımızda gereksiz veri toplanmaz ve kişisel verileriniz asla üçüncü taraflarla paylaşılmaz.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#1F1E1B] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B89248]" />
              <span>1. Hangi Verileri Topluyoruz?</span>
            </h4>
            <p className="pl-6">
              GÜL STUDIOS tarafından geliştirilen mobil ve web uygulamalarında (Hıfz dahil) varsayılan olarak kişisel kimlik verileri (T.C. No, Adres vb.) <strong>toplanmaz</strong>. İsteğe bağlı hesap oluşturma durumlarında yalnızca e-posta adresiniz ve şifrelenmiş parolanız güvenli kimlik doğrulama için kullanılır.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#1F1E1B] flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-[#2D5237]" />
              <span>2. Veri İzleme ve Güvenlik (No Tracking & High Security)</span>
            </h4>
            <p className="pl-6">
              Uygulamalarımızda hiçbir üçüncü taraf izleme çerezi bulunmaz. Kullanıcı odağını ve gizliliğini bozan ögeler yer almaz.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#1F1E1B] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#B89248]" />
              <span>3. Çevrimdışı Veri Depolama (Offline First)</span>
            </h4>
            <p className="pl-6">
              Hıfz uygulamasındaki ezber istatistikleriniz, cüz takibiniz ve kişisel notlarınız doğrudan cihazınızın yerel hafızasında saklanır. Cihazınız internete bağlı olmasa dahi tüm verileriniz güvendedir.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#1F1E1B] flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#B89248]" />
              <span>4. İletişim & Veri Silme Talepleri</span>
            </h4>
            <p className="pl-6">
              Gizlilik politikamız, KVKK veya veri silme talepleriniz ile ilgili her türlü soru için geliştirici e-posta adresimiz üzerinden bizimle doğrudan iletişime geçebilirsiniz:
              <br />
              <a href="mailto:gulstudiosapps@gmail.com" className="font-bold text-[#B89248] hover:underline mt-1 inline-block">
                gulstudiosapps@gmail.com
              </a>
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#78716C]">
          <span>Son Güncelleme: 4 Ağustos 2026</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl gold-button font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs"
          >
            Anladım & Kapat
          </button>
        </div>

      </div>
    </div>
  );
};
