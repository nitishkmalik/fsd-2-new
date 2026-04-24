from flask import Flask, request, jsonify

app = Flask(__name__)

# ✅ ADD THIS
@app.route("/")
def home():
    return "Backend is running 🚀"

@app.route("/student", methods=["POST"])
def create_student():
    data = request.get_json()

    if not data.get("name"):
        return jsonify({"error": "Name required"}), 400

    return jsonify({"message": "Student created"}), 201


# OPTIONAL (but good practice for Docker)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)