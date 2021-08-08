import { useUserData } from "Contexts/UserContext";
import Link from "./Link";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";

const Wrapper = styled.div`
  .link {
    margin-right: 15px;
  }
`;

const Contact = (props) => {
  const links = useUserData().profile.socialLinks;

  const renderLinks = () => {
    return links.map((link) => <Link key={link._id} link={link}></Link>);
  };

  return (
    <div data-testid="component-contact" className="section">
      <SectionTitle text="Links"></SectionTitle>
      <Wrapper className="badge-wrapper">{renderLinks()}</Wrapper>
    </div>
  );
};

export default Contact;
