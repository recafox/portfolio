import styled from "styled-components";
import { useUserData } from "../Contexts/UserContext";
import Loading from "./Loading";
import Page from "./Page";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 1040px;
  margin: 0 auto;
`;

const App = () => {
  const data = useUserData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setLoading(false);
    }
  }, [data]);

  const renderLoading = () => {
    if (loading) {
      return <Loading></Loading>;
    }
    return <Page></Page>;
  };
  return <Container>{renderLoading()}</Container>;
};

export default App;
