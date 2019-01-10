from flask import render_template, redirect
from flask import Flask


app = Flask(__name__)


@app.route('/')
def index():
    return redirect('/home')


@app.route('/home', methods=['GET'])
def first_step():
    return render_template('home.html')

@app.route('/has-bled', methods=['GET'])
def has_bled_index():
    return render_template('has-bled/index.html')


@app.route('/atria', methods=['GET'])
def atria():
    return render_template('atria/index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')
