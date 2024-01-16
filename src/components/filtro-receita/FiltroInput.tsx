import { useState } from "react";
import styles from "./filtroInput.module.scss";

function FiltroInput() {
  const [escolha, setEscolha] = useState("Todos");

  function handleEscolha(opcao: string) {
    setEscolha(opcao);
  }

  return (
    <>
      <section className={styles.filtroSection}>
        <div className="">
          <button
            className={escolha == "Todos" ? `${styles.selected}` : ""}
            onClick={() => handleEscolha("Todos")}
          >
            Todos
          </button>
          <button
            className={escolha == "Salgado" ? `${styles.selected}` : ""}
            onClick={() => handleEscolha("Salgado")}
          >
            Salgado
          </button>
          <button
            className={escolha == "Doce" ? `${styles.selected}` : ""}
            onClick={() => handleEscolha("Doce")}
          >
            Doce
          </button>
          <button
            className={escolha == "Agridoce" ? `${styles.selected}` : ""}
            onClick={() => handleEscolha("Agridoce")}
          >
            Agridoce
          </button>
        </div>
      </section>
    </>
  );
}

export default FiltroInput;
