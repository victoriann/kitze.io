import {action, observable} from 'mobx';
import {CONSTANTS} from 'config/constants';
import store from 'stores/store';
import views from 'config/views';

class AuthStore {

  @observable loading = false;

  @action login = (signInUser, email, password) => {
    this.loading = true;
    signInUser({variables: {email, password}}).then(this.onLogin);
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

}

export default AuthStore;