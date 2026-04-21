from flask import Flask, send_from_directory
app = Flask(__name__)
PATH = "/home/ubuntu/landing/hodgkraft-landing/dist"
@app.route("/")
def main():
    return send_from_directory(PATH, "index.html")
@app.route("/landing/<path:file>")
def files(file):
    return send_from_directory(PATH, file)


@app.route("/robots.txt")
def robotstxt():
    return send_from_directory("/home/ubuntu/landing", "robots.txt")
app.run(host="0.0.0.0", port=8080)
