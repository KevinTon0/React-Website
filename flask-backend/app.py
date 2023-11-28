from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    data = [{"id": 1, "name": "Item 1", "value": 10}, {"id": 2, "name": "Item 2", "value": 20}]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)