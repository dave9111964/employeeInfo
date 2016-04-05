'use strict';

describe('empInfoApp.version module', function() {
  beforeEach(module('empInfoApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
