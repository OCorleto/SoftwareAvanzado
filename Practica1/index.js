

function ListaAlumnos(){
    var token = ""
    var urlget="https://api.softwareavanzado.world/index.php?"
            + "webserviceClient=administrator"
            + "&webserviceVersion=1.0.0"
            + "&option=contact"
            + "&api=hal"
            + "&list[limit]=0"
            + "&filter[search]=201602811"
    var urlapi = "https://api.softwareavanzado.world/index.php?"
            + "&option=token"
            + "&api=oauth2"
    $.ajax({
        type:"POST",
        url : urlapi,
        data : {
            grant_type: "client_credentials",
            client_id : "sa",
            client_secret : "fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745"
        },
        success : function(data,status){
            token = data.access_token
            $.ajax({
                type: "GET",
                url : urlget,
                headers:{'Authorization' : 'Bearer '+token},
                success : function(data,status){
                    var select = document.getElementById('lista');
                    console.log(data)
                    data._embedded.item.forEach(function(element) {
                        select.innerHTML += "<option value='"+element.name+"'>"+element.name+"</option>"; 
                        console.log(element.name)
                    });
                }
            })
        }
    });
    
}

function CrearAlumno(){
    var token = ""
    var name = document.getElementById('username').value
    var urlpost ="https://api.softwareavanzado.world/index.php?"
            + "webserviceClient=administrator"
            + "&webserviceVersion=1.0.0"
            + "&option=contact"
            + "&api=hal"
    var urlapi ="https://api.softwareavanzado.world/index.php?"
            + "&option=token"
            + "&api=oauth2"
    $.ajax({
        type: 'POST',
        url: urlapi,
        data: { 
            name : name,
            grant_type : "client_credentials",
            client_id : "sa",
            client_secret : "fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745"
        },
        success: function(data){
            token = data.access_token
            $.ajax({
                type: 'POST',
                url: urlpost,
                headers:{'Authorization' : 'Bearer '+token},
                datatype: 'json',
                data: JSON.stringify({ name : name}),
                async: true,
                success: function(data){
                    console.log(name)
                    alert(name+' creado')
                }
            });
        }
    });
}