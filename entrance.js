let today = new Date().toISOString().split("T")[0];
  document.getElementById("dob_nitesh").setAttribute("max", today);

  document.getElementById("dob_nitesh").addEventListener("change", calculateAge);

  function calculateAge() {
    let dobValue = document.getElementById("dob_nitesh").value;

    if (dobValue === "") {
      document.getElementById("age_nitesh").value = "";
      return;
    }

    let birthYear = new Date(dobValue).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    document.getElementById("age_nitesh").value = age;
  }

  function validateEntrance_nitesh() {
    let name = document.getElementById("fullname_nitesh").value.trim();
    let dob = document.getElementById("dob_nitesh").value;
    let age = document.getElementById("age_nitesh").value;
    let phone = document.getElementById("phone_nitesh").value.trim();
    let email = document.getElementById("email_nitesh").value.trim();
    let agree = document.getElementById("agree_nitesh").checked;
    let gender = document.querySelector('input[name="gender_nitesh"]:checked');

    if (!/^[A-Za-z][A-Za-z ]*$/.test(name)) {
      alert("Name must start with a letter and contain only letters.");
      return false;
    }

    if (dob === "") {
      alert("Select a valid date of birth.");
      return false;
    }

    if (age < 16 || age > 30) {
      alert("Your age must be between 16 and 30.");
      return false;
    }

    if (!/^(97|98)[0-9]{8}$/.test(phone)) {
      alert("Phone must be 10 digits and start with 97 or 98.");
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format.");
      return false;
    }

    if (!gender) {
      alert("Please select gender.");
      return false;
    }

    if (!agree) {
      alert("You must confirm the details.");
      return false;
    }

    alert("Registration Successful!");

    setTimeout(function () {
      document.querySelector("form").reset();
    }, 5000);

    return false;
  }