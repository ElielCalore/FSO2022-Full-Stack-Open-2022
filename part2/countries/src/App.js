import axios from "axios";
import { useEffect, useState } from "react";
import env from "react-dotenv";
export function App() {
  const [countries, setCountries] = useState([]);
  const [search, SetSearch] = useState("");
  const [countriesSearch, setCountriesSearch] = useState(countries);
  const [weather, setWeather] = useState({
    current: {
      temp_f: "",
      condition: { icon: "" },
      wind_mph: "",
      wind_dir: "",
    },
  });
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(API_KEY);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleChangeSearch = (e) => {
    SetSearch(e.target.value);

    setCountriesSearch(
      countries.filter((current) =>
        current.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
    console.log(countriesSearch);
  };

  const buttonShow = (current) => {
    setCountriesSearch([current]);
  };

  return (
    <div>
      <div>
        Find Countries
        <input
          size="large"
          type="text"
          placeholder="input search text"
          onChange={handleChangeSearch}
          enterButton
        />
      </div>

      <div>
        {countriesSearch.length === 0 ? (
          countries.map((current) => {
            return (
              <div>
                <h2>
                  {current.name.common}{" "}
                  <button
                    onClick={() => {
                      buttonShow(current);
                    }}
                  >
                    Show
                  </button>
                </h2>
              </div>
            );
          })
        ) : countriesSearch.length === 1 ? (
          countriesSearch.map((cur) => {
            let objKeys = Object.keys(countriesSearch[0].languages);

            return (
              <div>
                <h1>{cur.name.common}</h1>
                <p>
                  <strong>Capital:</strong> {cur.capital}
                </p>
                <p>
                  <strong>Area:</strong> {cur.area}
                </p>
                <p>
                  <strong>Population:</strong> {cur.population}
                </p>
                <h2>Languages: </h2>
                <ul>
                  {objKeys.map((curObject) => {
                    return <li>{countriesSearch[0].languages[curObject]}</li>;
                  })}
                </ul>
                <img
                  src={cur.flags.png}
                  alt="
country flag"
                ></img>
              </div>
            );
          })
        ) : countriesSearch.length > 10 ? (
          <div>Too Many matches, specify another filter</div>
        ) : (
          countriesSearch.map((currentCountries) => {
            return (
              <div>
                <h2>
                  {currentCountries.name.common}
                  <button
                    onClick={() => {
                      buttonShow(currentCountries);
                    }}
                  >
                    Show
                  </button>
                </h2>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
