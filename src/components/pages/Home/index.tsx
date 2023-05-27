import { useState } from 'react'
import Modal from '../../Modal'
import * as S from './styles'

function Home() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <S.HomeContainer>
        <S.Title>Home</S.Title>
        <S.Button onClick={() => setOpenModal(true)}>Abrir Modal</S.Button>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
      </S.HomeContainer>
    </div >
  )
}

export default Home