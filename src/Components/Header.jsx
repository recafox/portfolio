import { useUserData } from "Contexts/UserContext";

const Header = () => {
  const nickname = useUserData().profile.nickname;
  return <div data-testid="component-header">{nickname}</div>;
};

export default Header;
