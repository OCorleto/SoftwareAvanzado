

function ListaAlumnos(){
    var urlsoap="https://api.softwareavanzado.world/index.php?"
            +"webserviceClient=administrator"
            +"&webserviceVersion=1.0.0&option=contact"
            +"&api=soap&wsdl"
     
    $.ajax({
        type:"POST",
        url:urlsoap,
        contentType:"text/xml",
        headers:{'Authorization' : 'Basic sa:usac'},
        crossDomain:true,
        data : '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">'
              +"<soap:Header/>"
              +"<soap:Body>"
              +"<adm:readList>"
              +"<limit>0</limit>"
              +"<filterSearch>201602811</filterSearch>"
              +"</adm:readList>"
              +"</soap:Body>"
              +"</soap:Envelope>",
        success : function(data,status){
            var select = document.getElementById('lista');
            console.log(data)
            /*data._embedded.item.forEach(function(element) {
                select.innerHTML += "<option value='"+element.name+"'>"+element.name+"</option>"; 
                console.log(element.name)
              });*/
        }
    });
}

function CrearAlumno(){
    var name = document.getElementById('username').value
    var urlapi ="https://api.softwareavanzado.world/administrator/index.php"
              +"?webserviceClient=administrator"
              + "&webserviceVersion=1.0.0"
              +"&option=contact&api=soap"
    $.ajax({
        type: 'POST',
        url: urlapi,
        headers:{'Authorization' : 'Basic sa:usac'},
        contentType : "text/xml",
        data: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">'
              +"<soap:Header/>"
              +"<soap:Body>"
              +   "<adm:create>"
              +      "<name>"+name+"</name>"
              +   "</adm:create>"
              +"</soap:Body>"
              +"</soap:Envelope>",
        async: true,
        success: function(data){
            console.log(name)
            alert(name+' creado')
        }
    });
}