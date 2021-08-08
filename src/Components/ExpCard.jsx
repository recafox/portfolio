import styled from "styled-components";
import { getTime, getEndTime } from "Helpers";

const Card = styled.div`
  border: 1px solid black;
  padding: 15px;

  h4 {
    display: flex;
    margin-bottom: 10px;

    @media (max-width: 568px) {
      flex-direction: column;
    }
  }
  .exp-title {
    font-size: 20px;
    font-weight: 500;
    margin-right: 15px;

    @media (max-width: 568px) {
      margin-bottom: 10px;
      width: fit-content;
    }
  }

  .exp-company {
    @media (max-width: 568px) {
      margin-bottom: 10px;
      width: fit-content;
    }
  }

  .exp-time {
    margin-left: auto;

    @media (max-width: 568px) {
      margin-left: 0;
    }
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
