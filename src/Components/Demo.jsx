import { useUserData } from "Contexts/UserContext";
import DemoCard from "./DemoCard";

const Demo = () => {
  const demos = useUserData().demos;
  const renderDemoCards = () => {
    return demos.map((demo) => (
      <DemoCard key={demo._id} demo={demo}></DemoCard>
    ));
  };
  return <div data-testid="component-demo">{renderDemoCards()}</div>;
};

export default Demo;
