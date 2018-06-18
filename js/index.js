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

  //Луна 

var userNumInput = document.getElementById("userNum");

function getUserInput(){
   return userNumInput.value;  
}

function luhnCheck(){
  var ccNum = getUserInput(), ccNumSplit = ccNum.split(""), sum = 0;
  var singleNums = [], doubleNums = [], finalArry = undefined;
  var validCard = false;
  
  if((!/\d{18,19}(~\W[a-zA-Z])*$/g.test(ccNum)) || (ccNum.length > 19)){
     return false;  
  }

  if(ccNum.length === 18){  //american express 
     for(var i = ccNumSplit.length-1; i>=0; i--){
        if(i % 2 === 0){
           singleNums.push(ccNumSplit[i]);
        }else{
           doubleNums.push((ccNumSplit[i] * 2).toString());
        }
     }
  }else if(ccNum.length === 19){
     for(var i = ccNumSplit.length-1; i>=0; i--){
        if(i % 2 !== 0){
           singleNums.push(ccNumSplit[i]);
        }else{
           doubleNums.push((ccNumSplit[i] * 2).toString());
        }
     }
  }
  //joining makes an array to a string and I split them up again
  //so that every number is a single digit and convert back to array
  
  doubleNums = doubleNums.join("").split("");  
  finalArry = doubleNums.concat(singleNums);
  
  for(var j = 0; j<finalArry.length; j++){
     sum += parseInt(finalArry[j]);
  }
  
  if(sum % 10 === 0){
     validCard = true;
  }
  //the console log is for you, so you can see the sum, all sums that are
  //divisible by 10 should be good.  Just open up your console to view.
  
  console.log(sum);
  return validCard;
}

function whatCard(){
   
}

document.getElementById("submitBtn").addEventListener("click", function(){
   document.getElementById("resultDiv").innerHTML = luhnCheck();
}, false);