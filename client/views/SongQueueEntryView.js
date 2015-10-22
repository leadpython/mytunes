// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  template: _.template('<div class="queueEntry"> \
                          <span><%- artist %> - </span> \
                          <span><%- title %></span> \
                        </div>'),
  intialize: function() {
    this.model.on('enqueue', this.render, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});
