"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var header_service_1 = require("./header.service");
describe('HeaderService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(header_service_1.HeaderService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=header.service.spec.js.map