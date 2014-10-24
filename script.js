var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'tessel', adaptor: 'tessel' },
  device: { name: 'led', driver: 'led', pin: 1 },

  work: function(my) {
    console.log("Hello from the Tessel.");

    every((2).seconds(), function() {
      console.log("still working")
    });
  }

}).start();
