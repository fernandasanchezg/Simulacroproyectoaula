var app = new function () {
    var equipos = [
        {
            "nombreequipo":"real madrid",
            "nombretecnico":"solary",
            "paisequipo":"España",
            

        },
        {
            "nombreequipo":"barcelona",
            "nombretecnico":"valverde",
            "paisequipo":"España",
            
        }
    ]

    getAllEquipos = function () {
        console.log('Obteniendo todos los equipos');
        var data = ''
        for (var i = 0; i < equipos.length; i++) {
            console.log(equipos[i])
            data += '<tr>'
            data += '<td>' + equipos[i].nombreequipo + '</td>'
            data += '<td>' + equipos[i].nombretecnico + '</td>'
            data += '<td>' + equipos[i].paisequipo + '</td>'        
            data += '<td><button onclick="editarequipo1(' + i + ')">Editar</button></td>'
            data += '<td><button onclick="eliminarequipo(' + i + ')">Eliminar</button></td>'
            data += '</tr>'

        }
        document.getElementById('contenedorEquipo').innerHTML = data
    }

    añadirEquipos = function () {
        console.log(document);
        var nameE= document.getElementById('nombreequipo').value;
        var namet= document.getElementById('nombretecnico').value;
        var country= document.getElementById('paisequipo').value;
       
        var myequipo = {"nombreequipo": nameE, "nombretecnico": namet, "paisequipo": country};
        equipos.push(myequipo);
        console.log(myequipo);
        document.getElementById('nombreequipo').value=''
        document.getElementById('nombretecnico').value=''
        document.getElementById('paisequipo').value=''
     
        getAllEquipos();
    }

    editarequipo1 = function (position) {
        document.getElementById('idequipo').value = position
        document.getElementById('nombreequipo').value = equipos[position].nombreequipo
        document.getElementById('nombretecnico').value = equipos[position].nombretecnico
        document.getElementById('paisequipo').value = equipos[position].paisequipo;
        document.getElementById("btnnuevoEquipo").style.display = "none"
        document.getElementById("btneditarEquipo").style.display = "inline"

    }

    editarEquipo = function() {
        var position = document.getElementById('idequipo').value;
        nameteam = document.getElementById('nombreequipo').value;
        namecoach = document.getElementById('nombretecnico').value;
        countryteam = document.getElementById('paisequipo').value;
        var equiPos = {"nombreequipo": nameteam, "nombretecnico": namecoach, "paisequipo": countryteam};
       equipos.splice(position,1,equiPos);
        document.getElementById('btnnuevoEquipo').style.display = "inline"
        document.getElementById('btneditarEquipo').style.display = "none"
        console.log(position)
        document.getElementById('nombreequipo').value = ''
        document.getElementById('nombretecnico').value = ''
        document.getElementById('paisequipo').value = '';
        getAllEquipos()


    }

    eliminarequipo = function (position) {
        equipos.splice(position,1);
        getAllEquipos()
    }

    getAllEquipos();
    
}