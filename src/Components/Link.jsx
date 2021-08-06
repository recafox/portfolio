const Link = ({ link }) => {
  return (
    <div data-testid="component-social-link" data-link={link.link}>
      <img src=""></img>
      <p>{link.name}</p>
    </div>
  );
};

export default Link;
