// components/Services/Services.jsx
'use client';

import styles from './Services.module.css';

export default function Services() {
  const servicesData = [
    {
      id: 1,
      badge: 'SAÚDE FEMININA',
      title: 'Mapeamento de Endometriose',
      description: 'Exame de ultrassonografia minucioso para mapear focos de endometriose profunda, aderências e mapeamento de dores pélvicas.',
      image: '/images/services/endometriose.png',
      whatsappText: 'Olá! Gostaria de mais informações sobre o Mapeamento de Endometriose.'
    },
    {
      id: 2,
      badge: 'GESTAÇÃO & FETO',
      title: 'Ultrassonografia Obstétrica & Doppler',
      description: 'Acompanhamento detalhado da saúde fetal, avaliação do fluxo sanguíneo da placenta e bebê, e ultrassom 3D/4D.',
      image: '/images/services/obstetrica.webp',
      whatsappText: 'Olá! Gostaria de agendar uma Ultrassonografia Obstétrica.'
    },
    {
      id: 3,
      badge: 'PREVENÇÃO',
      title: 'Rastreamento de Pré-Eclâmpsia',
      description: 'Avaliação preventiva do risco de hipertensão gestacional, garantindo a segurança da mãe e do bebê ao longo da gravidez.',
      image: '/images/services/pre-eclampsia.jpg',
      whatsappText: 'Olá! Gostaria de informações sobre o Rastreamento de Pré-Eclâmpsia.'
    },
    {
      id: 4,
      badge: 'SAÚDE REPRODUTIVA',
      title: 'Fertilidade, Cistos & SOP',
      description: 'Investigação de causas de infertilidade, rastreamento de cistos ovarianos, síndrome dos ovários policísticos e controle de ovulação.',
      image: '/images/services/fertilidade.jpg',
      whatsappText: 'Olá! Gostaria de agendar uma avaliação para acompanhamento de fertilidade/SOP.'
    }
  ];

  return (
    <section id="especialidades" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionSubtitle}>ESPECIALIDADES MÉDICAS</span>
          <h2 className={styles.sectionTitle}>Diagnóstico por Imagem Avançado</h2>
          <p className={styles.sectionDescription}>
            Exames executados com o rigor técnico de uma especialista dedicada ao ensino e à precisão diagnóstica.
          </p>
        </div>

        <div className={styles.grid}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.badge}>{service.badge}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                
                <a 
                  href={`https://wa.me/5564974002552?text=${encodeURIComponent(service.whatsappText)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  Saber mais sobre este exame →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}