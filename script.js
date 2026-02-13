document.getElementById("marksForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("sname_nitesh").value.trim();
    let roll = document.getElementById("roll_nitesh").value.trim();
    let eMark = parseFloat(document.getElementById("eng_nitesh").value);
    let mMark = parseFloat(document.getElementById("math_nitesh").value);
    let sMark = parseFloat(document.getElementById("sci_nitesh").value);

    if (eMark >= 0 && eMark > 100 || 
        mMark >= 0 && mMark > 100 || 
        sMark >= 0 && sMark >100) {
        alert("Marks must be 0 and less than 100.");
        return;
    }

    let total = eMark + mMark + sMark;
    let percent = (total / 3).toFixed(2);

    let result = (eMark >= 40 && mMark >= 40 && sMark >= 40) ? "Pass" : "Fail";

    let grade;
    if (percent >= 80) {
        grade = "A";
    } else if (percent >= 60) {
        grade = "B";
    } else if (percent >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    document.getElementById("result_nitesh").innerHTML =
        `<p>Name: ${name}</p>
         <p>Roll No: ${roll}</p>
         <p>Total: ${total.toFixed(2)}</p>
         <p>Percentage: ${percent}%</p>
         <p>Result: ${result}</p>
         <p>Grade: ${grade}</p>`;
});
