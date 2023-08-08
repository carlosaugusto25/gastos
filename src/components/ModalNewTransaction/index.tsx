import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import { IoClose } from 'react-icons/io5';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: (val: boolean) => void;
}

export function ModalNewTransaction({ isOpen, onRequestClose }: ModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => onRequestClose(false)}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >

            <IoClose className='react-close-button' onClick={()=>onRequestClose(false)} />

            <Container>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder='Título' />

                <input type="number" placeholder='Valor' />

                <TransactionTypeContainer>
                    <button><span>Entrada</span><BsArrowUpCircle className='up-arrow' /></button>
                    <button><span>Saída</span><BsArrowDownCircle className='down-arrow' /></button>
                </TransactionTypeContainer>

                <input type='text' placeholder="Categoria" />

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}