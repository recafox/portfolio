import styled from "styled-components";
import { useUserData } from "Contexts/UserContext";
import DemoCard from "./DemoCard";
import SectionTitle from "./SectionTitle";

const CardWrapper = styled.div`
  .demo-card {
    margin-bottom: 15px;
  }
`;

const Demo = () => {
  const demos = useUserData().demos;
  const renderDemoCards = () => {
    return demos.map((demo) => (
      <DemoCard key={demo._id} demo={demo}></DemoCard>
    ));
  };
  return (
    <div data-testid="component-demo">
      <SectionTitle text="Demos"></SectionTitle>
      <CardWrapper className="demo-container">{renderDemoCards()}</CardWrapper>
    </div>
  );
};

export default Demo;
