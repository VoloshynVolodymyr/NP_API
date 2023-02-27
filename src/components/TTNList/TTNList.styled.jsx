import styled from "@emotion/styled";

export const Input = styled.input`
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
    padding: 7px;
    border: none;
    width: 640px;
    cursor: pointer;
    font-size: 32px;
    color: ${props => props.theme.colors.mainBgColor};
`