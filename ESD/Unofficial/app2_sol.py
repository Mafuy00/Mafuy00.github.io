# from flask import Flask
from flask import Flask, request

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello, Flask!"


# more app.route


# Map to http://localhost:5000/chris
@app.route("/chris")
def handsome():
    return "Hello, Chris! "


# Access http://localhost:5000/chris/abc
# Will invoke this function with "abc" passed in via input parameter msg
@app.route("/chris/<string:msg>")
def veryhandsome(msg):
    return "Hello, Chris! " + msg


# Accept HTTP POST request
@app.route("/layfoo", methods=["POST"])
def okaylar():
    return "Hello, Lay Foo! "


# Alternate way to run flask app
# main
if __name__ == "__main__":
    app.run(port=5000, debug=True)
