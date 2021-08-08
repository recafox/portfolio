import styled from "styled-components";
import { useUserData } from "Contexts/UserContext";
import Skill from "./Skill";
import SectionTitle from "./SectionTitle";

const Wrapper = styled.div`
  display: grid;
  padding: 10px;
  border: 1px solid black;
  grid-auto-columns: repeat(4, 25%);
  grid-template-columns: repeat(4, 25%);
  justify-items: center;
  row-gap: 10px;
`;
const TechStack = () => {
  const skills = useUserData().profile.skills;
  const renderSkills = () => {
    return skills.map((skill) => <Skill key={skill._id} skill={skill}></Skill>);
  };
  return (
    <div data-testid="component-techstack" className="section">
      <SectionTitle text="TechStack"></SectionTitle>
      <div className="badge-wrapper">{renderSkills()}</div>
    </div>
  );
};

export default TechStack;
