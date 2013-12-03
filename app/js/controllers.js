'use strict';

/* Controllers */

function AuthorEditorCtrl ($scope) {
    $scope.authors = [];
    $scope.addAuthor = function(author) {
      $scope.authors.push(angular.copy(author));
    };
    $scope.removeAuthor = function(index) {
      $scope.authors.splice(index,1);
    };
    
    $scope.move = function (array, old_index, new_index) {
      if (new_index >= array.length) {
          var k = new_index - array.length;
          while ((k--) + 1) {
              array.push(undefined);
          }
      }
      array.splice(new_index, 0, array.splice(old_index, 1)[0]);
      return array; // for testing purposes
    };
    $scope.moveUp = function(index) {
      $scope.move($scope.authors, index, index - 1);
    };
    
    $scope.moveDown = function(index) {
      $scope.move($scope.authors, index, index + 1);
    };
}