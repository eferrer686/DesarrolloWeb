

function agregarVehiculo(){
  var marca = document.getElementsByName("marca")[0].value;
  var modelo = document.getElementsByName("modelo")[0].value;
  var año = document.getElementsByName("año")[0].value;
  var placa = document.getElementsByName("placa")[0].value;

  var coche = {Marca: marca,Modelo: modelo,Año: año,Placa: placa};
  console.log(JSON.stringify(coche));

}
function agregarCliente(){
  console.log("Cliente agregado");
}
function agregarServicio(){
  console.log("Servicio agregado");
}


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

function printJSON(){
  console.log(taller);
};
