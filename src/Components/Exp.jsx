import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { useUserData } from "Contexts/UserContext";
import ExpCard from "./ExpCard";
const Exp = () => {
  const exps = useUserData().exps;
  const renderExpCards = () => {
    return exps.map((exp) => <ExpCard key={exp._id} exp={exp}></ExpCard>);
  };

  return (
    <div data-testid="component-exp" className="section">
      <SectionTitle text="Work Exp."></SectionTitle>
      {renderExpCards()}
    </div>
  );
};
export default Exp;
