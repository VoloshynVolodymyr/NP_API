import styled from "@emotion/styled";

export const Input = styled.input`
    cursor: pointer;
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
    /* padding: 7px; */
    margin: 2px;
    border: none;
    width: 640px;
    font-size: 32px;
    color: ${props => props.theme.colors.mainBgColor};
    @media (max-width: 460px) {
      width: 100%;
  }
  @media (min-width: 461px) {
      width: 80%;
  }
`