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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
