var TestObject = (function () {
    function TestObject() {
        this.makeAjaxCall();
        this.makeAjaxCall2();
        this.makeAjaxCall3();
        this.makeAjaxCall4();
        this.makeGetJsonCall();
        this.makeGetJsonCall2();
        this.makeGetJsonCall3();
        this.makeGetJsonCall4();
    }
    TestObject.prototype.makeAjaxCall = function () {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    };
    TestObject.prototype.makeAjaxCall2 = function () {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    };
    TestObject.prototype.makeAjaxCall3 = function () {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    };
    TestObject.prototype.makeAjaxCall4 = function () {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    };
    TestObject.prototype.makeAjaxCall5 = function () {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    };
    TestObject.prototype.makeAjaxCall6 = function () {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    };
    TestObject.prototype.makeAjaxCall7 = function () {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    };
    TestObject.prototype.makeAjaxCall8 = function () {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    };
    TestObject.prototype.makeAjaxCall9 = function () {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    };
    TestObject.prototype.makeAjaxCall10 = function () {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    };
    TestObject.prototype.onMakeAjaxCall = function (data) {
        return;
    };
    TestObject.prototype.makeGetJsonCall = function () {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    };
    TestObject.prototype.makeGetJsonCall2 = function () {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    };
    TestObject.prototype.makeGetJsonCall3 = function () {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    };
    TestObject.prototype.makeGetJsonCall4 = function () {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    };
    TestObject.prototype.makeGetJsonCall5 = function () {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    };
    TestObject.prototype.makeGetJsonCall6 = function () {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    };
    TestObject.prototype.makeGetJsonCall7 = function () {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    };
    TestObject.prototype.makeGetJsonCall8 = function () {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    };
    TestObject.prototype.makeGetJsonCall9 = function () {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    };
    TestObject.prototype.makeGetJsonCall10 = function () {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    };
    TestObject.prototype.onMakeGetJsonCall = function (data) {
        return;
    };
    return TestObject;
}());
