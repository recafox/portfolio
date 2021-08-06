import { useUserData } from "Contexts/UserContext";
import Skill from "./Skill";

const TechStack = () => {
  const skills = useUserData().profile.skills;
  const renderSkills = () => {
    return skills.map((skill) => <Skill key={skill._id} skill={skill}></Skill>);
  };
  return <div data-testid="component-techstack">{renderSkills()}</div>;
};

export default TechStack;
