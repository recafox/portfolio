import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import urls from "../Constants/url";

const UserData = createContext();

// create context
export function useUserData() {
  const context = useContext(UserData);

  if (!context) {
    throw new Error("useUserData must be used within an UserDataProvider");
  }
  return context;
}

export function UserDataProvider(props) {
  const [userState, setUserState] = useState({});

  const getProfile = function () {
    return axios.get(urls.profileURL);
  };

  const getDemo = function () {
    return axios.get(urls.demoURL);
  };

  const getExp = function () {
    return axios.get(urls.expURL);
  };

  useEffect(() => {
    Promise.all([getProfile(), getDemo(), getExp()]).then(function (results) {
      setUserState({
        profile: results[0].data[0],
        demos: results[1].data,
        exps: results[2].data,
      });
    });
  }, []);

  return <UserData.Provider value={userState} {...props}></UserData.Provider>;
}
