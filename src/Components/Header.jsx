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
`;

const MainTitle = styled.h1`
  font-size: 170px;
  font-weight: bold;
  width: 50%;
  letter-spacing: 1.5rem;
`;

const Title = styled.h2`
  font-size: ${(props) => (props.large ? "70px" : "50px")};
  font-weight: 500;
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
          <Title>#高齡少女</Title>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
