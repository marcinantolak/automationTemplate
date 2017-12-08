var chakram = require('../node_modules/chakram/lib/chakram.js'),
    expect = chakram.expect;

describe("Example API test", function() {
    var apiResponse;

    before(function () {
        apiResponse = chakram.get("https://exampleEdnpoint");
        return apiResponse;
         /* TO DO
         post put del
         reponse
         schema respone*/
    });

    it("should return 200 on success", function () {
        return expect(apiResponse).to.have.status(200);
    });
});