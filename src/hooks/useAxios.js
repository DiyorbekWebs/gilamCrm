import React from "react";
import { request } from "../config/reques";
export const useAxios = ({ method = null, url = null, body = null }) => {
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchdata = () => {
    request({
      method: method,
      url: url,
      body: body,
    })
      .then((el) => {
        setResponse(el.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  };
  React.useEffect(() => {
    if (url && method) {
      fetchdata();
    }
  }, [method, body, url]);
  return { response, error, isLoading };
};
