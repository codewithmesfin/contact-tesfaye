'use strict';

module.exports = function(Company) {
  Company.greet = (msg) =>{
    return 'Greetings... ' + msg;
  };

  Company.remoteMethod('greet', {
    accepts: {arg: 'msg', type: 'string'},
    returns: {arg: 'greeting', type: 'string'},
  });
};
