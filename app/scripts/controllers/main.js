'use strict'; // But be gentle

/**
 * @ngdoc function
 * @name hiitAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hiitAngularApp.
 * All views are controlled by 'MainCtrl'
 */
angular.module('hiitAngularApp')
  .controller('MainCtrl', ['$scope', '$log', 'appService',

    function($scope, $log, appService) {

      // This is the bell that 'dings' when a workout is complete.
      var bell = new Audio('audio/bell.mp3');

      // Here I initiate the bell to pre-load it to function
      // properly on mobile safari, etc. Audio must be
      // initiated by a user event in mobile safari.  This
      // pre-loading allows me to use it in a call-back function.
      $scope.alertText = function() {
        bell.volume = 0;
        bell.play();
        $log.log('App Started');
      };

      /**
       * Following are the arrays containing the workouts and
       * time durations for the workout. After user selections,
       * a workout and workout duration will be stored in variables
       * to be used in the workout view.
       */

      // Body section variables
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

      // Workout duration variables.
      $scope.beginnerDuration = 20;
      $scope.averageDuration = 30;
      $scope.proDuration = 40;
      $scope.insaneDuration = 60;

      /**
       * This function is created to randomly shuffle items within an array.
       * I use it to shuffle the currentWorkout array so the exercises
       * appear in a random order each use.
       * It is called the Fisher-Yates (aka Knuth) Shuffle,
       * probably named after its creators.
       * Not necessary, but its handy.
       */

      function shuffle(array) {
        var currentIndex = array.length,
          temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }

      /**
       * This is where I retrieve the workouts & workout duration
       * from the user via ng-click calling the functions below.
       * The data is permanently stored in the [appService]
       * service from the service.js file.
       */

      // ng-click calls this function and passes the workout from
      // the clicked body section.
      // These values are then permanently stored in the
      // in service.js
      $scope.getCurrentWorkout = function(workout) {
        appService.theWorkout(workout);
      };

      // ng-click calls this function and passes the duration from
      // the clicked intensity level.
      // These values are then permanently stored in the
      // in service.js
      $scope.getWorkoutDuration = function(duration) {
        appService.theDuration(duration);
      };

      $scope.$watch('currentWorkout', function(newVal, oldVal) {
        $log.log('New currentWorkout value is ' + newVal);
      });

      $scope.$watch('workoutDuration', function(newVal, oldVal) {
        $log.log('Workout duration is ' + newVal);
      });

      // The values stored in the service are set to the
      // $scope variables for workout and duration used in the views.
      // The workout is passed through the shuffle function
      // to randomize it's order.
      $scope.currentWorkout = shuffle(appService.currentWorkout);
      $scope.workoutDuration = appService.workoutDuration;


      /**
       * TODO:
       * 1. Initialize loop to iterate over the currentWorkout array, displaying a single workout at a time.
       * 2. Initialize the countdown timer and set to workoutDuration
       * 3. Set callbacks for when the clock starts and stops to show/hide content, iterate through the currentWorkout array, etc.
       * 4.
       */









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


    }
  ]);