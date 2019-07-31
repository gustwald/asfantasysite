import React from "react";
import logo from "./images/logo.png";
import twitter from "./images/twitter.png";
import data from "./data.json";
import moment from "moment";
import "moment/locale/sv";
import "./App.css";

function convertImg(team) {
  switch (team.toLowerCase()) {
    case "ik sirius":
      return "4";
    case "malmö ff":
      return "2";
    case "kalmar ff":
      return "13";
    case "aik":
      return "16";
    case "hammarby if":
      return "3";
    case "ifk norrköping":
      return "12";
    case "bk häcken":
      return "8";
    case "Östersunds FK":
      return "14";
    case "if elfsborg":
      return "6";
    case "djurgårdens if":
      return "9";
    case "afc eskilstuna":
      return "7";
    case "falkenbergs ff":
      return "11";
    case "örebro sk":
      return "10";
    case "gif sundsvall":
      return "15";
    case "helsingborgs if":
      return "1";
    case "ifk göteborg":
      return "5";
    default:
      return "logo";
  }
}
function App() {
  moment.locale("sv");
  const incrementedPlayers = data.filter(
    p =>
      parseFloat(p.cost.replace(/,/, ".")) >
      parseFloat(p.oldCost.replace(/,/, "."))
  );
  const decrementedPlayers = data.filter(
    p =>
      parseFloat(p.cost.replace(/,/, ".")) <
      parseFloat(p.oldCost.replace(/,/, "."))
  );
  const timestamp = new Date();
  const formattedTime = moment(timestamp).format("L");
  return (
    <div className="App">
      <header>
        <div className="headerLeft">
          <img className="logo" src={logo} alt="logo" />
          {/* <h1 className="logoText">Prisförändringar</h1> */}
        </div>
        <div className="headerRight">
        <h1 className="time">{formattedTime && formattedTime}</h1>
        </div>
      </header>
      <div className="container">
        <div className="playerContainer">
          {incrementedPlayers && (
            <div className="up">
              <span role="img" aria-label="arrow-upp" className="icon iconUp">
                ⬆️
              </span>
              {incrementedPlayers &&
                incrementedPlayers.map(player => (
                  <div key={player.cost} className="player">
                    <img
                      alt="hometeam"
                      className="team"
                      src={require(`./images/${convertImg(player.team)}.png`)}
                    />
                    <p className="playerName">
                      {player.name}, {player.cost.replace(",", ".")}m
                    </p>
                  </div>
                ))}
            </div>
          )}
          {decrementedPlayers && (
            <div className="down">
              <span role="img" aria-label="arrow-upp" className="icon iconDown">
                ⬇️
              </span>

              {decrementedPlayers &&
                decrementedPlayers.map(player => (
                  <div key={player.cost} className="player">
                    <img
                      alt="hometeam"
                      className="team"
                      src={require(`./images/${convertImg(player.team)}.png`)}
                    />
                    <p className="playerName">
                      {player.name}, {player.cost.replace(",", ".")}m
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <a href="https://twitter.com/asfantasyp" reltarget="_blank"><img src={twitter} alt="twitter" className="twitter" /></a>
    </div>
  );
}

export default App;
