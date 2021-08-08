import { getImagePath } from "Helpers";

const Link = ({ link }) => {
  return (
    <a
      data-testid="component-social-link"
      href={link.link}
      className="link badge"
    >
      <img src={getImagePath(link.imgPath)} alt={link.name}></img>
      <p>{link.name}</p>
    </a>
  );
};

export default Link;
