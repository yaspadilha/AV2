import './components.css'

interface IModal {
    isOpen: boolean;
    children?: React.ReactNode;
    onConfirm?: () => void; 
}

interface ModalProps {
    titulo: string;
    legendaBotao: string;
}

function Modal({ isOpen, titulo, legendaBotao, children, onConfirm }: IModal & ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <h1 className='modal-titulo'>{titulo}</h1>
            {children}
            <button
                onClick={onConfirm}
                className='modal-button'
            >
                {legendaBotao}
            </button>
        </div>
    );
}

export default Modal;