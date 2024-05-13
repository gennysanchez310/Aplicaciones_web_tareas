var selectDia = document.getElementById("dia");
var blankOptionDia = document.createElement("option");
blankOptionDia.text = "Dia";
blankOptionDia.value = "";
selectDia.add(blankOptionDia);

for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.text = i;
  option.value = i;
  selectDia.add(option);
}

var selectMes = document.getElementById("mes");
var blankOptionMes = document.createElement("option");
blankOptionMes.text = "Mes";
blankOptionMes.value = "";
selectMes.add(blankOptionMes);

for (var i = 1; i <= 12; i++) {
  var option = document.createElement("option");
  option.text = i;
  option.value = i;
  selectMes.add(option);
}

var selectYear = document.getElementById("Year");
var blankOptionYear = document.createElement("option");
blankOptionYear.text = "Año";
blankOptionYear.value = "";
selectYear.add(blankOptionYear);

var currentYear = new Date().getFullYear();
for (var year = 2000; year <= currentYear; year++) {
  var option = document.createElement("option");
  option.text = year;
  option.value = year;
  selectYear.add(option);}

  var selectDia = document.getElementById("diapas");
var blankOptionDia = document.createElement("option");
blankOptionDia.text = "Dia";
blankOptionDia.value = "";
selectDia.add(blankOptionDia);

for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.text = i;
  option.value = i;
  selectDia.add(option);
}

var selectMes = document.getElementById("mespas");
var blankOptionMes = document.createElement("option");
blankOptionMes.text = "Mes";
blankOptionMes.value = "";
selectMes.add(blankOptionMes);

for (var i = 1; i <= 12; i++) {
  var option = document.createElement("option");
  option.text = i;
  option.value = i;
  selectMes.add(option);
}

var selectYear = document.getElementById("Yearpas");
var blankOptionYear = document.createElement("option");
blankOptionYear.text = "Año";
blankOptionYear.value = "";
selectYear.add(blankOptionYear);

var currentYear = new Date().getFullYear();
for (var year = 2000; year <= currentYear; year++) {
  var option = document.createElement("option");
  option.text = year;
  option.value = year;
  selectYear.add(option);
}



var selectDia = document.getElementById("diapasvenc");
var blankOptionDia = document.createElement("option");
blankOptionDia.text = "Dia";
blankOptionDia.value = "";
selectDia.add(blankOptionDia);

for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.text = i;
  option.value = i;
  selectDia.add(option);
}

var selectMes = document.getElementById("mespasvenc");
var blankOptionMes = document.createElement("option");
blankOptionMes.text = "Mes";
blankOptionMes.value = "";
selectMes.add(blankOptionMes);

for (var i = 1; i <= 12; i++) {
  var option = document.createElement("option");
  option.text = i;
  option.value = i;
  selectMes.add(option);
}

var selectYear = document.getElementById("Yearpasvenc");
var blankOptionYear = document.createElement("option");
blankOptionYear.text = "Año";
blankOptionYear.value = "";
selectYear.add(blankOptionYear);

var currentYear = new Date().getFullYear();
for (var year = 2000; year <= currentYear; year++) {
  var option = document.createElement("option");
  option.text = year;
  option.value = year;
  selectYear.add(option);
}



