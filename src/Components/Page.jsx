import Header from "./Header";
import Contact from "./Contact";
import TechStack from "./TechStack";
import Demo from "./Demo";
import Exp from "./Exp";
import Introduction from "./Introduction";

const Page = (prop) => {
  return (
    <div data-testid="page-component">
      <Header></Header>
      <Contact></Contact>
      <TechStack></TechStack>
      <Demo></Demo>
      <Exp></Exp>
      <Introduction></Introduction>
    </div>
  );
};

export default Page;
