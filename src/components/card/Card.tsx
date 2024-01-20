import styles from "../card/card.module.scss";
import { BowlFood, Users } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface Card {
  titulo: string;
  tipoComida: string;
  numeroIngredientes: number;
  imagem: string;
}

export default function Card(props: Card) {
  return (
    <>
      <Link to="/receitas-info" className={styles.cardSection}>
        <div className={styles.card}>
          <div>
            <img src={props.imagem} alt="Imagem de uma receita" />
          </div>
          <div className={styles.texto}>
            <h2>{props.titulo}</h2>
            <div>
              <BowlFood size={25} color="#666666" weight="regular" />
              <p>{props.tipoComida}</p>
            </div>
            <div>
              <Users size={25} color="#666666" weight="regular" />
              <p>
                <b>{props.numeroIngredientes}</b> ingredientes
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
