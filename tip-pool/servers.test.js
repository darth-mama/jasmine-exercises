describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server table on updateServerTable()', function() {

  })

  it('should create a new row and delete it', function() {
    let newTr = document.createElement('tr');
    appendTd(newTr, 'test');
    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(2);
});

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allServers = {};
  });
});
