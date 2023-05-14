import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginContent = styled.div`
    width: 42rem;
    height: 60rem;
    display:flex;
    flex-direction: column;
    padding: 4rem;
    border: 1px solid lightgrey;
`;

export const TitleWrapper = styled.div`
    font-weight: 600;
    font-size: 1.8rem;
    color: #222;
    h1 {
        color: #3bcece;
        font-size: 2.3rem;
        margin-top: 3rem;
        font-weight: bold;
        font-family: '양진체';
    }
    img {
        display: block;
        margin: 9rem auto 0 auto;
        width: 14rem;
        height: 14rem;
    }
`;

export const SNSLoginWrapper = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        color: #979797;
        font-size: 1.1rem;
    }
`;

export const SNSBtnWrapper = styled.div`
    display: flex;
    margin-top: 1rem;
    padding-bottom: 2rem;
    img {
        cursor: pointer;
        display: block;
        width: 3rem;
        height: 3rem;
        &:nth-child(n+2) {
          margin-left: 1.5rem;
        }
    }
`;