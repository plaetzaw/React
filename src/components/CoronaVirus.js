import React, { Component } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

class CoronaVirus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      searchResults: ""
    };
  }

  componentDidMount = () => {
    let url = "https://corona.lmao.ninja/states";
    axios.get(url).then(res => {
      console.log(res);
      this.setState({
        cases: res.data
      });
      console.log(this.state);
    });
  };

  handleChange = e => {
    this.setState({
      searchResults: e.target.value
    });
  };

  render() {
    let filteredStates = this.state.cases
      .filter(data => {
        if (this.state.searchResults == null) return;
        else if (
          data.state
            .toLowerCase()
            .includes(this.state.searchResults.toLowerCase())
        )
          return data;
      })
      .map(data => {
        const donut = {
          labels: [
            "Total Cases",
            "Cases Total",
            "Cases Today",
            "Death Total",
            "Deaths Today"
          ],
          datasets: [
            {
              data: [
                data.active,
                data.cases,
                data.todayCases,
                data.deaths,
                data.todayDeaths
              ],
              backgroundColor: [
                "#ff0000",
                "#b30000",
                "#ffff66",
                "#cc7a00",
                "#800000"
              ]
            }
          ]
        };

        return (
          <div className="RonaDisplay">
            <ul>
              <b>
                <h2>{data.state}</h2>
              </b>
              <li>Active Cases: {data.active}</li>
              <li>Case Total: {data.cases}</li>
              <li>Cases Today: {data.todayCases}</li>
              <li>Death Total: {data.deaths}</li>
              <li>Deaths Today: {data.todayDeaths}</li>
            </ul>
            <br />
            <div className="DisplayChart">
              <Doughnut data={donut} />
            </div>
          </div>
        );
      });

    // var CovidSucks = {
    //   labels: [
    //     "Active Cases",
    //
    //   ],
    //   datasets: [
    //     {
    //       data: [
    //         this.states.active,
    //         states.cases,
    //         states.todayCases,
    //         states.deaths,
    //         states.todayDeaths
    //       ],
    //       backgroundColor: [
    //         "#ff0000",
    //         "#b30000",
    //         "#ffff66",
    //         "#cc7a00",
    //         "#800000"
    //       ]
    //     }
    //   ]
    // };

    // THIS DISPLAYS ON YOUR APP!
    return (
      <div className="container-thing">
        <h1>Everything is NOT fine - Covid2019</h1>
        <br />
        <input type="text" onChange={this.handleChange} />
        <ul>{filteredStates}</ul>
      </div>
    );
  }
}

export default CoronaVirus;
