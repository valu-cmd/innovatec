import pymongo
from fastapi import FastAPI, Form, Request, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware

from fastapi.responses import RedirectResponse
import webbrowser
import bcrypt

#libreria Chart.js permite hacer grafiquitos bonitps

#libreria para correos
import yagmail





client = pymongo.MongoClient("mongodb+srv://ricarshy:U08SV0SA7vsDt7ta@cluster0.b1nmyph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client.innovatec
#1:13:00

app = FastAPI()

app.mount("/static", StaticFiles(directory="C:/Users/lunap/OneDrive/Documentos/innovatec"), name="static")

origins = [
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
class ModeloRegistro(BaseModel):
    nombre: str
    curp: str
    generos: str
    fecha: str
    correo: str
    contrasena: str
    nivelEd: str

    def hash_password(self):
        self.contrasena = bcrypt.hashpw(self.contrasena.encode(), bcrypt.gensalt()).decode()

class LogeoModel (BaseModel):
    curp: str
    contrasena: str

class Correos(BaseModel):
    nombre: str
    correo: str
    telefono: str
    comentario: str
    


@app.post("/RegistroNuevo")
async def registrar_usuario(nuevo_usuario: ModeloRegistro):
    try:
        
        #nuevo_usuario.hash_password()
        registro_dict = nuevo_usuario.model_dump()
        inserto_registro = db.usuarios.insert_one(registro_dict)
        return {"Usuario agregado"}
    except Exception as e:
        return {"Error": str(e)}

@app.post("/IniciarSesion")
async def registrar_usuario(logeomodel: LogeoModel, request: Request):
    try:
        usuario = db.usuarios.find_one({"curp":logeomodel.curp},{"contrasena":1})
        chequeo =bcrypt.checkpw(logeomodel.contrasena.encode(),usuario["contrasena"].encode())
        if(chequeo):
            #return RedirectResponse(url="/static/index.html", status_code=302)
            return Response(headers={"Location": "/static/index.html"}, status_code=302)
            
            
        else:
            return {"CURP o contraseña incorrecta"}

        
         
        
    except Exception as e:
        return {"Error": str(e)}
    
class testupdate(BaseModel):
    respuesta: str


@app.post("/testupdate")
async def testupdate(update: testupdate):
    print(update)
    db.usuarios.update_one({"correo":"ricardo.salasdf@gmail.com"},{'$set': {'prueba':[update.respuesta]}})


@app.post("/correo-enviado")
async def correo(correoEnviado: Correos):
    try:
        registro_dict = correoEnviado.model_dump()
        inserto_registro = db.correos_enviados.insert_one(registro_dict)

        #sección de correo
        email = 'ricardo.salasdf@gmail.com'
        contrasena_correo= 'izgvdltjzqclbukc'

        #asignar el cliente de yagmail
        yag =yagmail.SMTP(user=email,password=contrasena_correo)

        yag.send(
            to=correoEnviado.correo,
            subject = "Gracias por contactarnos",
            contents=f"Hola {correoEnviado.nombre},\n\nGracias por contactarnos. Nos pondremos en contacto contigo lo antes posible."
        )
        return {"Gracias por contactarnos"}
    except Exception as e:
        return {"Error": str(e)}
    
    






