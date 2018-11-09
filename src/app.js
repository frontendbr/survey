import * as offline from 'offline-plugin/runtime';

import './app.styl';
import './components/welcome/welcome';
import './components/introduction/introduction';
import './components/region/region';
import './components/genre/genre';
import './components/job/job';
import './components/footer/footer';

offline.install({
  onUpdateReady: function() {
    offline.applyUpdate();
  }
});
 

