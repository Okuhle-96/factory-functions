function BillWithSettings(){

    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;
    var theTotalCost = 0;

    //SET CALL COST
    function getCallCost(){
        return theCallCost;
    }

    function setCallCost(callCost){
        theCallCost = callCost;
    }

    //SET SMS COST
    function getSmsCost(){
        return theSmsCost;
    }

    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    //SET WARNING LEVEL
    function getWarningLevel(){
        return theWarningLevel;
    }

    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }

    //SET CRITICAL LEVEL
    function getCriticalLevel(){
        return theCriticalLevel;
    }
    
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    //MAKE CALL
    function makeCall(){
        if (!hasReachedCriticalLevel()){
            callCostTotal += theCallCost;
        }
    }

    //SEND SMS
    function sendSms(){
        if (!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost;
        }
    }

    //GET TOTAL COST
    function getTotalCost(){
        //return theTotalCost;
        return callCostTotal + smsCostTotal;
    }

     //GET TOTAL CALL COST
     function getTotalCallCost(){
        return callCostTotal;
        
    }

    //GET TOTAL SMS COST
    function getTotalSmsCost(){
        return smsCostTotal;
    }

    //SET TOTAL CLASS NAME 
    function totalClassName(){
        if (hasReachedCriticalLevel()){
            return "critical";
        }

        if(getTotalCost() >= getWarningLevel()){
            return "warning";
        }
    }

    //CRITICAL SETTINGS 
    function hasReachedCriticalLevel(){
        return getTotalCost() >= getCriticalLevel();
    }

    return {
        getCallCost,
        setCallCost,

        getSmsCost,
        setSmsCost,

        getWarningLevel,
        setWarningLevel,

        getCriticalLevel,
        setCriticalLevel,

        makeCall,
        sendSms,

        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,

        totalClassName

    }

    
}