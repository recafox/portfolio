import { getImagePath } from "Helpers";
import styled from "styled-components";

const SkillName = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
  text-align: center;

  @media (max-width: 568px) {
    font-size: 16px;
  }
`;

const SkillDesc = styled.p`
  @media (max-width: 568px) {
    display: none;
  }
`;

const Skill = ({ skill }) => {
  return (
    <div data-testid="component-skill" className="badge">
      <img src={getImagePath(skill.imgPath)} alt={skill.name}></img>
      <SkillName>{skill.name}</SkillName>
      <SkillDesc>{skill.description}</SkillDesc>
    </div>
  );
};

export default Skill;
