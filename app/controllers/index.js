import Ember from 'ember';

export default Ember.Controller.extend({
  show: false,

  actions: {
    toggle() {
      this.toggleProperty('show');
    }
  }
});
