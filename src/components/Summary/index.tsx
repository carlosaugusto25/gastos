import { Container } from "./styles";
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <BsArrowUpCircle className="icon-up" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <BsArrowDownCircle className="icon-down" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
            <div className="total-card">
                <header>
                    <p>Total</p>
                    <FiDollarSign className="money" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}