function showExp_nitesh(show) {
    if (show == true) {
        document.getElementById("expdetails_nitesh").style.display = "block";
    } else {
        document.getElementById("expdetails_nitesh").style.display = "none";
    }
}

document.getElementById("courseForm").onsubmit = function () {

    var name = document.getElementById("cname_nitesh").value;
    var email = document.getElementById("cemail_nitesh").value;
    var course = document.getElementById("course_nitesh").value;
    var expDetails = document.getElementById("expdetails_nitesh").value;

    var modes = document.getElementsByName("mode_nitesh");
    var experiences = document.getElementsByName("exp_nitesh");

    var modeSelected = false;
    for (var i = 0; i < modes.length; i++) {
        if (modes[i].checked == true) {
            modeSelected = true;
            break;
        }
    }

    var expSelected = false;
    var expValue = "";
    for (var i = 0; i < experiences.length; i++) {
        if (experiences[i].checked == true) {
            expSelected = true;
            expValue = experiences[i].value;
            break;
        }
    }

    if (name == "") {
        alert("Student Name is required");
        return false;
    }

    if (email == "") {
        alert("Email is required");
        return false;
    }

    var emailPattern = /^\S+@\S+\.\S+$/;
    if (emailPattern.test(email) == false) {
        alert("Please enter valid email");
        return false;
    }

    if (course == "") {
        alert("Please select a course");
        return false;
    }

    if (modeSelected == false) {
        alert("Please select mode of study");
        return false;
    }

    if (expSelected == false) {
        alert("Please select previous experience");
        return false;
    }

    if (expValue == "Yes" && expDetails == "") {
        alert("Please enter experience details");
        return false;
    }

    alert("Form submitted successfully!");

    setTimeout(function () {
        location.reload();
    }, 5000);

    return false;
};
