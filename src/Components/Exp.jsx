import { useUserData } from "Contexts/UserContext";
import ExpCard from "./ExpCard";
const Exp = () => {
  const exps = useUserData().exps;
  const renderExpCards = () => {
    return exps.map((exp) => <ExpCard key={exp._id} exp={exp}></ExpCard>);
  };
  return <div data-testid="component-exp">{renderExpCards()}</div>;
};
export default Exp;
