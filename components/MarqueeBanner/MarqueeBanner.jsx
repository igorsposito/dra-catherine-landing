// components/MarqueeBanner/MarqueeBanner.jsx
import styles from './MarqueeBanner.module.css';

export default function MarqueeBanner() {
  const items = [
    "DRA. CATHERINE FUCHS",
    "•",
    "MÉDICA RADIOLOGISTA",
    "•",
    "SAÚDE DA MULHER",
    "•",
    "ULTRASSONOGRAFIA",
    "•",
    "MEDICINA FETAL",
    "•",
    "MAPEAMENTO DE ENDOMETRIOSE",
    "•",
  ];

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.track}>
        {/* Repetimos a lista 2x para criar o efeito contínuo e infinito */}
        <div className={styles.content}>
          {items.concat(items).map((text, idx) => (
            <span key={idx} className={text === "•" ? styles.dot : styles.itemText}>
              {text}
            </span>
          ))}
        </div>
        <div className={styles.content} aria-hidden="true">
          {items.concat(items).map((text, idx) => (
            <span key={idx} className={text === "•" ? styles.dot : styles.itemText}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}