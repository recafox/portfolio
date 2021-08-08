import styled, { ThemeProvider } from "styled-components";
import { useUserData } from "../Contexts/UserContext";
import Loading from "./Loading";
import Page from "./Page";
import { useState, useEffect } from "react";
import theme from "../Theme";

const Container = styled.div`
  width: 1040px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  return (
    <ThemeProvider theme={theme}>
      <Container>{renderLoading()}</Container>
    </ThemeProvider>
  );
};

export default App;
