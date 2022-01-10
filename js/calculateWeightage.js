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
            inp += "<tbody><tr><th>Obt. Marks</th><th>Total Marks</th><th>Weightage</th></tr></tbody><tbody>";
            var c = 0;
            for (let index = 0; index < num * 3; index++) {
                if (c == 0) {
                    inp += "<tr>"
                }

                inp += "<td><div class='form-outline mb-4'>" +
                    "<input type='number' id='cell" + index +
                    "' class='form-control row" + (parseInt(index / 3) + 1) + "' autocomplete = 'off'required > " +
                    "<label class='form-label' for='row' style='margin-left: 0px '>";
                if (c == 0) {
                    inp += "Obt. Marks";
                } else if (c == 1) {
                    inp += "Total Marks";
                } else {
                    inp += "Weightage (%)"
                }

                inp += "</label>" +
                    "<div class='form-notch'>" +
                    "<div class='form-notch-leading' style='width: 9px'></div>" +
                    "<div class='form-notch-middle' style='width: 88.8px;'></div>" +
                    "<div class='form-notch-trailing'></div>" +
                    "</div></div></td>";
                c++;
                if (c == 3) {
                    inp += "</tr>"
                    c = 0;
                }
            }
            inp += "</tbody></table>";
            inp += "<button class='btn btn-primary ripple-surface calBtn'>Calculate</button>"
            field.innerHTML = inp;
        }
    });
}
$('body').on('click', ".calBtn", function() {
    var totalWeightage = 0;
    for (let index = 1; index <= num; index++) {
        var row = document.getElementsByClassName("row" + index);
        var ind = 0;
        var arr = [];
        row.forEach(element => {
            arr[ind] = Number(element.value);
            ind++;
        });
        var weight = (arr[0] / arr[1]) * arr[2];
        totalWeightage += weight;
    }
    document.getElementById('result').innerHTML = "You have " + totalWeightage.toPrecision(4) + " out of 100.";
});