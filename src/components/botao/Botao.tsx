import styles from "./botao.module.scss";

interface Botao {
  texto: string;
}

function Botao(props: Botao) {
  return <button className={styles.botao}>{props.texto}</button>;
}

export default Botao;
