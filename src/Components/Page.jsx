import styled from "styled-components";
import Header from "./Header";
import Contact from "./Contact";
import TechStack from "./TechStack";
import Demo from "./Demo";
import Exp from "./Exp";
import Introduction from "./Introduction";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 20px;
`;

const Page = (prop) => {
  return (
    <Wrapper data-testid="page-component">
      <Header></Header>
      <Contact></Contact>
      <TechStack></TechStack>
      <Demo></Demo>
      <Exp></Exp>
      <Introduction></Introduction>
    </Wrapper>
  );
};

export default Page;
