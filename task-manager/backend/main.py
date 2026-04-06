from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow Angular
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tasks = []

class Task(BaseModel):
    id:int
    user_id:int
    title:str
    description:str
    status:str

@app.get("/tasks")
def get_tasks():
    return tasks

@app.post("/tasks")
def create_task(task:Task):
    tasks.append(task)
    return task

@app.put("/tasks/{task_id}")
def update_task(task_id:int, task:Task):
    for t in tasks:
        if t["id"] == task_id:
            t.update(task.dict())
    return {"message":"updated"}

@app.delete("/tasks/{task_id}")
def delete_task(task_id:int):
    global tasks
    tasks = [t for t in tasks if t["id"] != task_id]
    return {"message":"deleted"}