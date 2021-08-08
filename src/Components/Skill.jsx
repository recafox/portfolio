import { getImagePath } from "Helpers";
import styled from "styled-components";

const SkillName = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
`;

const Skill = ({ skill }) => {
  return (
    <div data-testid="component-skill" className="badge">
      <img src={getImagePath(skill.imgPath)} alt={skill.name}></img>
      <SkillName>{skill.name}</SkillName>
      <p>{skill.description}</p>
    </div>
  );
};

export default Skill;
