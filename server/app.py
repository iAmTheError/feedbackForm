from flask import Flask, request, jsonify
from flask_cors import CORS

print("app.py is running")
print(f"__name__ is {__name__}")

app = Flask(__name__)
CORS(app)
feedback_list = ["This is not visible to everyone"]
@app.route('/feedback', methods=['GET','POST'])
def feedback():
    if request.method == 'POST':
        data = request.json
        feedback_list.append(data)
        return jsonify({'message':'Feedback received successfully'}),201
    return jsonify(feedback_list),200

if __name__ == '__main__':
    app.run(debug=True)
