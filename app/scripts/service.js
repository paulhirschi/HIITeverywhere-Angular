'use strict'; // But be gentle

/*
 * Main service for the app.
 * This is used to store variables
 * that need to be maintained across
 * multiple views. And other things.
 * Boo ya!
 */
angular.module('hiitAngularApp')
  .factory('appService', function() {
    var service = {};

    service.currentWorkout = '';

    service.workoutDuration = '';

    service.theWorkout = function(workout) {
      service.currentWorkout = workout;
    };

    service.theDuration = function(duration) {
      service.workoutDuration = duration;
    };

    return service;
  });