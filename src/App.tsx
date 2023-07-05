import { DashBoard } from "./components/DashBoard";
import { Header } from "./components/Header";
import GlobalStyles from "./styles/global"

export function App() {
  return (
    <>
      <GlobalStyles />
      
      <Header />
      <DashBoard />

    </>
  );
}
