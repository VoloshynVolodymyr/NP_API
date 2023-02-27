import styled from "@emotion/styled";

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.secondBgColor};
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 15px;
    /* width: 640px; */
    /* height: 250px; */
    @media (max-width: 460px) {
      width: 100%;
  }
  @media (min-width: 461px) {
      width: 80%;
  }
`

export const Span = styled.span`
    @media (max-width: 660px) {
      font-size: 14px;
  }
  @media (min-width: 800px) {
    font-size: 20px;
  }
`

export const Visibility = styled.div`
    @media (max-width: 460px) {
      display: none;
  }

`

