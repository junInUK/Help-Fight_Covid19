const assert = require('assert');
const Job = require('../models/job.js');

describe('Job', function() {

  let job;

  beforeEach(function () {
    job = new Job(1001, 'shopping lift', 'open');
  });

  it('should have a userID', function () {
    const actual = job.userID;
    assert.strictEqual(actual, 1001);
  });

  it('should have a description', function () {
    const actual = job.description;
    assert.strictEqual(actual, 'shopping lift');
  });

  it('should have a status', function () {
    const actual = job.status;
    assert.strictEqual(actual, 'open');
  });

});
