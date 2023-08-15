import Modal from 'react-modal';
import { ButtonComponent, Container, TransactionTypeContainer } from './styles';
import { IoClose } from 'react-icons/io5';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { FormEvent, useState } from 'react';
import { api } from '../../service/api';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: (val: boolean) => void;
}

export function ModalNewTransaction({ isOpen, onRequestClose }: ModalProps) {
    
    const [type, setType] = useState('deposit');

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function handleSubmitForm(e: FormEvent) {
        e.preventDefault()

        const data = {
            title,
            value,
            category,
            type
        }

        api.post('/transactions', data) 
    }
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => onRequestClose(false)}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >

            <IoClose className='react-close-button' onClick={()=>onRequestClose(false)} />

            <Container onSubmit={handleSubmitForm}>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder='Título' value={title} onChange={e=>setTitle(e.target.value)} />

                <input type="number" placeholder='Valor' value={value} onChange={e=>setValue(Number(e.target.value))} />

                <TransactionTypeContainer >
                    <ButtonComponent activeColor='green' type='button' onClick={()=>setType('deposit')} isActive={type === 'deposit'}><span>Entrada</span><BsArrowUpCircle className='up-arrow' /></ButtonComponent>
                    <ButtonComponent activeColor='red' type='button' onClick={()=>setType('withdraw')} isActive={type === 'withdraw'}><span>Saída</span><BsArrowDownCircle className='down-arrow' /></ButtonComponent>
                </TransactionTypeContainer>

                <input type='text' placeholder="Categoria" value={category} onChange={e=>setCategory(e.target.value)} />

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}