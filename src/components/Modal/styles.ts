
import styled from "styled-components";
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  width: 350px;
  max-width: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border-radius: 5px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #ff6b6c;
  cursor: pointer;
  hover: {
    background-color: #ffff;
  }
`;
export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  hover: {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 2.5);
  }
`;
export const Title = styled.h2`
  font-size: 1.5rem;
`;
export const Description = styled.h2`
  font-size: 1rem;
`;