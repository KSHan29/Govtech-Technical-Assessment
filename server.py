from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/application/x-www-form-urlencoded', methods=['POST'])
def process_form_data():
    num1 = int(request.form.get('num1'))
    num2 = int(request.form.get('num2'))
    op = request.form.get("op")
    result = num1 + num2 if op == "+" else num1 - num2
    print(result)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
