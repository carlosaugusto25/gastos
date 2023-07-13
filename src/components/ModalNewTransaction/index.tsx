import Modal from 'react-modal';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: (val:boolean) => void;
}

export function ModalNewTransaction({ isOpen, onRequestClose }:ModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => onRequestClose(false)}
        >
            <h2>Cadastrar transação</h2>
        </Modal>
    )
}