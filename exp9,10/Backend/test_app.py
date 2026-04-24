import pytest
from app import app

@pytest.fixture
def client():
    app.testing = True
    return app.test_client()

def test_create_student_success(client):
    response = client.post("/student", json={"name": "John"})
    assert response.status_code == 201

def test_create_student_fail(client):
    response = client.post("/student", json={})
    assert response.status_code == 400
    