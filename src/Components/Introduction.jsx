import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { useUserData } from "Contexts/UserContext";

const Wrapper = styled.div`
  border: 1px solid black;
  font-size: 16px;
  line-height: 24px;
  padding: 15px;
  white-space: pre-line;
`;

const Introduction = () => {
  const text = useUserData().profile.description;

  return (
    <div data-testid="component-introduction" className="section">
      <SectionTitle text="About"></SectionTitle>
      <Wrapper>{text}</Wrapper>
    </div>
  );
};

export default Introduction;
