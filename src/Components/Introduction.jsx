import { useUserData } from "Contexts/UserContext";

const Introduction = () => {
  const text = useUserData().profile.description;
  return <div data-testid="component-introduction">{text}</div>;
};

export default Introduction;
