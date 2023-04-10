describe("Helper tests", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should sum total tip amount on submitPaymentTotal', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    });

    it('should bill amount on submitPaymentTotal', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

    });

    it('should calculate tip percent', function() {
        expect(calculateTipPercent(100,10)).toEqual(10);

    });

    it('should create new row', function() {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should create a new row and delete it', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(2);
    })

    afterEach(function() {
      // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
  });
