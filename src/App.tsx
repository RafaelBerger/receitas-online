import styles from "./app.module.scss";
import FiltroInput from "./components/filtro-receita/FiltroInput";
import Card from "./components/card/Card";

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
          titulo="Feijoada"
          tipoComida="Salgado"
          numeroIngredientes={13}
          imagem="https://avatars.githubusercontent.com/u/84355579?v=4"
        />
      </div>
    </>
  );
}

export default App;
