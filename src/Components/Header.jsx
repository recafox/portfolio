import styled from "styled-components";
import { useUserData } from "Contexts/UserContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};

  .subtitle-set {
    margin-left: auto;
  }
  .subtitle h2 {
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    // flex-direction: column;

    .subtitle-set {
      margin-left: 0;
    }
  }

  @media (max-width: 568px) {
    flex-direction: column;

    .subtitle-set {
      margin-left: 0;
    }
  }
`;

const MainTitle = styled.h1`
  font-size: 170px;
  font-weight: bold;
  width: 50%;
  letter-spacing: 1.5rem;

  @media (max-width: 768px) {
    font-size: 80px;
    width: fit-content;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => (props.large ? "70px" : "50px")};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.large ? "35px" : "25px")};
  }
`;

const Header = () => {
  const nickname = useUserData().profile.nickname;
  return (
    <Wrapper data-testid="component-header" className="section">
      <MainTitle>{nickname}</MainTitle>
      <Wrapper column className="subtitle-set">
        <Title large>#浪漫派努力家</Title>
        <Wrapper className="subtitle">
          <Title>#前端工程師</Title>
          <Title>#React</Title>
        </Wrapper>
        <Wrapper className="subtitle">
          <Title>#INTJ</Title>
          <Title>#宅</Title>
          <Title>#٩(๑❛ᴗ❛๑)۶</Title>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
