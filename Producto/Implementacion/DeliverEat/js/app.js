myApp = angular.module('myApp', []);
myApp.controller('main', function ($scope) {
  $scope.estadopedido = true;
  $scope.estadodireccion = false;
  $scope.estadopago = false;

  $scope.mostrarpedido = function () {
    $scope.estadopedido = true;
    $scope.estadodireccion = false;
    $scope.estadopago = false;
  }

  $scope.mostrardireccion = function () {
    $scope.estadodireccion = true;
    $scope.estadopedido = false;
    $scope.estadopago = false;
  }
  $scope.mostrarpago = function () {
    $scope.estadopago = true;
    $scope.estadopedido = false;
    $scope.estadodireccion = false;
  }


});
//CONTROLADOR DE PAGINA DIRECCION:
myApp.controller('direccion', function ($scope) {

  //SHOWS MAPS / DIRECCION
  $scope.shmaps = true;
  $scope.shdireccion = false;
  $scope.direccionenviorequerido = false;

  //FUNCION MOSTRAR / OCULTAR
  $scope.showmaps = function () {
    $scope.shmaps = true;
    $scope.shdireccion = false;
    $scope.direccionenviorequerido = false;
    $scope.inputcalle = "";
    $scope.inputnumero = "";
  };

  $scope.showdireccion = function () {
    $scope.shdireccion = true;
    $scope.shmaps = false;
    $scope.direccionenviorequerido = true;
  };

});
//CONTROLADOR DE PAGINA PAGO:
myApp.controller('pago', function ($scope) {

  //SHOWS CREDITO / EFECTIVO
  $scope.shcredito = true;
  $scope.shefectivo = false;
  $scope.efectivorequerido = false;

  //FUNCION MOSTRAR / OCULTAR
  $scope.showcredito = function () {
    $scope.shcredito = true;
    $scope.shefectivo = false;
    $scope.efectivorequerido = false;
    $scope.inputmonto = "";
  };

  $scope.showefectivo = function () {
    $scope.shefectivo = true;
    $scope.shcredito = false;
    $scope.efectivorequerido = true;
  };

});
//CONTROLADOR INDEX:
myApp.controller('index', function ($scope) {
  //Variable con la fecha actual para validar la fecha de recepcion
  $scope.currentDate = new Date();
  $scope.fecharequerido = true;
  $scope.loantesposiblerequerido = false;
  $scope.estadoinputsfecha = false;
  $scope.dataindex = [];
  //Esta funcion activa y desactiva los inputs de fecha y hora cuando se clickea en "Recibir lo antes posible", tambien agrega el atributo required
  $scope.marcar = function () {
    if ($scope.estadoinputsfecha === true) {
      $scope.estadoinputsfecha = false;
      $scope.fecharequerido = true;
      $scope.loantesposiblerequerido = false;
    }
    else{
      $scope.estadoinputsfecha = true;
      $scope.fecharequerido = false;
      $scope.loantesposiblerequerido = true;
      $scope.inputfecha = "";
      $scope.inputhora = "";
    }
  }
  $scope.registrardatosindex = function () {
    $scope.dataindex.push({
      "descripcion": $scope.inputdescripcion,
      "loantesposible": $scope.inputloantesposible,
      "fecha": $scope.inputfecha,
      "hora": $scope.inputhora,
    });
    sessionStorage.setItem("descripcion", $scope.inputdescripcion);
  }
});
//IMAGE UPLOADER JS
$(document).ready(function () {
  $(document).on('change', '.btn-file :file', function () {
    var input = $(this),
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [label]);
  });

  $('.btn-file :file').on('fileselect', function (event, label) {

    var input = $(this).parents('.input-group').find(':text'),
      log = label;

    if (input.length) {
      input.val(log);
    } else {
      if (log) alert(log);
    }

  });
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#img-upload').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imgInp").change(function () {
    readURL(this);
  });
});


