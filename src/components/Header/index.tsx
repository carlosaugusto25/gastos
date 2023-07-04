import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { Container } from './styles';

export function Header(){
    return(
        <Container>
            <div className='logo-and-name'>
                <RiMoneyDollarBoxFill />
                <p>Gastos</p>
            </div>
            <button>Nova transação</button>
        </Container>
    )
}