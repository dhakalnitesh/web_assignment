document.getElementById("simForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("simname_nitesh").value.trim();
    let citizen = document.getElementById("citizen_nitesh").value.trim();
    let dob = document.getElementById("dob_sim_nitesh").value;
    let terms = document.getElementById("terms_nitesh").checked;
    let sim = document.querySelector('input[name="simtype_nitesh"]:checked');

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name must contain only letters.");
        return;
    }

    let cleanCitizen = citizen.replace(/[^A-Za-z0-9]/g, "");
    if (cleanCitizen.length < 10) {
        alert("Citizenship number must be at least 10 characters.");
        return;
    }

    if (!dob) {
        alert("Please select your Date of Birth.");
        return;
    }

    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    if (!sim) {
        alert("Please select a SIM type.");
        return;
    }

    if (!terms) {
        alert("You must accept the Terms & Conditions.");
        return;
    }

    document.getElementById("result_nitesh").innerHTML =
        "SIM Registered Successfully ";
         setTimeout(function() {
        resultDiv.innerHTML = "";
        document.getElementById("simForm").reset();
    }, 5000);
});
