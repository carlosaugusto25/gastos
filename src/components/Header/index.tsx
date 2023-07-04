import { Container, Content } from './styles';
import logo from '../../assets/cifrao.png';

export function Header() {
    return (
        <Container>
            <Content>
                <div className='logo-and-name'>
                    {/* <RiMoneyDollarBoxFill className='icon' /> */}
                    <img src={logo} alt="logo" />
                    <p>Gastos</p>
                </div>
                <button>Nova transação</button>
            </Content>
        </Container>
    )
}