import { Container, Content } from './styles';
import logo from '../../assets/cifrao.png';

interface ModalProps {
    openModalNewTransaction: (val: boolean) => void;
}

export function Header({openModalNewTransaction}: ModalProps) {
    
    return (
        <Container>
            <Content>
                <div className='logo-and-name'>
                    <img src={logo} alt="logo" />
                    <p>Gastos</p>
                </div>
                <button onClick={()=>openModalNewTransaction(true)}>Nova transação</button>

                
            </Content>
        </Container>
    )
}