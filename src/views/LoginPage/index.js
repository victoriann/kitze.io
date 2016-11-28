import React from 'react';
import {observer, inject} from 'mobx-react';
import colors from 'config/colors';
import {bindField, onEnter, autofocus} from 'utils/input-utils';

//data
import {graphql} from 'react-apollo';
import {SignInUserMutation} from './graphql-data';
import {GetUser} from 'gql/graphql-shared';

//styled-components
import {RightSide} from './styles';
import Spinner from 'components/Spinner';

@inject('store')
@graphql(SignInUserMutation, {name: 'signInUser'})
@graphql(GetUser)
@observer
class LoginPage extends React.Component {

  componentWillReceiveProps = nextProps => {
    this.props.store.auth.returnLoggedHome(nextProps);
  }

  login = () => {
    const {auth} = this.props.store
    const {signInUser} = this.props;
    auth.login(signInUser);
  }

  render() {
    const {store} = this.props;
    const {auth} = store;
    const {loginForm} = auth;
    const {fields: {email, password}} = loginForm;
    const {loading} = auth;

    return (
      <RightSide backgroundColor={colors.thoughtsBackgroundColor}>
        <div>
          {loading && <Spinner/>}
          {!loading && <div>
            <input {...bindField(email)} {...autofocus} type="text" placeholder="email"/>
            <br/>
            <input {...bindField(password)} {...onEnter(this.login)} type="password" placeholder="password"/>
            <br/>
            <button disabled={!loginForm.valid} onClick={this.login}> Login</button>
          </div>
          }
        </div>
      </RightSide>
    )
  }
}

export default LoginPage;