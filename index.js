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
  
  $(document).ready(function () {
    $("form").submit(function (event) {
      event.preventDefault(); 
  
      if (validateForm()) {
        Add();
        clearForm();
      }
    });
  
    $("#averageButton").click(countAverage);
    $("#hocLucButton").click(hocLuc);
  });
  
  function validateForm() {
    let name = $("#name").val();
    let toan = parseFloat($("#toan").val());
    let ly = parseFloat($("#ly").val());
    let hoa = parseFloat($("#hoa").val());
  
    if (name.trim() === "") {
      alert("Vui lòng nhập tên.");
      return false;
    }
  
    if (isNaN(toan) || toan < 1 || toan > 10) {
      alert("Điểm Toán phải là một số từ 1 đến 10.");
      return false;
    }
  
    if (isNaN(ly) || ly < 1 || ly > 10) {
      alert("Điểm Lý phải là một số từ 1 đến 10.");
      return false;
    }
  
    if (isNaN(hoa) || hoa < 1 || hoa > 10) {
      alert("Điểm Hóa phải là một số từ 1 đến 10.");
      return false;
    }
  
    return true;
  }
  
  function Add() {
    let name = $("#name").val();
    let year = $("#year").val();
    let math = $("#toan").val();
    let physics = $("#ly").val();
    let chemistry = $("#hoa").val();
  
    let newStudent = new Student(name, year, math, physics, chemistry);
    students.push(newStudent);
    in_DSSV();
    
    return false;
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
  
  function clearForm() {
    $("#name").val("");
    $("#year").val("");
    $("#toan").val("");
    $("#ly").val("");
    $("#hoa").val("");
  }