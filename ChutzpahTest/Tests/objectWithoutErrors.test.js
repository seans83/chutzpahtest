describe("TestWithoutErrors - bunch of tests", function () {
    var obj;
    beforeEach(function () {
        obj = new TestObject();
    });
    it("should call ajax method 01", function () {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });
    it("should call ajax method 02", function () {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });
    it("should call ajax method 03", function () {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });
    it("should call ajax method 04", function () {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });
    it("should call ajax method 05", function () {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });
    it("should call ajax method 06", function () {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });
    it("should call ajax method 07", function () {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });
    it("should call ajax method 08", function () {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });
    it("should call ajax method 09", function () {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });
    it("should call ajax method 10", function () {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });
    it("should call getJson method 01", function () {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
    it("should call getJson method 02", function () {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
    it("should call getJson method 03", function () {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
    it("should call getJson method 04", function () {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
    it("should call getJson method 05", function () {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
    it("should call getJson method 06", function () {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
    it("should call getJson method 07", function () {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
    it("should call getJson method 08", function () {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
    it("should call getJson method 09", function () {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
    it("should call getJson method 10", function () {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
});
