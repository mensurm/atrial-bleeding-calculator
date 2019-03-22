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


@app.route('/orbit', methods=['GET'])
def orbit():
    return render_template('orbit/index.html')


@app.route('/hemorr2hages', methods=['GET'])
def hemorrhages():
    return render_template('hemorrhages/index.html')


@app.route('/about', methods=['GET'])
def about():
    return render_template('about.html')

@app.route('/contact', methods=['GET'])
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')
