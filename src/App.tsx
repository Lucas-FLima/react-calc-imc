import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import leftArrowImage from "./assets/leftArrow.png";
import { levels, calculateImc, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem/GridItem";

function App() {
  const [HeightField, setHeightField] = useState<number>(0);
  const [WeightField, setWeightField] = useState<number>(0);
  const [ToShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (HeightField && WeightField) {
      setToShow(calculateImc(HeightField, WeightField));
    } else {
      alert("Por favor, preencha todos campos.");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={HeightField > 0 ? HeightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            disabled={ToShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite a seu peso. Ex: 65.4 (em kilogramas)"
            value={WeightField > 0 ? WeightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={ToShow ? true : false}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!ToShow && (
            <div className={styles.grid}>
              {levels.map((item, index) => (
                <GridItem key={index} item={item} />
              ))}
            </div>
          )}
          {ToShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width="25" />
              </div>
              <GridItem item={ToShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
