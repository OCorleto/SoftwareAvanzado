

function ListaAlumnos(){
    var urlapi = "https://api.softwareavanzado.world/index.php?"
            + "webserviceClient=administrator"
            + "&webserviceVersion=1.0.0"
            + "&option=contact"
            + "&api=hal"
            + "&list[limit]=0"
            + "&filter[search]=201602811"
    $.ajax({
        type:"GET",
        url:urlapi,
        crossDomain:true,
        success : function(data,status){
            var select = document.getElementById('lista');
            console.log(data._embedded.item)
            data._embedded.item.forEach(function(element) {
                select.innerHTML += "<option value='"+element.name+"'>"+element.name+"</option>"; 
                console.log(element.name)
              });
        }
    });
}

function CrearAlumno(){
    var name = document.getElementById('username').value
    var urlapi ="https://api.softwareavanzado.world/index.php?"
            + "webserviceClient=administrator"
            + "&webserviceVersion=1.0.0"
            + "&option=contact"
            + "&api=hal"
    $.ajax({
        type: 'POST',
        url: urlapi,
        datatype: 'json',
        data: JSON.stringify({ name : name}),
        async: true,
        success: function(data){
            console.log(name)
            alert(name+' creado')
        }
    });
}