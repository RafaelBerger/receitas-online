import styles from "../card/card.module.scss";
import { BowlFood, Users } from "@phosphor-icons/react";
import img from "../../assets/fotoReceita.jpg";

export default function Card() {
  return (
    <>
      <div className={styles.cardSection}>
        <div className={styles.card}>
          <div>
            <img src={img} alt="Imagem de uma receita" />
          </div>
          <div className={styles.texto}>
            <h2>Costela de porco e salada de alfaçe</h2>
            <div>
              <BowlFood size={25} color="#666666" weight="regular" />
              <p>salgado</p>
            </div>
            <div>
              <Users size={25} color="#666666" weight="regular" />
              <p>
                <b>20</b> ingredientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
