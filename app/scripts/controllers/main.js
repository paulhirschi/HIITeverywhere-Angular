'use strict'; // But be gentle

/**
 * @ngdoc function
 * @name hiitAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hiitAngularApp
 */
angular.module('hiitAngularApp')
  .controller('MainCtrl', ['$scope', '$log',

    function($scope, $log) {

      var bell = new Audio('audio/bell.mp3');

      $scope.alertText = function() {
        bell.volume = 0;
        bell.play();
        $log.log('App Started');
      };

      $scope.upperWorkouts = [
        'Pushups',
        'Wide-Arm Pushups',
        'Close-Arm Pushups',
        'Straight Arm Planks',
        'Plank to Pushup',
        'Tricep Dips',
        'Burpees',
        'Walkdown Planks',
        'Pike Pushups',
        'Dive Bomber Pushups'
      ];

      $scope.lowerWorkouts = [
        'Squats',
        'Jumping Squats',
        'Lunges',
        'Jumping Lunges',
        'Mtn. Climbers',
        'Jumping Jacks',
        'Flutter Kicks',
        'Wall Sit',
        'Burpees',
        'Leg Lifts'
      ];

      $scope.coreWorkouts = [
        'Flutter Kicks',
        'Plank',
        'Plank to Pushup',
        'Burpees',
        'Russian Twist',
        'Bicycles',
        'Alt. Heel Touchers',
        'Mtn. Climbers',
        'Leg Lifts',
        'In & Outs'
      ];

      $scope.fullBodyWorkouts = [
        'Flutter Kicks',
        'Plank',
        'Burpees',
        'Russian Twist',
        'Bicycles',
        'Alt. Heel Touchers',
        'Mtn. Climbers',
        'Leg Lifts',
        'In & Outs',
        'Squats',
        'Jumping Squats',
        'Lunges',
        'Jumping Lunges',
        'Jumping Jacks',
        'Wall Sit',
        'Pushups',
        'Wide-Arm Pushups',
        'Close-Arm Pushups',
        'Straight Arm Planks',
        'Plank to Pushup',
        'Tricep Dips',
        'Walkdown Planks',
        'Pike Pushups',
        'Dive Bomber Pushups'
      ];



      //***
      // Workout Duration Varibles
      //***
      $scope.beginnerDuration = 20;
      $scope.averageDuration = 30;
      $scope.proDuration = 40;
      $scope.insaneDuration = 60;

      // Function used in stop callback to reset the clock, toggle the button, iterate through and show next workout, and show the rest message. Also calls message when workout complete.
      // var i = 1;
      // var resetClock = function() {
      //   toggleButton();
      //   $rest.fadeIn();
      //   workoutClock.setTime(workoutDuration);
      //   if (i <= 9) {
      //     $('.currentWorkout').text(currentWorkout[i++]);
      //   } else {
      //     $('.currentWorkout').text('Awesome Workout!');
      //     $('.startTime').hide();
      //     $('.rest').hide();
      //     $('.workClock').hide();
      //   }
      // };



      // Main clock object, methods, and callbacks
      // $scope.workClock = function() {
      //   workoutClock = $('.workClock').FlipClock(workoutDuration, {
      //     clockFace: 'MinuteCounter',
      //     countdown: true,
      //     autoStart: false,
      //     callbacks: {
      //       stop: function() {
      //         setTimeout(resetClock, 1500);
      //         bell.play();
      //       },
      //       start: function() {
      //         toggleRest();
      //       },
      //     }
      //   });
      // };

      //***
      // This function is created to randomly shuffle an array.  I use it to shuffle the currentWorkout so the exercises appear in a random order.  It is called the Fisher-Yates (aka Knuth) Shuffle, probably named after its creators. Its super handy.
      //***
      // function shuffle(array) {
      //   var currentIndex = array.length,
      //     temporaryValue, randomIndex;

      //   // While there remain elements to shuffle...
      //   while (0 !== currentIndex) {

      //     // Pick a remaining element...
      //     randomIndex = Math.floor(Math.random() * currentIndex);
      //     currentIndex -= 1;

      //     // And swap it with the current element.
      //     temporaryValue = array[currentIndex];
      //     array[currentIndex] = array[randomIndex];
      //     array[randomIndex] = temporaryValue;
      //   }
      //   return array;
      // }

      //***
      // Set the currentWorkouts variable to the user choice. Then dynamically load next page so varaible is maintained.
      //***



      $scope.currentWorkout = function(currentWorkout) {

        $scope.currentWorkout = currentWorkout;
        $log.log($scope.currentWorkout);

        return currentWorkout;

      };


      //***
      // Set the workoutDuration variable to the user choice. Then dynamically load next page so varaible is maintained and call workClock() to start the workout timer and shuffle the currentWorkout randomly.
      //***

      // $scope.intensityLevelSelect = function(workoutDuration) {
      //   $scope.workoutDuration = workoutDuration;
      //   $log.log($scope.workoutDuration);
      // };

    }
  ]);