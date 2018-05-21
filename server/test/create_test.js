const assert = require('assert');
const Data = require('../models/data'); //represents entire collection of data inside my mongo database

describe('Creating records', () => {
  it('saves a user', (done) => {
    const joe = new Data({ classID: "123" , data: "this is data" });

    joe.save()
    .then(() => {
      assert(!joe.isNew);
      done();
    });
  });
});
