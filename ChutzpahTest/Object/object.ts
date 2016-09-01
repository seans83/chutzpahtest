class TestObject {

    constructor() {
        this.makeAjaxCall();
        this.makeAjaxCall2();
        this.makeAjaxCall3();
        this.makeAjaxCall4();
        this.makeGetJsonCall();
        this.makeGetJsonCall2();
        this.makeGetJsonCall3();
        this.makeGetJsonCall4();
    }

    makeAjaxCall() {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    }

    makeAjaxCall2() {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    }

    makeAjaxCall3() {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    }

    makeAjaxCall4() {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    }

    makeAjaxCall5() {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    }

    makeAjaxCall6() {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    }

    makeAjaxCall7() {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    }

    makeAjaxCall8() {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    }

    makeAjaxCall9() {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    }

    makeAjaxCall10() {
        $.ajax({
            url: "/Controller/SomeMethod",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            success: $.proxy(this.onMakeAjaxCall, this)
        });
    }

    onMakeAjaxCall(data: any) {
        return;
    }

    makeGetJsonCall() {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    }

    makeGetJsonCall2() {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    }

    makeGetJsonCall3() {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    }

    makeGetJsonCall4() {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    }

    makeGetJsonCall5() {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    }

    makeGetJsonCall6() {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    }

    makeGetJsonCall7() {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    }

    makeGetJsonCall8() {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    }

    makeGetJsonCall9() {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    }

    makeGetJsonCall10() {
        $.getJSON("/Controller/SomeMethod", null, $.proxy(this.onMakeGetJsonCall, this));
    }

    onMakeGetJsonCall(data: any) {
        return;
    }

}
