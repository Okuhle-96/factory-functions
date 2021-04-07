describe('SET VALUES', function(){
    it('should be able to SET call and sms values', function(){
        assert.equal(2,2)
    })
})

describe('Setting Bill Factory Function', function(){
    it('should be able to set call cost', function(){

        let settingBill = BillWithSettings();

        settingBill.setCallCost(1.85);
        assert.equal(settingBill.getCallCost(), 1.85);

        let settingBill2 = BillWithSettings();

        settingBill2.setCallCost(2.75);
        assert.equal(settingBill2.getCallCost(), 2.75);

    });

    it('should be able to set sms cost', function(){

        let settingBill = BillWithSettings();

        settingBill.setSmsCost(0.85);
        assert.equal(settingBill.getSmsCost(), 0.85);

        let settingBill2 = BillWithSettings();

        settingBill2.setSmsCost(0.75);
        assert.equal(settingBill2.getSmsCost(), 0.75);

    });

    it('should be able to set call and sms cost', function(){

        let settingBill = BillWithSettings();

        settingBill.setSmsCost(0.85);
        settingBill.setCallCost(1.85);

        assert.equal(settingBill.getSmsCost(), 0.85);
        assert.equal(settingBill.getCallCost(), 1.85);

        let settingBill2 = BillWithSettings();

        settingBill2.setCallCost(2.75);
        settingBill2.setSmsCost(0.75);
       
        assert.equal(settingBill2.getCallCost(), 2.75);
        assert.equal(settingBill2.getSmsCost(), 0.75);

    });

    it('should be able to set the warning level', function(){

        let settingBill = BillWithSettings();

        settingBill.setWarningLevel(20);
        assert.equal(settingBill.getWarningLevel(), 20);
       
    });

    it('should be able to set the critical level', function(){

        let settingBill = BillWithSettings();

        settingBill.setCriticalLevel(50);
        assert.equal(settingBill.getCriticalLevel(), 50);
       
    });

    it('should be able to set the warning and critical level', function(){

        let settingBill = BillWithSettings();

        settingBill.setWarningLevel(30);
        settingBill.setCriticalLevel(60);

        assert.equal(settingBill.getWarningLevel(), 30);
        assert.equal(settingBill.getCriticalLevel(), 60);
       
    });
})

describe('USE VALUES', function(){
    it('should be able to USE call and sms values SET', function(){
        let settingBill = BillWithSettings();

        settingBill.setCallCost(2.25);
        settingBill.setSmsCost(0.85);
        settingBill.setCriticalLevel(10);

        settingBill.makeCall();
        settingBill.makeCall();
        settingBill.makeCall();

        assert.equal(6.75, settingBill.getTotalCost());
        assert.equal(6.75, settingBill.getTotalCallCost());
        assert.equal(0.00, settingBill.getTotalSmsCost());
    });

    it('should be able to make 2 calls at 1.35 each call', function(){
        let settingBill = BillWithSettings();

        settingBill.setCallCost(1.35);
        settingBill.setCriticalLevel(10);

        settingBill.makeCall();
        settingBill.makeCall();

        assert.equal(2.70, settingBill.getTotalCost());
        assert.equal(2.70, settingBill.getTotalCallCost());
        assert.equal(0.00, settingBill.getTotalSmsCost());
    });

    it('should be able to send 2 sms`s cost at 0.85 each', function(){
        let settingBill = BillWithSettings();

        settingBill.setSmsCost(0.85);
        settingBill.setCriticalLevel(10);

        settingBill.sendSms();
        settingBill.sendSms();

        assert.equal(1.70, settingBill.getTotalCost());
        assert.equal(0.00, settingBill.getTotalCallCost());
        assert.equal(1.70, settingBill.getTotalSmsCost());
    })

    it('should be able to send 2 sms`s cost at 0.50 each and make 2 calls at 1.50 each', function(){
        let settingBill = BillWithSettings();

        settingBill.setSmsCost(0.50);
        settingBill.setCallCost(1.50);
        settingBill.setCriticalLevel(10);

        settingBill.sendSms();
        settingBill.sendSms();

        settingBill.makeCall();
        settingBill.makeCall();

        assert.equal(4.00, settingBill.getTotalCost());
        assert.equal(3.00, settingBill.getTotalCallCost());
        assert.equal(1.00, settingBill.getTotalSmsCost());
    })
})

describe('WARNING AND CRITICAL LEVEL', function(){
    it('should return a class name of "warning" if warning level is reached', function(){
        let settingBill = BillWithSettings();

        settingBill.setSmsCost(0.50);
        settingBill.setCallCost(1.50);
        settingBill.setWarningLevel(4);
        settingBill.setCriticalLevel(10);

        settingBill.sendSms();
        settingBill.sendSms();

        settingBill.makeCall();
        settingBill.makeCall();

        assert.equal("warning", settingBill.totalClassName())
    });

    it('should return a class name of "critical" if critical level is reached', function(){
        let settingBill = BillWithSettings();

        settingBill.setSmsCost(1.50);
        settingBill.setCallCost(3.50);
        settingBill.setWarningLevel(4);
        settingBill.setCriticalLevel(10);

        settingBill.sendSms();
        settingBill.sendSms();

        settingBill.makeCall();
        settingBill.makeCall();

        assert.equal("critical", settingBill.totalClassName())
    });

    it('should stop the Total Call Cost from increasing when it has reached the critical level', function(){
        let settingBill = BillWithSettings();

        settingBill.setSmsCost(1.50);
        settingBill.setCallCost(3.50);
        settingBill.setWarningLevel(4);
        settingBill.setCriticalLevel(10);

        settingBill.sendSms();
        settingBill.sendSms();

        settingBill.makeCall();
        settingBill.makeCall();
        settingBill.makeCall();

        assert.equal("critical", settingBill.totalClassName())
        assert.equal(10, settingBill.getTotalCost())
    });

    it('should allow the Total to increase after reaching critical level and increase the critical level', function(){
        let settingBill = BillWithSettings();

        settingBill.setSmsCost(1.50);
        settingBill.setCallCost(3.50);
        settingBill.setWarningLevel(7);
        settingBill.setCriticalLevel(10);

        settingBill.sendSms();
        settingBill.sendSms();

        settingBill.makeCall();
        settingBill.makeCall();
        settingBill.makeCall();

        assert.equal("critical", settingBill.totalClassName())
        assert.equal(10, settingBill.getTotalCost())

        settingBill.setCriticalLevel(20);

        assert.equal("warning", settingBill.totalClassName())
        settingBill.makeCall();
        settingBill.makeCall();
        assert.equal(17, settingBill.getTotalCost())
    })
})