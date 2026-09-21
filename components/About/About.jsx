import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <img src="/images/dra-catherine-sobre.jpg" alt="Dra. Catherine Fuchs em atendimento" />
          </div>
        </div>

        <div className={styles.textCol}>
          <span className={styles.subtitle}>Trajetória & Compromisso</span>
          <h2 className={styles.title}>Dra. Catherine Fuchs</h2>
          <p className={styles.crm}>CRM 28850 | RQE 15373</p>

          <p className={styles.paragraph}>
            Médica especialista em Radiologia e Diagnóstico por Imagem com foco de atuação na <strong>Saúde da Mulher, Mapeamento de Endometriose e Medicina Fetal</strong>.
          </p>
          <p className={styles.paragraph}>
            Acredito que por trás de cada laudo existe uma história, um sonho ou uma dúvida que exige não apenas tecnologia de ponta, mas um olhar atento, ético e empático. 
          </p>
          <p className={styles.paragraph}>
            Além da prática clínica, atuo como professora de pós-graduação médica (<strong>@vmed.pos</strong>), ajudando a capacitar outros profissionais na área da ultrassonografia.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Anos de dedicação médica</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Profª</span>
              <span className={styles.statLabel}>Docente em Pós-Graduação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}