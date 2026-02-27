from flask import Blueprint, request, jsonify

student_bp = Blueprint("student_bp", __name__)

students = []
student_id_counter = 1

# CREATE student
@student_bp.route("/", methods=["POST"])
def create_student():
    global student_id_counter
    data = request.get_json()

    if not data or "name" not in data:
        return jsonify({"error": "Name is required"}), 400

    student = {
        "id": student_id_counter,
        "name": data["name"],
        "age": data.get("age")
    }

    students.append(student)
    student_id_counter += 1
    return jsonify(student), 201


# GET all students
@student_bp.route("/", methods=["GET"])
def get_students():
    return jsonify(students)


# GET single student
@student_bp.route("/<int:id>", methods=["GET"])
def get_student(id):
    for student in students:
        if student["id"] == id:
            return jsonify(student)
    return jsonify({"error": "Student not found"}), 404


# DELETE student
@student_bp.route("/<int:id>", methods=["DELETE"])
def delete_student(id):
    global students
    students = [s for s in students if s["id"] != id]
    return jsonify({"message": "Deleted successfully"})