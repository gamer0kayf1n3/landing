from flask import Flask, send_from_directory
app = Flask(__name__)
@app.route("/")
def main():
    return send_from_directory("/home/ubuntu/landing", "index.html")
app.run(host="0.0.0.0", port=8080)