'use strict';

angular.module('empInfoApp.version', [
  'empInfoApp.version.interpolate-filter',
  'empInfoApp.version.version-directive'
])

.value('version', '0.1');
