function calculateResult() {
  let name = document.getElementById("name").value;
  let course = document.getElementById("course").value;
  let m1 = parseInt(document.getElementById("marks1").value);
  let m2 = parseInt(document.getElementById("marks2").value);
  let m3 = parseInt(document.getElementById("marks3").value);
  let m4 = parseInt(document.getElementById("marks4").value);
  let m5 = parseInt(document.getElementById("marks5").value);

  // Validation
  if (!name || !course || isNaN(m1) || isNaN(m2) || isNaN(m3) || isNaN(m4) || isNaN(m5)) {
    alert("⚠️ Please fill all fields correctly!");
    return;
  }
  if ([m1, m2, m3, m4, m5].some(m => m < 0 || m > 100)) {
    alert("Marks must be between 0 and 100!");
    return;
  }

  // Calculation
  let total = m1 + m2 + m3 + m4 + m5;
  let percentage = (total / 500) * 100; // 5 subjects → denominator 500
  let status = percentage >= 40 ? "Pass" : "Fail";

  // Insert into table
  let table = document.getElementById("resultTable").getElementsByTagName("tbody")[0];
  let newRow = table.insertRow();
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${course}</td>
    <td>${total}</td>
    <td>${percentage.toFixed(2)}%</td>
    <td>${status}</td>
  `;
}
