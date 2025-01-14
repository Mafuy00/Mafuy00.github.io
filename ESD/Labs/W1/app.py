from flask import Flask
app = Flask(__name__)

@app.route("/")
# app.route("/poskitt/<string:msg>")
def home():
    return "Hello, Flask! Yipeeeeee"

if __name__ == '__main__':
    app.run()