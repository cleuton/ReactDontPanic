from flask import Flask
from flask_cors import CORS
from flask import request
app = Flask(__name__)
CORS(app)
@app.route('/', methods=['POST'])
def logon():
    return '{"user": "' + request.form['usuario'] + '","status":"autenticado"}';