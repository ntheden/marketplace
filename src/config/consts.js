const getEndpoint = () => {
      let endPoint = process.env.REACT_APP_API_ENDPOINT;
      if (endPoint === undefined) {
      // this is for frontend served by backend
      endPoint = "";
    }
    return endPoint;
};
export const apiEndpoint = `${getEndpoint()}/v1/telegram`;
