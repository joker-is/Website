import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SplashScreen from './SlashScreen/SlashScreen';
import { UserProvider } from '../context/UserContext';
import { ThemeProvider } from '../context/ThemeContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        info: {
          username: 'arnarl',
          fullName: 'Arnar Leifsson',
        },
        changeUser: (newUser) => {
          this.setState({ user: { ...this.state.user, info: newUser } });
        },
      },
      theme: {
        current: 'dark',
        toggleTheme: () => {
          this.setState({
            theme: {
              ...this.state.theme,
              current: this.state.theme.current === 'dark' ? 'light' : 'dark',
            },
          });
        },
      },
    };
  }

  render() {
    return (
      <ThemeProvider value={this.state.theme}>
        <UserProvider value={this.state.user}>
          <div className="container">
            <Switch>
              <Route exact path="/" component={SplashScreen} />
              <Route path="*" render={() => <div>404 Not found</div>} />
            </Switch>
          </div>
        </UserProvider>
      </ThemeProvider>
    );
  }
}

export default App;
