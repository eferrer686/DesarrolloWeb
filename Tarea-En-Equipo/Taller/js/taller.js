// Leer JSON
var taller = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "../js/taller.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

function agregarVehiculo(){
  var marca = document.getElementsByName("marca")[0].value;
  var modelo = document.getElementsByName("modelo")[0].value;
  var año = document.getElementsByName("año")[0].value;
  var placa = document.getElementsByName("placa")[0].value;

  var coche = {Marca: marca,Modelo: modelo,Año: año,Placa: placa};
  console.log(JSON.stringify(coche));
}

function agregarCliente(){
  var nombre = document.getElementsByName("nombre")[0].value;
  var domicilio = document.getElementsByName("domicilio")[0].value;
  var telefono = document.getElementsByName("telefono")[0].value;

  var cliente = {Nombre: nombre,Domicilio: domicilio,Telefono: telefono};
  console.log(cliente);
}

function agregarServicio(){
  console.log("Servicio agregado");
}

function loadClientesToSelect(){

  html="";
  for (var i = 0; i < this.taller.Taller.length; i++) {
    html+="<option>"+this.taller.Taller[i].Nombre+"</option>";
  }
  document.getElementById("selectCliente").innerHTML=html;
}
function loadCochesToSelect(){
  html="";
  for (var i = 0; i < this.taller.Taller.length; i++) {
    var cliente = document.getElementById("selectCliente").value;
    if(this.taller.Taller[i].Nombre==cliente){
      for (var j = 0; j < this.taller.Taller[i].Coche.length; j++) {

        html+="<option>"+this.taller.Taller[i].Coche[j].Placa+"</option>";
      }
    }
  }
  document.getElementById("selectCoche").innerHTML=html;
}
function updateServiciosPage(){
  loadClientesToSelect();
  loadCochesToSelect();
}
