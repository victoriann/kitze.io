import AppStore from 'stores/app-store.mobx';
import ThoughtsStore from 'stores/thoughts-store.mobx';
import {RouterStore} from 'mobx-router';

const store = {
  app: new AppStore(),
  thoughts: new ThoughtsStore(),
  router: new RouterStore(),
};

export default store;