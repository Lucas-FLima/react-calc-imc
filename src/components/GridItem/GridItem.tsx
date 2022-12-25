import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

interface GridProps {
  item: Level;
}

export function GridItem({ item }: GridProps) {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        {/* {item.icon === "up" && <img src={upImage} width="30" />}
        {item.icon === "down" && <img src={downImage} width="30" />}  ou da forma de baixo*/}
        <img
          src={item.icon === "up" ? upImage : downImage}
          alt="Up or Down"
          width="30"
        />
      </div>
      <div className={styles.gridTitle}>
        {item.title}
      </div>
      {item.yourImc && (
        <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
      )}
      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>.
        </>
      </div>
    </div>
  );
}
