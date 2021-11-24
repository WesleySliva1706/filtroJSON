function search() {

    var filtro = document.getElementById('filtro').value;
    var txtInput = document.getElementById('txtInput').value;

    filtro = filtro.toUpperCase();
    txtInput = txtInput.toUpperCase();

    switch (filtro) {

        case 'TODOS':

            getCarrosAll();

            break;
            
        default:

            $(function () {
                $.getJSON("js/automoveis.json", function (data) {
                    for (var i = 0; i < data['automoveis'].length; i++) {

                        if (data['automoveis'][i][filtro].indexOf(txtInput) != -1) {

                            getCarros(i);

                        }

                    }
                });
            });

            break;
    }
};


function limparFiltros() {
    $(function () {
        $.getJSON("js/automoveis.json", function (data) {
            for (var i = 0; i < data['automoveis'].length; i++) {

                $("#TableData").remove();

            }
        });
    });

    window.location.href = "index.html";
};

function getCarros(i) {

    $(function () {
        $.getJSON("js/automoveis.json", function (data) {

                $("#TableData").append("<tr>");

                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");

                $("#TableData").append("<tr>");

        });
    });
}

function getCarrosAll() {

    $(function () {
        $.getJSON("js/automoveis.json", function (data) {
            for (var i = 0; i < data['automoveis'].length; i++) {

                $("#TableData").append("<tr>");

                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['MARCA'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CARRO'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
                $("#TableData").append("<td scope='col'>" + data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");

                $("#TableData").append("<tr>");

            }
        });
    });
}