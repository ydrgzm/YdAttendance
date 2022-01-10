var num;
window.onload = function() {
    var btn = document.getElementsByClassName("nextBtn")[0];

    btn.addEventListener('click', function() {
        var field = document.getElementById("inputField");
        num = document.getElementById("count").value;
        if (num == '') { num = -2; }
        if (num < 0) {
            alert("Enter Positive number!");
            document.getElementById("count").value = '';
        } else {
            var inp = "<table id='tab1' cellspacing='30px' style='width: 100% ;padding: 15px;'>";
            inp += "<tbody><tr><th>Courses (Optional)</th><th>Credits</th><th>Grade</th></tr></tbody><tbody>";
            var c = 0;
            for (let index = 0; index < num * 3; index++) {
                if (c == 0) {
                    inp += "<tr>"
                } else if (c == 2) {
                    inp += "<td><select class='form-select row" + (parseInt(index / 3) + 1) + "' style='margin-top:-20px'> <" +
                        "option selected>Grade</option> <" +
                        "option value = '4'>A+</option><" +
                        "option value = '4'>A</option><" +
                        "option value = '3.7'>A-</option><" +
                        "option value = '3.3'>B+</option><" +
                        "option value = '3'>B</option><" +
                        "option value = '2.7'>B-</option><" +
                        "option value = '2.3'>C+</option><" +
                        "option value = '2'>C</option><" +
                        "option value = '1.7'>C-</option><" +
                        "option value = '1'>D</option><" +
                        "option value = '0'>F</option></select></td>"
                    c++;
                    if (c == 3) {
                        inp += "</tr>"
                        c = 0;
                    }
                    continue;
                }

                inp += "<td><div class='form-outline mb-4'>" +
                    "<input type=";
                if (c == 0) {
                    inp += "text";
                } else if (c == 1) {
                    inp += "number";
                }
                inp += " id='cell" + index +
                    "' class='form-control row" + (parseInt(index / 3) + 1) + "' autocomplete = 'off'required > " +
                    "<label class='form-label' for='row' style='margin-left: 0px '>";
                if (c == 0) {
                    inp += "Subject Name";
                } else if (c == 1) {
                    inp += "CH";
                }

                inp += "</label>" +
                    "<div class='form-notch'>" +
                    "<div class='form-notch-leading' style='width: 9px'></div>" +
                    "<div class='form-notch-middle' style='width: 88.8px;'></div>" +
                    "<div class='form-notch-trailing'></div>" +
                    "</div></div></td>";
                c++;
            }
            inp += "</tbody></table>";
            inp += "<button class='btn btn-primary ripple-surface calBtn'>Calculate</button>"
            field.innerHTML = inp;
        }
    });
}
$('body').on('click', ".calBtn", function() {
    var totalWeightage = 0,
        tCredits = 0,
        gpoint = 0;
    for (let index = 1; index <= num; index++) {
        var row = document.getElementsByClassName("row" + index);
        var ind = 0;
        var arr = [];
        row.forEach(element => {
            arr[ind] = element.value;
            if (ind == 1) {
                tCredits += Number(arr[ind]);
            }
            ind++;
        });
        gpoint += arr[1] * arr[2];

    }
    totalWeightage = gpoint / tCredits;
    document.getElementById('result').innerHTML = "You have " + totalWeightage.toPrecision(4) + " out of 4.";
});