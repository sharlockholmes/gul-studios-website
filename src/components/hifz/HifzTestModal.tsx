import { Download, Mail } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Modal } from '../Modal';

interface HifzTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HifzTestModal({ isOpen, onClose }: HifzTestModalProps) {
  const [form, setForm] = useState({ name: '', email: '', note: '' });
  const mailtoHref = useMemo(() => {
    const body = [
      `Ad Soyad: ${form.name}`,
      `Google Play e-posta adresi: ${form.email}`,
      form.note ? `Not: ${form.note}` : '',
    ].filter(Boolean).join('\n');
    return `mailto:gulstudiosapps@gmail.com?subject=${encodeURIComponent('HIFZ Kapalı Test Talebi')}&body=${encodeURIComponent(body)}`;
  }, [form]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="HIFZ kapalı test katılım talebi" className="max-w-lg editorial-modal">
      <button type="button" onClick={onClose} aria-label="Test talep penceresini kapat" className="modal-close">×</button>
      <div className="modal-heading">
        <span><Download aria-hidden="true" /></span>
        <div><h3>Kapalı teste katılım</h3><p>HIFZ Google Play test grubu</p></div>
      </div>
      <p className="modal-notice">Bu alan bir sunucuya veri göndermez. Bilgileri doldurduktan sonra e-posta uygulamanızda hazırlanan mesajı kendiniz gönderebilirsiniz.</p>
      <form className="editorial-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="hifz-test-name">Adınız Soyadınız</label>
        <input id="hifz-test-name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Ad Soyad" />
        <label htmlFor="hifz-test-email">Google Play e-posta adresiniz</label>
        <input id="hifz-test-email" type="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="ornek@gmail.com" />
        <label htmlFor="hifz-test-note">Not <small>(isteğe bağlı)</small></label>
        <textarea id="hifz-test-note" rows={3} value={form.note} onChange={(event) => setForm({ ...form, note: event.target.value })} placeholder="Hafızlık öğrenci durumu, kurum bilgisi vb." />
        <a className="editorial-button editorial-button--primary w-full" href={mailtoHref}><Mail aria-hidden="true" /> E-posta mesajını hazırla</a>
      </form>
    </Modal>
  );
}
