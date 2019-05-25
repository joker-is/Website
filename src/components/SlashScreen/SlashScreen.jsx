import React from 'react';
import SubscripeField from '../SubscribeField/SubscribeField';
import SocialmediaList from '../SocialmediaList/SocialmediaList';

class SplashScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <h1>Jóker</h1>
        <h3>Þessi síða er í vinnslu</h3>
        <p>Komdu aftur síðar eða skráðu þið á póstlista til að fá nýjustu upplýsingar</p>
        <SubscripeField />
        <SocialmediaList />
      </div>
    );
  }
}

export default SplashScreen;
