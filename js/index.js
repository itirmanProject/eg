angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($scope) {
  $scope.clearValue = function() {
    $scope.vin = undefined;
    $scope.iccid = undefined;
    // $scope.ascan = undefined;
    $scope.category = undefined;
    $scope.parameters = undefined;
    $scope.bodyNumber = undefined;
    $scope.brand = undefined;
    $scope.color = undefined;
    $scope.code = undefined;
    $scope.special = undefined;
    $scope.myForm.$setPristine();
  };

  $scope.user = {
   		ascan: '123456789'
      
    };


});

var buttons = document.getElementsByClassName('btn'),
    forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
    b.addEventListener('click', addElement);
});

function addElement(e) {
    var addDiv  = document.createElement('div'),
        mValue  = Math.max(this.clientWidth, this.clientHeight),
        rect    = this.getBoundingClientRect();
        sDiv    = addDiv.style,
        px      = 'px';

    sDiv.width  = sDiv.height = mValue + px;
    sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}

function Moon(card_number) {

  var arr = [],
      card_number = card_number.toString();
  for(var i = 0; i < card_number.length; i++) {
    if(i % 2 === 0) {
      var m = parseInt(card_number[i]) * 2;
      if(m > 9) {
        arr.push(m - 9);
      } else {
        arr.push(m);
      } 
    } else {
        var n = parseInt(card_number[i]);
        arr.push(n)
      }
  }
  //console.log(arr);
  var summ = arr.reduce(function(a, b) { return a + b; });
  return Boolean(!(summ % 10));

}