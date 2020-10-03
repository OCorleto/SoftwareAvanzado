
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#

import pymongo
import json
from flask import Flask, request, Response


app = Flask(__name__)

myclient = pymongo.MongoClient("mongodb://mongo:27017")
mydb = myclient["sopes1"]
mycol = mydb["Objeto"]


@app.route("/db",methods = ['GET'])
def verdb():
        total = 0
        mydoc = mycol.find()
        for x in mydoc:
                print(x)
                total = total +1 
        return(str(total))

@app.route("/ram",methods = ['GET'])
def dataram():
        archivo = open("/elements/procs/201602811_ram",'r')
        contenido = archivo.read()
        archivo.close()
        return ({'contenido': contenido})

@app.route("/cpu",methods = ['GET'])
def datacpu():
        archivo = open("/elements/procs/201602811_cpu",'r')
        contenido = archivo.read()
        archivo.close()
        return ({'contenido': contenido})

@app.route("/insertdb",methods = ['POST'])
def insertar():
        datos = request.get_json()
        x= mycol.insert_one(datos)
        return str(x.inserted_id)

@app.route("/verdb",methods = ['GET'])
def selectall():
        documents = mycol.find({},{"_id":0})
        output = [{item: data[item] for item in data if item != '_id'} for data in documents]
        return Response(response=json.dumps(output),status=200,mimetype='application/json')


if __name__ == "__main__":
    app.run(host = '0.0.0.0',port = 8080)

