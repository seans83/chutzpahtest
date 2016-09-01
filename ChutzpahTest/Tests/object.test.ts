describe("TestObject - bunch of tests", () => {

    var obj: TestObject;

    beforeEach(() => {
        obj = new TestObject();
    });

    it("should call ajax method 01", () => {
        spyOn($, "ajax"); 
        obj.makeAjaxCall();     
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod", 
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });  
    }); 

    it("should call ajax method 02", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 03", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 04", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 05", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 06", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 07", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 08", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 09", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 10", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 11", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();  
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 12", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 13", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 14", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 15", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 16", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 17", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 18", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 19", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call ajax method 20", () => {
        spyOn($, "ajax");
        obj.makeAjaxCall();
        expect($.ajax).toHaveBeenCalledWith({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: jasmine.any(Function)
        });
    });

    it("should call getJson method 01", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 02", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 03", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 04", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 05", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 06", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 07", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 08", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 09", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 10", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 11", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 12", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 13", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 14", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 15", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 16", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 17", () => { 
        spyOn($, "getJSON"); 
        obj.makeGetJsonCall();  
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 18", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 19", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });

    it("should call getJson method 20", () => {
        spyOn($, "getJSON");
        obj.makeGetJsonCall();
        expect($.getJSON).toHaveBeenCalledWith("/Controller/SomeMethod", null, jasmine.any(Function));
    });
});