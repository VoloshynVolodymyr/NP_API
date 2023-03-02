import styled from "@emotion/styled";
import btnImage from '../../images/button.png'

export const ListWrapper = styled.li`
  display: flex;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 460px) {
      width: 100%;
  }
  @media (min-width: 461px) {
      width: 80%;
  }
`

export const Input = styled.input`
    cursor: pointer;
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
    margin: 2px;
    border: none;
    font-size: 32px;
    width: 95%;
    height: 40px;
    color: ${props => props.theme.colors.mainBgColor};
`

export const Button = styled.button`
  cursor: pointer;
  margin-left: -42px;
  background-image: url('${btnImage}');
  width: 40px;
  height: 40px;
  background-size: cover;
  border: none;
  &:hover {
    scale: 1.1;
   }
`

