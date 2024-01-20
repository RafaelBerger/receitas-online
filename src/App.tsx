import styles from "./app.module.scss";
import FiltroInput from "./components/filtro-receita/FiltroInput";
import Card from "./components/card/Card";
import Botao from "./components/botao/Botao";

function App() {
  return (
    <>
      <header className={styles.headerBackground}>
        <div className={styles.header}>
          <h1>Explorar Receitas</h1>
          <input type="search" placeholder="Buscar receitas" name="" id="" />
        </div>
      </header>

      <FiltroInput />

      <div className={styles.cardGrid}>
        <Card
          titulo="Costelinha de porco"
          tipoComida="Salgado"
          numeroIngredientes={5}
          imagem="https://avatars.githubusercontent.com/u/84355579?v=4"
        />
        <Card
          titulo="Bolo de Chocolate"
          tipoComida="Doce"
          numeroIngredientes={9}
          imagem="https://avatars.githubusercontent.com/u/84355579?v=4"
        />
        <Card
          titulo="Sunomono"
          tipoComida="Agridoce"
          numeroIngredientes={4}
          imagem="https://avatars.githubusercontent.com/u/84355579?v=4"
        />
      </div>

      <div className={styles.botaoSection}>
        <Botao texto="Ver mais" />
      </div>
    </>
  );
}

export default App;
