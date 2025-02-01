
$.ajax({
    url: "../../JSON/students-json/students.json",
    type: "get",
    success: function (response) {
        console.log(response);
        $.each(response, function (k, v) {
            if (typeof v === "object") {

                $.each(v, function (key, value) {
                    console.log(key + ": " + value);
                });
            } else {
                console.log(v);
            }
        });
    }
});


