import { GrClose } from "react-icons/gr";
import * as S from './styles';

interface ModalProps {
  isOpen?: boolean;
  setModalOpen?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setModalOpen }) => {
  if (isOpen) {
    return (
      <S.ModalContainer >
        <S.ModalContent>
          <S.CloseIcon>
            <GrClose onClick={setModalOpen} />
          </S.CloseIcon>
          <S.Title>Cancelar</S.Title>
          <S.Description>Você realmente deseja cancelar o atendimento?</S.Description>
          <S.Button onClick={() => console.log('cancelou')}>Cancelar</S.Button>
        </S.ModalContent>
      </S.ModalContainer >
    )
  }
  return null
}
export default Modal