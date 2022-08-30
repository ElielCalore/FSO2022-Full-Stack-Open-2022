import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*

  useEffect(() => {
    async function add() {
      console.log(persons);
      try {
        const response = await axios.post(
          "http://localhost:3001/persons",
          persons
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    add();
  }, []);
  */
