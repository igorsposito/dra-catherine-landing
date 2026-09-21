// components/Footer/Footer.jsx
'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          
          {/* Coluna 1: Marca & Redes */}
          <div className={styles.colBrand}>
            <div className={styles.brandTitle}>
              <h3>Dra. Catherine Fuchs</h3>
              <span className={styles.brandSubtitle}>RADIOLOGIA & DIAGNÓSTICO POR IMAGEM</span>
            </div>
            
            <p className={styles.brandDesc}>
              Especialista em ultrassonografia para a Saúde da Mulher, Medicina Fetal e Mapeamento de Endometriose.
            </p>

            <a 
              href="https://instagram.com/dracatherineradiologia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.instaPill}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@dracatherinefuchs</span>
            </a>
          </div>

          {/* Coluna 2: Contato & Localização */}
          <div className={styles.colInfo}>
            <h4 className={styles.colTitle}>Contato & Localização</h4>
            
            <ul className={styles.infoList}>
              <li>
                <span className={styles.icon}>📞</span>
                <a href="https://wa.me/5564974002552" target="_blank" rel="noopener noreferrer">
                  (64) 97400-2552
                </a>
              </li>
              <li>
                <span className={styles.icon}>📍</span>
                <span>
                  Rua Nizo Jaime de Gusmão, 369<br />
                  Vila Amália, Rio Verde – GO
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Horários */}
          <div className={styles.colInfo}>
            <h4 className={styles.colTitle}>Horários</h4>
            
            <ul className={styles.infoList}>
              <li>
                <span className={styles.icon}>🕒</span>
                <span>Seg – Sex: 08:00 – 18:00</span>
              </li>
              <li>
                <span className={styles.icon}>📅</span>
                <span>Sábado: Agendamentos prévios</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Rodapé Inferior: Copyright + Logo Ágave Lab */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContainer}>
            <p className={styles.copyright}>
              © 2026 Dra. Catherine Fuchs. Todos os direitos reservados. CRM 28850 | RQE 15373.
            </p>
            
            <div className={styles.devBy}>
              <span>Desenvolvido por:</span>
              <a 
                href="https://www.agavelab.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.agaveLink}
                title="Ágave Lab - Design & Desenvolvimento Web"
              >
                <img 
                  src="/images/logo-agave.png" 
                  alt="Ágave Lab" 
                  className={styles.agaveLogoImg}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'inline';
                    }
                  }}
                />
                <span className={styles.agaveFallbackText} style={{ display: 'none' }}>
                  ágave<span>&lt;lab&gt;</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a 
        href="https://wa.me/5564974002552?text=Olá,%20vi%20o%20site%20da%20Dra.%20Catherine%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20exames." 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.whatsappFloat}
        aria-label="Atendimento via WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </>
  );
}