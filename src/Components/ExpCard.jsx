import styled from "styled-components";
import { getTime, getEndTime } from "Helpers";

const Card = styled.div`
  border: 1px solid black;
  padding: 15px;

  h4 {
    display: flex;
    margin-bottom: 10px;
  }
  .exp-title {
    font-size: 18px;
    font-weight: 500;
    margin-right: 15px;
  }

  .exp-company {
    position: relative;

    &:after {
      content: "";
      display: block;
      height: 6px;
      width: 100%;
      position: absolute;
      bottom: 0;
      z-index: -1;
      background: ${(props) => props.theme.green};
    }
  }

  .exp-time {
    margin-left: auto;
  }

  p {
    white-space: pre-line;
    font-size: 16px;
    line-height: 24px;
  }
`;
const ExpCard = ({ exp }) => {
  return (
    <Card data-testid="component-exp-card">
      <h4>
        <span className="exp-title">{exp.title}</span>
        <span className="exp-company">
          @ <span>{exp.company}</span>
        </span>
        <span className="exp-time">
          {getTime(exp.startDate)} - {getEndTime(exp.endDate)}
        </span>
      </h4>
      <p>{exp.description}</p>
    </Card>
  );
};

export default ExpCard;
