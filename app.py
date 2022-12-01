from flask import *
import js2py

app = Flask(__name__)

app.config.from_object('config')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('txtUsername')
        password = request.form.get('pwdPassword')

        if (username == 'a' and password == '1'):
            return redirect(url_for('language'))
        else:
            return redirect(url_for('error'))

    return render_template("login_page.html")

@app.route('/language', methods=['GET','POST'])
def language():
    return render_template("language_page.html")
    


@app.route('/error', methods=['GET', 'POST'])
def error():
    return render_template("error_template.html")

@app.route('/languages', methods=['GET', 'POST'])
def languages():
    return render_template("suggested_playlists.html")