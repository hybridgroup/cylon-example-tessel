var Cylon = require('cylon');

Cylon.robot({
  connections: {
    tessel: { adaptor: 'tessel' }
  },

  devices: {
    led: { driver: 'led', pin: 1 }
  },

  work: function(my) {
    console.log("Hello from the Tessel.");

    every((2).seconds(), function() {
      console.log("still working")
    });
  }

}).start();
