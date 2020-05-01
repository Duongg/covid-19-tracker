import React from 'react';
import Cards from './components/Cards/Cards';
import Countrypicker from './components/Countrypicker/Countrypicker';
import Chart from './components/Chart/Chart';
import {fetchData} from './api';
import styles from './App.module.css';
import image from './image/1.jpg';

class App extends React.Component{
state = {
  data: {},
  country: '',
}

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }
  handleCountryChange = async (country) =>{
      const fetchedData = await fetchData(country);
      this.setState({data:fetchedData, country: country});
  }
  render(){
    const {data, country} = this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="Duonggg"/>
        <h1>Covid 19 Tracker</h1>
        <Cards data={data} />
        <Countrypicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
        <p>Copyright by duongdd</p>
      </div>
    );
  }
}
export default App;


