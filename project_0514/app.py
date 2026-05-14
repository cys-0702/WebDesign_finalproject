from flask import Flask, render_template
from fortune import get_fortune

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get_fortune")
def fortune_api():
    return get_fortune()

if __name__ == "__main__":
    app.run(debug=True)