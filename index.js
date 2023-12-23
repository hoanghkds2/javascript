function Student(name, year, toan, ly, hoa) {
    this.name = name;
    this.year = year;
    this.toan = parseFloat(toan);
    this.ly = parseFloat(ly);
    this.hoa = parseFloat(hoa);
    this.dtb = 0;
    this.hl = "None";
}

var students = [];

function Add() {
    var name = $("#name").val();
    var year = $("#year").val();
    var toan = $("#toan").val();
    var ly = $("#ly").val();
    var hoa = $("#hoa").val();

    var newStudent = new Student(name, year, toan, ly, hoa);
    students.push(newStudent);
    in_DSSV();
}

function in_DSSV() {
    var table = $("#mytable");
    table.empty();
    
    $.each(students, function(i, student) {
        var tr = $("<tr>").attr("id", i); 
        table.append(tr);

        var tname = $("<td>").text(student.name);
        var tyear = $("<td>").text(student.year);
        var ttoan = $("<td>").text(student.toan);
        var tly = $("<td>").text(student.ly);
        var thoa = $("<td>").text(student.hoa);
        var tdtb = $("<td>").text(student.dtb);
        var thl = $("<td>").text(student.hl);

        tr.append(tname);
        tr.append(tyear);
        tr.append(ttoan);
        tr.append(tly);
        tr.append(thoa);
        tr.append(tdtb);
        tr.append(thl);
    });
}

function Average() {
    $.each(students, function(i, student) {
        student.dtb = (student.toan + student.ly + student.hoa) / 3;
    });
    in_DSSV();
}

function hocLuc() {
    $.each(students, function(i, student) {
        if (student.dtb >= 8) {
            student.hl = "Giỏi";
        } else if (student.dtb < 8 && student.dtb > 5) {
            student.hl = "Khá";
        } else if (student.dtb < 5 && student.dtb > 3) {
            student.hl = "Trung Bình";
        } else {
            student.hl = "Yếu";
        }
    });
    in_DSSV();
}
