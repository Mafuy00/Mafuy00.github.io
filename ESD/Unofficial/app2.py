from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "Hello, Flask!"


# more app.route
# Alternate way to run flask app
# main
if __name__ == '__main__':
    app.run(port=5000, debug=True)
