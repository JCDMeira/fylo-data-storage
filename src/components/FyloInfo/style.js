import styled from 'styled-components';

export const FyloDiv = styled.div`
  width: 100%;
  height: 20rem;
  background: #1d2c67;
  border-radius: 10px 100px 10px 10px;
  padding: 3.9rem 0 0 4rem;

  img {
    margin-left: 0.3rem;
    margin-bottom: 3.1rem;
  }
`;

export const iconContent = styled.div`
  /* width: 17.8rem; */
  height: 4.8rem;
  display: flex;
  margin-left: 0.1rem;
`;

export const iconDiv = styled.div`
  width: 4.9rem;
  height: 4.8rem;
  margin-right: 1.5rem;
  background: #0c122c;
  border-radius: 10px;
  img {
    margin-left: calc(50% - ${(props) => `${props.space[0]}px`});
    margin-top: calc(50% - ${(props) => `${props.space[1]}px`});
  }
`;
