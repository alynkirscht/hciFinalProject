from flask import *

app = Flask(__name__)

@app.route('/login_page', methods=['GET', 'POST'])
def login():
    return render_template("login_page.html")

