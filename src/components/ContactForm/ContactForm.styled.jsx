import styled from "@emotion/styled";

export const Form = styled.form`
    display: 'flex';
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.mainButtonColor};
    /* width: 90%; */
    height: 250px;
    padding: 40px;
    @media (max-width: 460px) {
      width: 320px;
  }
  @media (min-width: 768px) {
      width: 80%;
  }
`

export const Input = styled.input`
    /* min-width: 100%; */
    height: 30px;
    font-size: 24px;
    color: ${props => props.theme.colors.titleColor};
`
export const InputWrapper = styled.div`
  display: 'flex';
    flex-direction: column;
    justify-content:space-between;
    width: 400px;
    align-items: center;
    margin: 10px;
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

