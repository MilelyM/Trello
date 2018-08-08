const assert = require('chai').assert;
global.window = global;
require('../src/js/main.js');

describe('Debería verificar   ', ()=>{
  it('debería exponer una funcion función ', () => {
    assert.isFunction(trello);
  });
});