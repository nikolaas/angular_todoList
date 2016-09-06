(function() {
  'use strict';

  angular
    .module('angularTodoList')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
