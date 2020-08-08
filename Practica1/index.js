

function ListaAlumnos(){
    var urlapi = "https://api.softwareavanzado.world/index.php?"
            + "&option=token"
            + "&api=oauth2"
            + "&grant_type=client_credentials"
            + "&client_id = sa"
            + "&client_secret=fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745"
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
            + "&option=token"
            + "&api=oauth2"
            + "&grant_type=client_credentials"
            + "&client_id = sa"
            + "&client_secret=fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745"
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