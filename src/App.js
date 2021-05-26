import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/shop'
import Header from './components/Header/Header'
import SignIn from './pages/sign-in-sign-up/sign-in-sign-up'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentuser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentuser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })
      }
      else {
        this.setState({ currentuser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentuser={this.state.currentuser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignIn} />
        </Switch>
      </div>
    );
  }

}

export default App;
