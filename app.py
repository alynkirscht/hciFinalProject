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
        language2 = request.form.get('lstLanguage2')
        print(language2)
        print(language1)
        if language1 == "Spanish" and language2 == None:
            return render_template("loading_page.html", recommendation='Spanish')
        elif language1 == 'Hindi' and language2 == None:
            return render_template("loading_page.html", recommendation='Hindi')
        elif language1 == 'Spanish' and language2 == 'Hindi':
            return render_template("loading_page.html", recommendation='Spanish+Hindi')
        elif language2 == 'Spanish' and language1 == 'Hindi':
            return render_template("loading_page.html", recommendation='Spanish+Hindi')
        else:
            return render_template('error_template.html', message="We couldn't find recommendations in the language you chose. Try with other languages!")

    return render_template("language_page.html")

@app.route('/error', methods=['GET', 'POST'])
def error():
    return render_template("error_template.html")

@app.route('/loading', methods=['GET', 'POST'])
def loading():
    return render_template("loading_page.html")


@app.route('/suggested_playlistsSpanish', methods=['GET', 'POST'])
def languagesSpanish():
    return render_template("suggested_playlistsSpanish.html")

@app.route('/suggested_playlistsHindi', methods=['GET', 'POST'])
def suggested_playlistsHindi():
    return render_template("suggested_playlistsHindi.html")

@app.route('/suggested_playlistsSpanishHindi', methods=['GET', 'POST'])
def suggested_playlistsSpanishHindi():
    return render_template("/suggested_playlistsSpanishHindi.html")
@app.route('/playlist', methods=['GET', 'POST'])
def playlist():
    return render_template("inspect_playlist.html")
@app.route('/help', methods=['GET', 'POST'])
def help():
    return render_template("help_page.html")