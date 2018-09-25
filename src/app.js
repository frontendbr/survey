import * as offline from 'offline-plugin/runtime';
import './app.styl';
import './components/welcome/welcome.js';
import './components/introduction/introduction.js';
import './components/region/region.js';
import './components/footer/footer.js';


offline.install({
  onUpdateReady: function() {
    offline.applyUpdate();
  }
});
