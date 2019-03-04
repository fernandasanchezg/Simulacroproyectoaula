var app = new function(){
    var ligas = [
       {"nombreliga":"Bundesliga", "paisliga":"España"}
    ]
    getall = function(){
        console.log('obteniendo las ligas')
        var data = ''
        for (var i = 0; i< ligas.length; i++) {
            console.log(ligas[i])
            data += '<tr>'
            data += '<td> ' + ligas[i].nombreliga + '<td>' 
            data += '<td> ' + ligas[i].paisliga + '<td>' 

      data += '<td><button onclick="editarliga(' + i + ')">Editar</button></td>'
      data += '<td><button onclick="eliminarliga(' + i + ')">Eliminar</button></td>'
      data += '</tr>'
        }
        document.getElementById('contenedor').innerHTML=data
    }
    añadir = function() {
        var name = document.getElementById('nombreliga').value
        var pais = document.getElementById('paisliga').value
        var myliga = {"nombreliga": name, "paisliga": pais
        };
        ligas.push(myliga);
        console.log(myliga);
        document.getElementById('nombreliga').value = ''
        document.getElementById('paisliga').value = '';
        getall();
    }

    editarliga = function(position) {
        document.getElementById('idliga').value = position
        document.getElementById('nombreliga').value = ligas[position].nombreliga
        document.getElementById('paisliga').value = ligas[position].paisliga
        document.getElementById('btnañadir').style.display = "none"
        document.getElementById('btneditar').style.display = "inline"
    }

    update = function(){
        var position = document.getElementById('idliga').value;
        name = document.getElementById('nombreliga').value;
        pais = document.getElementById('paisliga').value;
        var liGa = {"nombreliga":name, "paisliga" :pais};
        ligas.splice(position,1,liGa);
        document.getElementById('btnañadir').style.display ="inline"
        document.getElementById('btneditar').style.display ="none"
        console.log(position)
        document.getElementById('nombreliga').value = ''
        document.getElementById('paisliga').value = '';
        getall()
    }

    eliminarliga = function(position) {
        ligas.splice(position,1);
        getall()
    }
    getall()

}

/////////////////////////////////////////////////////////

