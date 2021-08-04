import styled from "styled-components";
import { UserDataProvider, useUserData } from "../Contexts/UserContext";

const Container = styled.div`
  width: 1040px;
  margin: 0 auto;
`;

const ComponentA = (props) => {
  const data = useUserData();
  console.log(data);
  if (data.profile) {
    return <div>Component a {data.profile.nickname} </div>;
  }
  return <div>Loading</div>;
};

const App = () => {
  return (
    <Container>
      <UserDataProvider>
        <ComponentA></ComponentA>
      </UserDataProvider>
    </Container>
  );
};

export default App;
