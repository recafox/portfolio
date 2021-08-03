import axios from 'axios';
import urls from "../Constants/url";
import { useEffect } from 'react';

const App = () => {

  const getProfile = async function () {
    const response = await axios.get(urls.profileURL);
    console.log(response);
  }

  useEffect(() => {
    getProfile();
  }, [])
  return (
    <div>App</div>
  )
};

export default App;