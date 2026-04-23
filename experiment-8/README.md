 **Experiment 8 - RESTful API using Flask**
 
 **Title**:-Develop RESTful APIs using Backend Framework (Flask)

** Description**
This project demonstrates the implementation of RESTful APIs using Python Flask.  
The backend server provides CRUD operations for managing student data.

The student data is stored in-memory using a Python list (no database used).

The APIs were tested using Postman and deployed on the Render cloud platform.

**Technologies Used**
- Python 3
- Flask
- Gunicorn
- Postman
- Render (Cloud Deployment)

backend/
└── rest-api-lab/
    ├── app.py
    ├── requirements.txt
    ├── README.md
    └── screenshots/

---

**How to Run Locally**

Step 1: Clone Repository
git clone <your-github-repo-link>

Step 2: Go to Project Directory
cd backend/rest-api-lab

Step 3: Create Virtual Environment
python -m venv venv

 Step 4: Activate Virtual Environment
Windows:
venv\Scripts\activate

Mac/Linux:
source venv/bin/activate

Step 5: Install Dependencies
pip install -r requirements.txt

 Step 6: Run Application
python app.py

Server will start at:
http://127.0.0.1:5000

 API Endpoints

 1️⃣ GET All Students
GET /students

 2️⃣ POST Add Student
POST /students

Example JSON:
{
  "name": "Piyush",
  "roll": "23BCU70009",
  "course": "CSE"
}

 3️⃣ PUT Update Student
PUT /students/<index>

 4️⃣ DELETE Student
DELETE /students/<index>

 Deployment

This project is deployed on Render.

**Outcome**
 
- Successfully created CRUD APIs
- Stored data in-memory
- Tested using Postman
- Deployed successfully on Render
<img width="1920" height="1080" alt="Screenshot (108)" src="https://github.com/user-attachments/assets/54bdc595-4f5e-4851-8f76-837d44fdfde5" />
<img width="1920" height="1080" alt="Screenshot (109)" src="https://github.com/user-attachments/assets/b60fd816-4db4-4937-89fb-b20f4b51f0fd" />
<img width="1920" height="1080" alt="Screenshot (110)" src="https://github.com/user-attachments/assets/4f449a9e-ad1a-46cb-85a6-9e433a507293" />
<img width="1920" height="1080" alt="Screenshot (111)" src="https://github.com/user-attachments/assets/5af9c5da-461d-4b95-a2f3-c558f56ed884" />
<img width="1920" height="1080" alt="Screenshot (112)" src="https://github.com/user-attachments/assets/295644c4-6c31-4e8f-83f1-754eebebfb09" />
<img width="1920" height="1080" alt="Screenshot (115)" src="https://github.com/user-attachments/assets/74f10a35-f40f-4aa6-844c-a153f28e10d6" />


