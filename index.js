function Student(name, year, math, physics, chemistry) {
    this.name = name;
    this.year = year;
    this.math = parseFloat(math);
    this.physics = parseFloat(physics);
    this.chemistry = parseFloat(chemistry);
    this.average = 0;
    this.type = "None";
  }
  
let students = [];
  
function Add() {
    let name = $("#name").val();
    let year = $("#year").val();
    let math = $("#toan").val();
    let physics = $("#ly").val();
    let chemistry = $("#hoa").val();
    if (name.trim().length === 0) {
        alert("Please enter your name");
    } 
    else if (isNaN(math) || math > 10 || math <0 ) {
        alert("Invalid score");
    }
    else if (isNaN(physics) || physics < 0 || physics > 10) {
        alert("Invalid score");
    }
    else if (chemistry < 0 || chemistry > 10 || isNaN(chemistry)) {
        alert("Invalid score");
    } else {
        let newStudent = new Student(name, year, math, physics, chemistry);
        students.push(newStudent);
        in_DSSV();
    }
}
  
  function in_DSSV() {
    let table = $("#mytable");
    table.empty();
    
    $.each(students, function(i, student) {
      var tr = $("<tr>").attr("id", i); 
      table.append(tr);
  
      let tname = $("<td>").text(student.name);
      let tyear = $("<td>").text(student.year);
      let tmath = $("<td>").text(student.math);
      let tphysics = $("<td>").text(student.physics);
      let tchemistry = $("<td>").text(student.chemistry);
      let taverage = $("<td>").text(student.average);
      let ttype = $("<td>").text(student.type);
  
      tr.append(tname);
      tr.append(tyear);
      tr.append(tmath);
      tr.append(tphysics);
      tr.append(tchemistry);
      tr.append(taverage);
      tr.append(ttype);
    });
  }
  
  function countAverage() {
    $.each(students, function(_i, student) {
      student.average = (student.math + student.physics + student.chemistry) / 3;
    });
    in_DSSV();
  }
  
  function hocLuc() {
    $.each(students, function(_i, student) {
      if (student.average >= 8) {
        student.type = "Giỏi";
      } else if (student.average >= 5) {
        student.type = "Khá";
      } else if (student.average >= 3) {
        student.type = "Trung Bình";
      } else {
        student.type = "Yếu";
      }
    });
    in_DSSV();
  }
