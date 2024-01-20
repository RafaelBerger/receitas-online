import styles from "./receitasInfo.module.scss";
import img from "../assets/fotoReceita.jpg";

function ReceitaInfo() {
  return (
    <>
      <header className={styles.background}>
        <img src={img} alt="" />
        <h1>Costela de Porco</h1>
      </header>
      <main className={styles.principalSection}>
        <div className={styles.conteudoSection}>
          <div>
            <p>
              <b>Ingredientes: </b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              voluptatibus, ipsum sed quia pariatur voluptates excepturi
              sapiente iure dolorum quisquam eius molestiae id debitis!
            </p>
            <p>
              <b>Modo de Preparo: </b>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              dolor temporibus minima earum aspernatur qui ex dolorum, eaque
              quod dolore porro magnam inventore aliquid ullam optio, delectus
              laboriosam. Dicta laudantium deserunt maiores accusamus quis
              veniam dolorem deleniti, quasi esse adipisci! At repudiandae
              impedit, cupiditate consequatur consectetur animi amet qui.
              Aliquid?
            </p>
            <p>
              <b>Tipo: </b>
              Lorem
            </p>
          </div>
          <img src={img} alt="" />
        </div>
      </main>
    </>
  );
}

export default ReceitaInfo;
