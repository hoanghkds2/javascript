
var arrST = [];
var index = 0;
var count = 0;
var dtb = "None";
var hl = "None";
function Add() {
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var toan = parseFloat(document.getElementById("toan").value);
    var ly = parseFloat(document.getElementById("ly").value);
    var hoa = parseFloat(document.getElementById("hoa").value);

    var objSt = {
        name: name,
        year: year,
        toan: toan,
        ly: ly,
        hoa: hoa,
        dtb: dtb,
        hl: hl
    }
    arrST.push(objSt);
    in_DSSV();
}

function in_DSSV() {
    var table = document.getElementById("mytable");
    table.innerHTML = "";
    count++;


    for (var i = 0; i < arrST.length; i++) {
        var obj = arrST[i];
        var tr = document.createElement("tr");
        table.append(tr);
        tr.id = index;

        var tname = document.createElement("td");
        var tyear = document.createElement("td");
        var ttoan = document.createElement("td");
        var tly = document.createElement("td");
        var thoa = document.createElement("td");
        var tdtb = document.createElement("td");
        var thl = document.createElement("td");

        tr.append(tname);
        tr.append(tyear);
        tr.append(ttoan);
        tr.append(tly);
        tr.append(thoa);
        tr.append(tdtb);
        tr.append(thl);

        tname.innerHTML = obj.name;
        tyear.innerHTML = obj.year;
        ttoan.innerHTML = obj.toan;
        tly.innerHTML = obj.ly;
        thoa.innerHTML = obj.hoa;
        tdtb.innerHTML = obj.dtb
        thl.innerHTML = obj.hl;

    }
    index += 1;
}

function Average() {

    for (var i = 0; i < arrST.length; i++) {
        arrST[i].dtb = (arrST[i].toan + arrST[i].ly + arrST[i].hoa) / 3;
    }
    in_DSSV();


}

function hocLuc() {
    for (var i = 0; i < arrST.length; i++) {
        if (arrST[i].dtb >= 8) {
            arrST[i].hl = "Giỏi"
        } else if (arrST[i].dtb < 8 && arrST[i].dtb > 5) {
            arrST[i].hl = "Khá"
        } else if (arrST[i].dtb < 5 && arrST[i].dtb > 3) {
            arrST[i].hl = "Trung Bình"
        } else {
            arrST[i].hl = "Yếu"
        }
    }
    in_DSSV();
}




