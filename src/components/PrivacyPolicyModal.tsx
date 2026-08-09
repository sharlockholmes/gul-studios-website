import { CheckCircle2, EyeOff, FileText, Lock, Mail, ShieldCheck, X } from 'lucide-react';
import { Modal } from './Modal';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Gizlilik Politikası" className="max-w-3xl editorial-modal privacy-modal">
    <button type="button" onClick={onClose} aria-label="Gizlilik politikasını kapat" className="modal-close"><X aria-hidden="true" /></button>
    <div className="modal-heading">
      <span><ShieldCheck aria-hidden="true" /></span>
      <div><h3>Gizlilik Politikası</h3><p>GÜL STUDIOS web sitesi</p></div>
    </div>

    <div className="privacy-modal__content">
      <div className="modal-notice"><Lock aria-hidden="true" /><p><strong>Özet:</strong> Bu web sitesi şu anda iletişim veya kapalı test formlarından kişisel veri toplamaz, saklamaz ya da üçüncü taraflarla paylaşmaz.</p></div>
      <section><h4><CheckCircle2 aria-hidden="true" />1. Formlar ve iletişim</h4><p>Web sitesindeki iletişim ve test talep alanları gönderim altyapısına bağlı değildir. Bu nedenle yazılan bilgiler işlenmez veya iletilmez. İletişim kurmak için e-posta bağlantısını kullanabilirsiniz.</p></section>
      <section><h4><EyeOff aria-hidden="true" />2. İzleme ve üçüncü taraflar</h4><p>Bu sürümde analiz, reklam veya izleme çerezi kullanılmaz. Yazı tipleri optimize edilmiş Google Fonts bağlantısı üzerinden yüklenir; bu istekler Google’ın kendi gizlilik politikasına tabidir.</p></section>
      <section><h4><FileText aria-hidden="true" />3. HIFZ uygulama bilgileri</h4><p>HIFZ'ın mevcut sürümünde çalışma geçmişi ve uygulama ayarları cihaz üzerinde tutulur. Bulut eşitleme özelliği bulunmaz. Uygulamaya özgü güncel gizlilik ayrıntıları yayın süreciyle birlikte ayrıca sunulacaktır.</p></section>
      <section><h4><Mail aria-hidden="true" />4. İletişim</h4><p>Gizlilik veya veri talepleri için <a href="mailto:gulstudiosapps@gmail.com">gulstudiosapps@gmail.com</a> adresine yazabilirsiniz.</p></section>
    </div>

    <div className="privacy-modal__footer"><span>Son güncelleme: 8 Ağustos 2026</span><button type="button" onClick={onClose} className="editorial-button editorial-button--primary">Anladım & Kapat</button></div>
  </Modal>
);
