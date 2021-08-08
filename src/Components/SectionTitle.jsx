import styled from "styled-components";

const Header = styled.h2`
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 15px;
  position: relative;
  width: fit-content;

  &:after {
    content: "";
    display: block;
    height: 15px;
    width: 85%;
    background: ${(props) => props.theme.purple};
    position: absolute;
    bottom: -5px;
    z-index: -1;
    left: 15%;
}
  }
`;

const SectionTitle = ({ text }) => {
  return <Header>{text}</Header>;
};

export default SectionTitle;
