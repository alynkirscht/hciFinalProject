from flask import *

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def login():
    return render_template("login_page.html")

@app.route('/language_page', methods=['POST'])
def language():
    return render_template("language_page.html")