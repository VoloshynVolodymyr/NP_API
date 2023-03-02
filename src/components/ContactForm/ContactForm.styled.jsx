import styled from "@emotion/styled";
import bg from "../../images/smallBg.jpg";

export const Form = styled.form`
    display: 'flex';
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.mainButtonColor};
    height: 100%;
    margin-bottom: 15px;
    border-radius: 6px;
    background-image: url('${bg}');
    background-size: cover;
    @media (max-width: 460px) {
      width: 100%;
  }
  @media (min-width: 461px) {
      width: 80%;
  }
`

export const Input = styled.input`
    text-align: center;
    height: 30px;
    font-size: 20px;
    border-color: ${props => props.theme.colors.secondBgColor};
      outline: ${props => props.theme.colors.secondBgColor};
    border-radius: ${props => props.theme.spacing(1)};
    color: ${props => props.theme.colors.titleColor};
    width: 50%;
    &:active,
    &:focus{
      box-shadow: 0 0 0 2px #caf98d inset
    }
`
export const InputWrapper = styled.div`
  display: 'flex';
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
    align-items: center;
`
export const Span = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.titleColor};
  margin: ${props => props.theme.spacing(3)};
`
export const Button = styled('button')`
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.secondBgColor};
  color: ${props => props.theme.colors.titleColor};
  border-color: ${props => props.theme.colors.mainBgColor};
  border-radius: ${props => props.theme.spacing(1)};
  margin: ${props => props.theme.spacing(3)};
  width: ${props => props.theme.spacing(45)};
  font-weight: bold;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondBgColor};
    background-color: ${props => props.theme.colors.titleColor};
    scale: 1.05;
  }
`

