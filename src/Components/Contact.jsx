import { useUserData } from "Contexts/UserContext";
import Link from "./Link";

const Contact = (props) => {
  const links = useUserData().profile.socialLinks;

  const renderLinks = () => {
    return links.map((link) => <Link key={link._id} link={link}></Link>);
  };

  return <div data-testid="component-contact">{renderLinks()}</div>;
};

export default Contact;
