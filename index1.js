var app = new function () {
    var jugadores = [
        {
            "nombreJugador":"Camilo Vargas",
            "edadJugador":28,
            "equipoJugador":"Deportivo Cali",
            "golesJugador":1,
            "posicionJugador":"portero"

        }
        /*{
            "nombrejugador": "Sergio Ramos",
            "edadjugador": "28",
            "equipojugador": "Deportivo Cali",
            "golesjugador": "1",
            "posicionjugador": "defensa"
        }*/
    ]

    getAllJugadores = function () {
        console.log('Obteniendo todos los jugadores');
        var data = ''
        for (var i = 0; i < jugadores.length; i++) {
            console.log(jugadores[i])
            data += '<tr>'
            data += '<td>' + jugadores[i].nombreJugador + '</td>'
            data += '<td>' + jugadores[i].edadJugador + '</td>'
            data += '<td>' + jugadores[i].equipoJugador + '</td>'
            data += '<td>' + jugadores[i].golesJugador + '</td>'
            data += '<td>' + jugadores[i].posicionJugador + '</td>'
            data += '<td><button onclick="editarjugador1(' + i + ')">Editar</button></td>'
            data += '<td><button onclick="eliminarjugador(' + i + ')">Eliminar</button></td>'
            data += '</tr>'

        }
        document.getElementById('contenedorJugador').innerHTML = data
    }

    añadirJugador = function () {
        var name= document.getElementById('nombreJugador').value
        var age= document.getElementById('edadJugador').value
        var team= document.getElementById('equipoJugador').value
        var goals= document.getElementById('golesJugador').value
        var position= document.getElementById('posicionJugador').value
        var myjugador = {"nombreJugador": name, "edadJugador": age, "equipoJugador": team, "golesJugador":goals, "posicionJugador": position};
        jugadores.push(myjugador);
        console.log(myjugador);
        document.getElementById('nombreJugador').value=''
        document.getElementById('edadJugador').value=''
        document.getElementById('equipoJugador').value=''
        document.getElementById('golesJugador').value=''
        document.getElementById('posicionJugador').value='';
        getAllJugadores();
    }

    editarjugador1 = function (position) {
        document.getElementById('idJugador').value = position
        document.getElementById('nombreJugador').value = jugadores[position].nombreJugador
        document.getElementById('edadJugador').value = jugadores[position].edadJugador
        document.getElementById('equipoJugador').value = jugadores[position].equipoJugador
        document.getElementById('golesJugador').value = jugadores[position].golesJugador
        document.getElementById('posicionJugador').value = jugadores[position].posicionJugador;
        document.getElementById("btnNuevoJugador").style.display = "none"
        document.getElementById("btnEditarJugador").style.display = "inline"

    }

    editarJugador = function() {
        var position = document.getElementById('idJugador').value;
        name = document.getElementById('nombreJugador').value;
        age = document.getElementById('edadJugador').value;
        team = document.getElementById('equipoJugador').value;
        goals = document.getElementById('golesJugador').value;
        position = document.getElementById('posicionJugador').value;
        var jugadorEs = {"nombreJugador": name, "edadJugador": age, "equipoJugador": team, 
        "golesJugador": goals, "posicionJugador": position};
        jugadores.splice(position,1,jugadorEs);
        document.getElementById('btnNuevoJugador').style.display = "inline"
        document.getElementById('btnEditarJugador').style.display = "none"
        console.log(position)
        document.getElementById('nombreJugador').value = ''
        document.getElementById('edadJugador').value = ''
        document.getElementById('equipoJugador').value = ''
        document.getElementById('golesJugador').value = ''
        document.getElementById('posicionJugador').value = '';
        getAllJugadores()


    }

    eliminarjugador = function (position) {
        jugadores.splice(position,1);
        getAllJugadores()
    }

    getAllJugadores();
    
}