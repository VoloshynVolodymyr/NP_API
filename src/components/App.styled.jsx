import styled from "@emotion/styled";
import bg from '../images/1.webp';

export const CommonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.containerColor};
    background-image: url('${bg}');
    background-size: cover;
    `



    