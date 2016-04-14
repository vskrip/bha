'use strict';
(function(){

angular.module('bhaApp.ddcalc')
  .controller('DDcalcController', function () {

    var vm = this;

    vm.motorDoglegOutPut = '';
    vm.presentSurveyDogleg = '';
    vm.singleLength = '';
    vm.amountOfSlide = '';
    
    vm.buildRatePerMeter = '';
    vm.presentSurveyInclinometer = '';
    vm.previousSurveyInclinometer = '';
    vm.metersOfSlide = '';
    
    vm.inclinometerAtBit = '';
    vm.buildRatePerMeterForBitInclinometer = '';
    vm.amountOfSlideAhead = '';
    vm.presentSurveyInclinometerForBitInclinometer = '';
    
    vm.presentTVD = '';
    vm.presentSurveyInclinometerForPresentTVD = '';
    vm.previousSurveyInclinometerForPresentTVD = '';
    vm.singleLengthForPresentTVD = '';
    vm.previousTVDForPresentTVD = '';
    
    vm.tvdAtBit = '';
    vm.inclinometerAtBitForTvdAtBit = '';
    vm.presentSurveyInclinometerForTvdAtBit = '';
    vm.distanceFromSurveyPointToBit = '';
    vm.presentTvdForTvdAtBit = '';
    
    vm.buildUpRateRequiredToTarget = '';
    vm.inclinometerAtTargetForBuildUpRateToTarget = '';
    vm.inclinometerAtBitForBuildUpRateToTarget = '';
    vm.tvdAtTargetForBuildUpRateToTarget = '';
    vm.tvdAtBitForBuildUpRateToTarget = '';
    
    vm.amountOfMetersToSlide = '';
    vm.buildUpRateRequired = '';
    vm.buildUpRatePerMeter = '';
    vm.nextSingleLength = '';
    
    vm.sourveyDogleg = '';
    vm.presentSurveyInclinometerForSurveyDogleg = '';
    vm.previousSurveyInclinometerForSurveyDogleg = '';
    vm.courseLength = '';
    
    vm.surveyTurnRate = '';
    vm.presentSurveyAzimuth = '';
    vm.previousSurveyAzimuth = '';
    vm.courseLengthForTurnRate = '';
    
    vm.getMotorDoglegOutPut = getMotorDoglegOutPut;
    vm.getBuildRatePerMeter = getBuildRatePerMeter;
    vm.getInclinometerAtBit = getInclinometerAtBit;
    vm.getPresentTVD = getPresentTVD;
    vm.getTvdAtBit = getTvdAtBit;
    vm.getBuildUpRateRequiredToTarget = getBuildUpRateRequiredToTarget;
    vm.getAmountOfMetersToSlide = getAmountOfMetersToSlide;
    vm.getSourveyDogleg = getSourveyDogleg;
    vm.getSurveyTurnRate = getSourveyTurnRate;
    
    vm.toRadian = toRadian;

    function initController() {

    }

    initController();

    function getMotorDoglegOutPut() {
        if (!vm.presentSurveyDogleg || !vm.singleLength || !vm.amountOfSlide) {     
            vm.motorDoglegOutPut = '';
        } else {
            vm.motorDoglegOutPut = 
                (vm.presentSurveyDogleg * vm.singleLength) / 
                vm.amountOfSlide;
        }
        return vm.motorDoglegOutPut;
    }

    function getBuildRatePerMeter() {
        if (
            !vm.presentSurveyInclinometer || 
            !vm.previousSurveyInclinometer || 
            !vm.metersOfSlide ) {
            vm.buildRatePerMeter = '';
        } else {
            vm.buildRatePerMeter = 
                (vm.presentSurveyInclinometer - 
                vm.previousSurveyInclinometer) /
                vm.metersOfSlide;
        }
        return vm.buildRatePerMeter;
    }

    function getInclinometerAtBit() {
        if (
            !vm.buildRatePerMeterForBitInclinometer ||
            !vm.amountOfSlideAhead ||
            !vm.presentSurveyInclinometerForBitInclinometer) {     
            vm.inclinometerAtBit = '';
        } else {
            vm.inclinometerAtBit = 
                vm.buildRatePerMeterForBitInclinometer *
                vm.amountOfSlideAhead +
                vm.presentSurveyInclinometerForBitInclinometer;
        }
        return vm.inclinometerAtBit;
    }

    function getPresentTVD() {
        var averageAngle = 0;
        if (
            !vm.presentSurveyInclinometerForPresentTVD ||
            !vm.previousSurveyInclinometerForPresentTVD ||
            !vm.singleLengthForPresentTVD ||
            !vm.previousTVDForPresentTVD) {
            vm.presentTVD = '';
        } else {
            averageAngle = 
                (vm.presentSurveyInclinometerForPresentTVD +
                vm.previousSurveyInclinometerForPresentTVD) / 2;
            vm.presentTVD = 
                Math.cos(toRadian(averageAngle)) * 
                vm.singleLengthForPresentTVD + 
                vm.previousTVDForPresentTVD;
        }
        return vm.presentTVD;
    }

    function getTvdAtBit() {
        var averageAngle = 0;
        if (
            !vm.inclinometerAtBitForTvdAtBit ||
            !vm.presentSurveyInclinometerForTvdAtBit ||
            !vm.distanceFromSurveyPointToBit ||
            !vm.presentTvdForTvdAtBit) {
            vm.tvdAtBit = '';
        } else {
            averageAngle = 
                (vm.inclinometerAtBitForTvdAtBit +
                vm.presentSurveyInclinometerForTvdAtBit) / 2;
            vm.tvdAtBit = 
                Math.cos(toRadian(averageAngle)) * 
                vm.distanceFromSurveyPointToBit + 
                vm.presentTvdForTvdAtBit;
        }
        return vm.tvdAtBit;
    }

    function getBuildUpRateRequiredToTarget() {
        if (!vm.inclinometerAtTargetForBuildUpRateToTarget ||
            !vm.inclinometerAtBitForBuildUpRateToTarget ||
            !vm.tvdAtTargetForBuildUpRateToTarget ||
            !vm.tvdAtBitForBuildUpRateToTarget) {
            vm.buildUpRateRequiredToTarget = '';
        } else {
            /*
                TODO Needs check the formula. In the view result is 4.35 instead 4.298.
                Substitude 1719 on approptiate parameter.
            */
            vm.buildUpRateRequiredToTarget = 
                (Math.sin(toRadian(vm.inclinometerAtTargetForBuildUpRateToTarget)) -
                Math.sin(toRadian(vm.inclinometerAtBitForBuildUpRateToTarget))) /
                (vm.tvdAtTargetForBuildUpRateToTarget - 
                vm.tvdAtBitForBuildUpRateToTarget) * 1719;
        }
        return vm.buildUpRateRequiredToTarget;
    }

    function getAmountOfMetersToSlide() {
        if (!vm.buildUpRateRequired ||
            !vm.buildUpRatePerMeter ||
            !vm.nextSingleLength) {     
            vm.amountOfMetersToSlide = '';
        } else {
            vm.amountOfMetersToSlide = 
                ((vm.buildUpRateRequired /
                vm.buildUpRatePerMeter) *
                vm.nextSingleLength / 10);
        }
        return vm.amountOfMetersToSlide;
    }

    function getSourveyDogleg() {
        if (!vm.presentSurveyInclinometerForSurveyDogleg ||
            !vm.previousSurveyInclinometerForSurveyDogleg ||
            !vm.courseLength) {
            vm.sourveyDogleg = '';
        } else {
            vm.sourveyDogleg = 
                ((vm.presentSurveyInclinometerForSurveyDogleg -
                vm.previousSurveyInclinometerForSurveyDogleg) /
                vm.courseLength * 10);
        }
        return vm.sourveyDogleg;
    }

    function getSourveyTurnRate() {
        if (!vm.presentSurveyAzimuth ||
            !vm.previousSurveyAzimuth ||
            !vm.courseLengthForTurnRate) {
            vm.sourveyTurnRate = '';
        } else {
            vm.sourveyTurnRate = 
                ((vm.presentSurveyAzimuth -
                vm.previousSurveyAzimuth) /
                vm.courseLengthForTurnRate * 10);
        }
        return vm.sourveyTurnRate;
    }
    
    function toRadian(degree) {
        return(degree * Math.PI / 180);
    }

  });
})();
