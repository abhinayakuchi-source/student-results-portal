// Get the student registration form
const form = document.getElementById("studentForm");

// Handle form submission
form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get student details
    const studentName =
        document.getElementById("studentName").value.trim();

    const rollNumber =
        document.getElementById("rollNumber").value.trim();

    const course =
        document.getElementById("course").value;

    const year =
        document.getElementById("year").value;

    // Get subject marks
    const mark1 =
        Number(document.getElementById("mark1").value);

    const mark2 =
        Number(document.getElementById("mark2").value);

    const mark3 =
        Number(document.getElementById("mark3").value);

    const mark4 =
        Number(document.getElementById("mark4").value);

    const mark5 =
        Number(document.getElementById("mark5").value);


    // Store all marks in an array
    const marks = [
        mark1,
        mark2,
        mark3,
        mark4,
        mark5
    ];


    // Check whether marks are valid
    const invalidMarks = marks.some(function (mark) {

        return mark < 0 || mark > 100;

    });


    if (invalidMarks) {

        alert("Please enter marks between 0 and 100.");

        return;
    }


    // Calculate total marks
    const total =
        mark1 +
        mark2 +
        mark3 +
        mark4 +
        mark5;


    // Calculate percentage
    const percentage = total / 5;


    // Determine Pass or Fail
    // In this implementation, minimum 40 marks
    // is required in every subject.
    const passed = marks.every(function (mark) {

        return mark >= 40;

    });


    const status = passed ? "PASS" : "FAIL";


    // Display student information
    document.getElementById("displayName").textContent =
        studentName;

    document.getElementById("displayRoll").textContent =
        rollNumber;

    document.getElementById("displayCourse").textContent =
        course;

    document.getElementById("displayYear").textContent =
        year;


    // Display calculated result
    document.getElementById("totalMarks").textContent =
        total + " / 500";

    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";

    document.getElementById("status").textContent =
        status;


    // Show result card
    document.getElementById("resultCard")
        .classList.remove("d-none");


    // Show result message
    const resultMessage =
        document.getElementById("resultMessage");

    resultMessage.classList.remove("d-none");


    if (passed) {

        resultMessage.className =
            "alert alert-success";

        resultMessage.textContent =
            "Result calculated successfully! Student has PASSED.";

    } else {

        resultMessage.className =
            "alert alert-danger";

        resultMessage.textContent =
            "Result calculated successfully. Student has FAILED.";

    }


    // Scroll automatically to result section
    document.getElementById("result")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// Handle Reset button
form.addEventListener("reset", function () {

    // Hide result card
    document.getElementById("resultCard")
        .classList.add("d-none");

    // Hide result message
    document.getElementById("resultMessage")
        .classList.add("d-none");

});
