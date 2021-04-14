var callTotalSettingsElement = document.querySelector(".callTotalSettings");
var smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
var totalSettingsElement = document.querySelector(".totalSettings");
var radioButtonElement = document.querySelector(".radioButton");

var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement = document.querySelector( ".criticalLevelSetting");
var updateSettingsElement = document.querySelector(".updateSettings");

var settingsInstanceFactory = BillWithSettings();

function updateSettings() {

  Number(settingsInstanceFactory.setCallCost(Number(callCostSettingElement.value)));
  // settingsInstanceFactory.getCallCost());
  Number(settingsInstanceFactory.setSmsCost(Number(smsCostSettingElement.value)));
  // Number(settingsInstanceFactory.getSmsCost());
  Number(settingsInstanceFactory.setWarningLevel(warningLevelSettingElement.value));
  // Number(settingsInstanceFactory.getWarningLevel());
  Number(settingsInstanceFactory.setCriticalLevel(criticalLevelSettingElement.value));
  // Number(settingsInstanceFactory.getCriticalLevel());
   addClasses()

}

updateSettingsElement.addEventListener("click", updateSettings);

function billSettings() {
  var checkedRadioBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked")
    
  if (checkedRadioBtn) {
    settingsInstanceFactory.billPriceCalculation(checkedRadioBtn.value)
    // console.log(settingsInstanceFactory.sendSms())
  }

  addClasses()

  callTotalSettingsElement.innerHTML = settingsInstanceFactory.getTotalCallCost().toFixed(2);
  smsTotalSettingsElement.innerHTML = settingsInstanceFactory.getTotalSmsCost().toFixed(2);
  totalSettingsElement.innerHTML = settingsInstanceFactory.getTotalCost().toFixed(2);


}


function addClasses(){
  totalSettingsElement.classList.remove('warning');
  totalSettingsElement.classList.remove('danger');
  totalSettingsElement.classList.add(settingsInstanceFactory.totalClassName());
}

radioButtonElement.addEventListener("click", billSettings);
