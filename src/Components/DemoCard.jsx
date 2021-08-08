import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
  padding: 15px;

  h4 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    white-space: pre-line;
  }
`;

const Tag = styled.div`
  display: inline-flex;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.pink};
  color: #fff;
  padding: 5px 7px;

  span {
    margin-left: 5px;
  }
`;

const DemoCard = ({ demo }) => {
  const renderTags = () =>
    demo.tags.map((tag) => (
      <Tag key={tag}>
        # <span>{tag}</span>
      </Tag>
    ));

  return (
    <Card data-testid="component-demo-card" className="demo-card">
      <h4>{demo.name}</h4>
      <div>{renderTags()}</div>
      <p>{demo.description}</p>
    </Card>
  );
};

export default DemoCard;
