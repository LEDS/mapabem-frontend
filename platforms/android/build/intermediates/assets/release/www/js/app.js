// Ionic Starter App
angular.module('starter', ['ionic']);

angular.module('starter')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('Server', {
    url: 'http://backend-mapabem.rhcloud.com/core'
})

.config(function($ionicConfigProvider){
  $ionicConfigProvider.platform.android.scrolling.jsScrolling(true);
  $ionicConfigProvider.platform.android.backButton.icon("ion-chevron-left");
  $ionicConfigProvider.platform.android.backButton.text("Voltar");
  $ionicConfigProvider.platform.android.navBar.alignTitle("center");
  $ionicConfigProvider.platform.android.tabs.position("bottom");
  $ionicConfigProvider.platform.android.tabs.style("standard");
});
