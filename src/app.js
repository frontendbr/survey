import * as offline from 'offline-plugin/runtime';

import './app.styl';
import './components/welcome/welcome';
import './components/introduction/introduction';
import './components/region/region';
import './components/genre/genre';
import './components/job/job';
import './components/hours/hours';
import './components/salary/salary';
import './components/freelas/freelas';
import './components/experience/experience';
import './components/level/level';
import './components/backend/backend';
import './components/product/product';
import './components/blog/blog';
import './components/opensource/opensource';
import './components/footer/footer';

offline.install({
  onUpdateReady: function() {
    offline.applyUpdate();
  }
});
 

