import styled, { keyframes } from "styled-components";

const bounceTopDown = keyframes`
  from {
    transform: translateY(-50px);
  }

  to {
    transform: translateY(50px);
  }
`;

const bounceDownTop = keyframes`
  from {
    transform: translateY(50px);
  }

  to {
    transform: translateY(-50px);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ball-container {
    height: 200px;
    display: flex;
  }
  .ball {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin: 0 30px;

    &.first {
      background: ${(props) => props.theme.purple};
      animation: ${bounceTopDown} 0.6s ease-in alternate infinite;
    }

    &.second {
      background: ${(props) => props.theme.pink};
      animation: ${bounceDownTop} 0.6s ease-out alternate infinite;
    }

    &.third {
      background: ${(props) => props.theme.green};
      animation: ${bounceTopDown} 0.6s ease-in alternate infinite;
    }
  }
`;

const Loading = () => {
  return (
    <Wrapper data-testid="loading">
      <div className="ball-container">
        <div className="ball first"></div>
        <div className="ball second"></div>
        <div className="ball third"></div>
      </div>
      <p>初次載入要花點時間...இдஇ</p>
    </Wrapper>
  );
};

export default Loading;
