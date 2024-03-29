(function() {
    var containerwidth;
    var left;
    var _width;
    var dolarBCVText;
    var efemeridesText;
    createMarquee();

    function getBCVRate() {
      return new Promise(function(resolve, reject) {
        var serverUrl = 'https://bcv-dolar-main-gxg12sibzgih.runkit.sh/';

        $.ajax({
          url: serverUrl,
          success: function(result){
            var tasa = result['tasa'];
            var tasa_final = parseFloat(tasa.replace(",", ".")).toFixed(2);
            dolarBCVText = 'Dólar BCV ' + tasa_final + ' Bs/USD';
            resolve();
          },
          error: function(error){
            console.log('Error loading data from BCV'+JSON.stringify(error));
            resolve();
          }
        });
      });
    }

    function loadEfemerides() {
      return new Promise(function(resolve, reject) {
        $.ajax({
          url: "/efemerides/efemerides.json",
          dataType: "json",
          success: function(data) {
            var today = new Date();
            var day = today.getDate();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();
            var dayOfWeek = obtenerDiaSemanaActual();
            var formattedDate = day +  ' de ' + getMonthName(month);
            if (data.hasOwnProperty(formattedDate)) {
              var eventos = data[formattedDate];
              var textoEfemerides = '    |     Efemérides del día de hoy '+dayOfWeek+' '+formattedDate+' de '+year+'  -  ';
              if (Array.isArray(eventos)) {
                for (var i = 0; i < eventos.length; i++) {
                  textoEfemerides += eventos[i];
                  if (i < eventos.length - 1) {
                    textoEfemerides += '  •  ';
                  }
                }
                efemeridesText = textoEfemerides;
              } else {
                efemeridesText = textoEfemerides + eventos;
              }
            }
            resolve();
          },
          error: function(error) {
            console.error("Error al cargar el archivo JSON: ", error);
            resolve();
          }
        });
      });
    }

    function getMonthName(month) {
      var months = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
      ];
      return months[month - 1];
    }

    function obtenerDiaSemanaActual() {
      var diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
      var today = new Date();
      var diaSemana = today.getDay();
      return diasSemana[diaSemana];
    }

    function createMarquee() {
      var marqueeData = document.getElementById("marqueeData");

      Promise.all([getBCVRate(), loadEfemerides()]).then(function() {
        var spanDolarBCV = document.createElement("span");
        spanDolarBCV.style.whiteSpace = "pre";
        spanDolarBCV.textContent = dolarBCVText;
        marqueeData.appendChild(spanDolarBCV);

        var spanEfemerides = document.createElement("span");
        spanEfemerides.style.whiteSpace = "pre";
        spanEfemerides.textContent = efemeridesText;
        marqueeData.appendChild(spanEfemerides);

        var width = $('.marquee-content').width(function(n, newWidth){
          _width = newWidth;
        });

        containerwidth = $('.marquee-container').width();
        left = containerwidth;
        tick();
      }).catch(function(error) {
        console.error("Error:", error);
      });
    }

    function tick() {
      left -= 1;
      if (left < -_width) {
        left = containerwidth;
      }
      document.querySelector(".marquee-content").style.marginLeft = left + "px";
      requestAnimationFrame(tick);
    }
})();