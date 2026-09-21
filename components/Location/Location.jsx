// components/Location/Location.jsx
'use client';

import { useState } from 'react';
import styles from './Location.module.css';

export default function Location() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    exam: 'Mapeamento de Endometriose',
    notes: '',
  });

  const [openFaq, setOpenFaq] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado de sucesso do envio

  const faqData = [
    {
      question: 'Preciso de preparo especial para o Mapeamento de Endometriose?',
      answer: 'Sim, para a avaliação adequada da endometriose profunda é realizado um preparo intestinal simples com laxativo suave na véspera. Enviamos todas as orientações detalhadas pelo WhatsApp no momento do agendamento.'
    },
    {
      question: 'O exame de ultrassom com Doppler precisa de jejum?',
      answer: 'Para a maioria dos exames obstétricos e pélvicos não é necessário jejum rígido. Em casos específicos de Doppler abdominal ou renal, recomendamos jejum leve de 4 a 6 horas.'
    },
    {
      question: 'A Dra. Catherine atende por convênio médico?',
      answer: 'O atendimento é focado na modalidade particular para garantir o tempo, cuidado e rigor técnico necessários em cada laudo. Fornecemos nota fiscal e relatório completo para solicitação de reembolso junto ao seu plano de saúde.'
    },
    {
      question: 'Em quanto tempo recebo o laudo e as imagens do meu exame?',
      answer: 'Os laudos estruturados e as imagens em alta resolução são liberados no mesmo dia do exame, podendo ser acessados digitalmente ou retirados impressos no consultório.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Função para aplicar máscara automática no telefone: (64) 99999-9999
  const handlePhoneMask = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')       .replace(/(\d{5})(\d{4})$/, '$1-$2')
      .slice(0, 15);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData({ ...formData, phone: handlePhoneMask(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ativa a mensagem de sucesso na tela
    setIsSubmitted(true);

    // Constrói a mensagem para o WhatsApp
    const message = `Olá! Gostaria de agendar um exame.%0A%0A*Nome:* ${encodeURIComponent(formData.name)}%0A*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A*Exame de Interesse:* ${encodeURIComponent(formData.exam)}${formData.notes ? `%0A*Observações:* ${encodeURIComponent(formData.notes)}` : ''}`;
    
    const whatsappUrl = `https://wa.me/5564974002552?text=${message}`;

    // Dispara o WhatsApp após 1.5 segundo para o usuário ler o aviso de sucesso
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  return (
    <section id="atendimento" className={styles.locationSection}>
      <div className={styles.container}>
        
        {/* Cabeçalho */}
        <div className={styles.header}>
          <span className={styles.subtitle}>TIRA-DÚVIDAS & ATENDIMENTO</span>
          <h2 className={styles.title}>
            Ficou com alguma dúvida? <span className={styles.highlight}>Estamos prontos para ajudar.</span>
          </h2>
          <p className={styles.description}>
            Confira as principais perguntas ou envie uma mensagem direta para a nossa equipe agendar seu exame.
          </p>
        </div>

        {/* GRID SUPERIOR: FAQ (ESQUERDA) + FORMULÁRIO (DIREITA) */}
        <div className={styles.topGrid}>
          
          {/* FAQ / Perguntas Frequentes */}
          <div className={styles.faqCol}>
            <h3 className={styles.sectionBlockTitle}>Perguntas Frequentes</h3>
            
            <div className={styles.faqAccordion}>
              {faqData.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className={`${styles.faqCard} ${isOpen ? styles.faqOpen : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className={styles.faqHeader}>
                      <h4 className={styles.faqQuestion}>{item.question}</h4>
                      <span className={styles.faqToggleIcon}>{isOpen ? '−' : '+'}</span>
                    </div>
                    {isOpen && (
                      <div className={styles.faqBody}>
                        <p className={styles.faqAnswer}>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Formulário de Pré-Agendamento com Mensagem de Sucesso */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              
              {isSubmitted ? (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Mensagem Enviada!</h3>
                  <p className={styles.successText}>
                    Obrigado pelo seu contato! Em breve nossa equipe responderá você diretamente no WhatsApp. Redirecionando...
                  </p>
                </div>
              ) : (
                <>
                  <h3 className={styles.formTitle}>Fale com a nossa Equipe</h3>
                  <p className={styles.formSubtitle}>
                    Preencha seus dados e fale diretamente conosco no WhatsApp.
                  </p>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name" className={styles.label}>Seu Nome *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Ex: Dra. Maria Souza"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="phone" className={styles.label}>WhatsApp / Telefone *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="(64) 99999-9999"
                          value={formData.phone}
                          onChange={handleChange}
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label htmlFor="exam" className={styles.label}>Exame de Interesse *</label>
                        <select
                          id="exam"
                          name="exam"
                          value={formData.exam}
                          onChange={handleChange}
                          className={styles.select}
                        >
                          <option value="Mapeamento de Endometriose">Mapeamento de Endometriose</option>
                          <option value="Ultrassonografia Obstétrica & Doppler">Obstétrica & Doppler</option>
                          <option value="Rastreamento de Pré-Eclâmpsia">Pré-Eclâmpsia</option>
                          <option value="Fertilidade, Cistos & SOP">Fertilidade & SOP</option>
                          <option value="Outra Ultrassonografia">Outros Exames</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="notes" className={styles.label}>Sua Mensagem (Opcional)</label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows="3"
                        placeholder="Conte brevemente como podemos te ajudar ou informe sua preferência de dia/horário..."
                        value={formData.notes}
                        onChange={handleChange}
                        className={styles.textarea}
                      ></textarea>
                    </div>

                    <button type="submit" className={styles.submitCtaBtn}>
                      <span>Enviar Mensagem no WhatsApp →</span>
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>

        </div>

        {/* FAIXA INFERIOR: MAPA & ENDEREÇO */}
        <div className={styles.mapBannerCard}>
          <div className={styles.mapBannerInfo}>
            <div className={styles.mapIconCircle}>📍</div>
            <div>
              <h4 className={styles.mapBannerTitle}>Atendimento na Clínica em Rio Verde</h4>
              <p className={styles.mapBannerAddress}>
                Rua Nizo Jaime de Gusmão, 369 – Vila Amália<br />
                Rio Verde – GO, CEP 75996-145 • CRM 28850 | RQE 15373<br />
                <span className={styles.mapHours}>Segunda a Sexta: 08h às 18h</span>
              </p>
            </div>
          </div>

          <div className={styles.mapBannerIframeWrapper}>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Rua+Nizo+Jaime+de+Gusm%C3%A3o,+369+-+Vila+Am%C3%A1lia,+Rio+Verde+-+GO,+75996-145" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.mapsExternalBtn}
            >
              Abrir no Maps ↗
            </a>
            <iframe
              title="Localização do Consultório"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.514732123456!2d-50.928456!3d-17.791234!2m3!1f0!0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ3JzI4LjQiUyA1MMKwNTUnNDIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}