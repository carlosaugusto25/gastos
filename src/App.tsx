import { DashBoard } from "./components/DashBoard";
import { Header } from "./components/Header";
import GlobalStyles from "./styles/global"
import { useState } from "react";
import { ModalNewTransaction } from "./components/ModalNewTransaction";


export function App() {
  
  const [modalNewTransaction, setModalNewTransaction] = useState(false);

  return (
    <>
      <GlobalStyles />

      <Header openModalNewTransaction={setModalNewTransaction} />
      <DashBoard />

      <ModalNewTransaction isOpen={modalNewTransaction} onRequestClose={setModalNewTransaction} />

    </>
  );
}
