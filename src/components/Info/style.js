import styled from 'styled-components';

export const InfoDiv = styled.div`
  width: 100%;
  height: 196px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    width: 53.7rem;
    height: 20rem;
    justify-content: end;
    margin-left: 3.4rem;
  }
`;

export const InfoData = styled.div`
  width: 100%;
  height: 160px;

  background: #1d2c67;
  border-radius: 10px;
  margin-top: 1.7rem;
  padding-top: 3.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: normal;
    font-size: 14.5px;
    line-height: 17px;
    color: #ffffff;
    text-align: center;
    margin-left: 0.2rem;
    margin-bottom: 1.8rem;

    span {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
    }
  }

  @media (min-width: 1200px) {
    width: 53.7rem;
    height: 15.3rem;
    padding-top: 3.8rem;
    align-items: flex-start;
    padding-left: 3.7rem;

    h1 {
      text-align: start;
      margin: 0.1rem 0 1.7rem 0rem;
    }
  }
`;

export const DivContent = styled.div`
  width: 69.6vw;
  height: 18px;
  padding: 0.2rem;
  background: #141f4c;
  border-radius: 10px;

  div {
    width: 51.733vw;
    height: 14px;

    background: linear-gradient(
      90deg,
      rgba(255, 163, 153, 0.8) 1.56%,
      rgba(255, 163, 153, 0.79) 1.57%,
      #ffa399 7.29%,
      #ff8698 39.58%,
      #ff4d97 100%
    );
    border-radius: 10px;
    padding: 0.2rem 0.3rem;
    display: flex;
    flex-direction: row-reverse;
    div {
      width: 10px;
      height: 10px;

      background: #ffffff;
      border-radius: 5px;
    }
  }
  @media (min-width: 1200px) {
    width: 45.9rem;
    padding: 0.2rem 0.4rem;
    margin-left: 0.1rem;
    div {
      width: 34rem;
    }
  }
`;

export const DivInfo = styled.div`
  width: 69.6vw;
  margin-top: 1.1rem;
  display: flex;
  justify-content: space-between;
  h2 {
    color: #fff;
    font-family: Raleway;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
  }

  @media (min-width: 1200px) {
    width: 45.9rem;
    margin-top: 0.9rem;
    :nth-child(2) {
      margin-left: 0.2rem;
    }
  }
`;

export const GbLeft = styled.div`
  width: 179px;
  height: 72px;
  background: #ffffff;
  border-radius: 10px;
  position: absolute;
  margin-top: 14.1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 39px;
    line-height: 46px;
    margin-left: 0.1rem;

    color: #000000;
  }
  span {
    font-weight: bold;
    font-size: 13.8px;
    line-height: 16px;

    color: #848794;
    margin-left: 1rem;
    margin-top: 0.2rem;
  }
  @media (min-width: 1200px) {
    width: 18rem;
    height: 9.5rem;
    border-radius: 1rem 1rem 0 1rem;
    margin-bottom: 10.5rem;
    margin-left: 28rem;
    /* clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      100% 74%,
      100% 100%,
      85% 73%,
      0% 75%
    ); */
    clip-path: polygon(
      0 0,
      100% 0%,
      100% 100%,
      87% 76%,
      5.5% 76%,
      4% 74%,
      3% 74%,
      1% 76%,
      3% 74%,
      2% 70%,
      1% 68%,
      0.5% 66%,
      0% 64%
    );
    padding-bottom: 2.6rem;
  }
`;
