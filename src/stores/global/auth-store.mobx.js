import {action} from 'mobx';
import {CONSTANTS} from 'config/constants';
import store from 'stores/store';
import views from 'config/views';
import _ from 'lodash';
import GetLoginForm from 'stores/forms/login-form';

class AuthStore {

  loginForm = GetLoginForm();

  @action login = (signInUser) => {
    this.loading = true;
    signInUser({variables: this.loginForm.toJSON()}).then(this.onLogin);
  }

  @action onLogin = ({data}) => {
    this.loading = false;
    window.localStorage.setItem(CONSTANTS.TOKEN_KEY, data.signinUser.token);
    store.router.goTo(views.thoughts, {}, store);
  }

  @action logout = () => {
    window.localStorage.removeItem(CONSTANTS.TOKEN_KEY);
    location.reload();
  }

  @action returnUnloggedHome = (nextProps) => {
    if (!nextProps.data.user.id) {
      store.router.goTo(views.home, {}, store);
    }
  }

  @action returnLoggedHome = (nextProps) => {
    if (_.get(nextProps, 'data.user.id')) {
      store.router.goTo(views.home, {}, store);
    }
  }

}

export default AuthStore;