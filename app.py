from flask import *


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
            return render_template('error_template.html', message="Your username and password are wrong. Try again!")

    return render_template("login_page.html")

@app.route('/language', methods=['GET','POST'])
def language():
    if request.method == 'POST':
        language1 = request.form.get('lstLanguage')
        language2 = request.form.get('')

        if language1 == 'Spanish':
            return redirect(url_for("loading"))

    return render_template("language_page.html")

    
    


@app.route('/error', methods=['GET', 'POST'])
def error():
    return render_template("error_template.html")

@app.route('/loading', methods=['GET', 'POST'])
def loading():
    return render_template("loading_page.html")

@app.route('/suggested_playlists', methods=['GET', 'POST'])
def languages():
    return render_template("suggested_playlists.html")

@app.route('/playlist', methods=['GET', 'POST'])
def playlist():
    return render_template("inspect_playlist.html")