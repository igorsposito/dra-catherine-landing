// components/Hero/Hero.jsx
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Textura / Fundo sutil */}
      <div className={styles.bgImage}></div>
      
      <div className={styles.container}>
        {/* Coluna de Conteúdo / Texto */}
        <div className={styles.content}>
          <span className={styles.subheadline}>DRA. CATHERINE FUCHS | RADIOLOGIA</span>
          
          <h1 className={styles.title}>
            Laudos precisos que fazem a diferença na <span className={styles.highlight}>sua conduta médica.</span>
          </h1>
          
          <p className={styles.description}>
            Especialista em ultrassonografia para a Saúde da Mulher, Medicina Fetal e Mapeamento de Endometriose.
          </p>
          
          <div className={styles.actions}>
            <a 
              href="https://wa.me/5564974002552?text=Olá,%20gostaria%20de%20agendar%20um%20exame%20com%20a%20Dra.%20Catherine." 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Agendar exame com a Dra. Catherine →
            </a>
          </div>

          <div className={styles.trustFooter}>
            <span className={styles.countText}>CRM 28850 | RQE 15373 • Rio Verde / GO</span>
          </div>
        </div>

        {/* Coluna da Foto com os Elementos Flutuantes */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            
            {/* SELO CIRCULAR POR TRÁS DA FOTO */}
            <div className={styles.circleBadge}>
              <svg viewBox="0 0 100 100" className={styles.circleTextSvg}>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className={styles.circleText}>
                  <textPath href="#circlePath" startOffset="0%">
                    DRA. CATHERINE FUCHS • ULTRASSONOGRAFIA •
                  </textPath>
                </text>
              </svg>
              {/* Ícone no Centro */}
              <div className={styles.circleIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--primary-plum)"/>
                </svg>
              </div>
            </div>

            {/* BALÃO VIDRO FOSCO: Braço Direito */}
            <div className={`${styles.badge} ${styles.badgeRight}`}>
              <span>• Medicina Fetal & Morfológico</span>
            </div>

            {/* BALÃO VIDRO FOSCO: Base */}
            <div className={`${styles.badge} ${styles.badgeBottom}`}>
              <span>• Ultrassonografia Especializada</span>
            </div>

            {/* Foto da Dra. Catherine (z-index superior ao selo circular) */}
            <img 
              src="/images/dra-catherine-hero-cut.png" 
              alt="Dra. Catherine Fuchs - Radiologista" 
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}