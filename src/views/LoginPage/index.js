import React from 'react';
import {observer, inject} from 'mobx-react';
import colors from 'config/colors';

//data
import {graphql} from 'react-apollo';
import {SignInUserMutation} from './graphql-data';

//styled-components
import {RightSide} from './styles';
import Spinner from 'components/Spinner';

@inject('store')
@observer
@graphql(SignInUserMutation, {name: 'signInUser'})
class LoginPage extends React.Component {

  state = {
    email: '',
    password: ''
  }

  render() {
    const {store, signInUser} = this.props;
    const {auth} = store;
    const {loading} = auth;
    const {email, password} = this.state;

    return (
      <RightSide backgroundColor={colors.thoughtsBackgroundColor}>
        <div>
          {loading && <Spinner/>}
          {!loading && <div>
            <input onChange={e => this.setState({email: e.target.value})} value={email} type="text" placeholder="email"/>
            <br/>
            <input onChange={e => this.setState({password: e.target.value})} type="password" value={password} placeholder="password"/>
            <br/>
            <button onClick={() => auth.login(signInUser, this.state.email, this.state.password)}> Login</button>
            <button onClick={() => auth.logout()}> Logout</button>
          </div>
          }
        </div>
      </RightSide>
    )
  }
}

export default LoginPage;