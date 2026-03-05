import socket
import time
import csv
import requests
import jwt
import http.client
import pandas
from datetime import datetime
from faker import Faker
import json
import random
from lorem_text import lorem

fake = Faker()

simplitrain_url = ""
simplitrain_port = 0
create_course_url = ""
login_url = ""


def init_local_environment():
    print("initializing local environment...")
    global simplitrain_url, simplitrain_port
    simplitrain_url = "localhost"
    simplitrain_port = 8080


init_local_environment()


def init_urls():
    global create_course_url, login_url
    create_course_url = "http://{host}:{port}/api/v1/courses".format(
        host=simplitrain_url, port=simplitrain_port)
    login_url = "http://{host}:{port}/api/v1/login".format(
        host=simplitrain_url, port=simplitrain_port)


init_urls()


def create_course(course):
    print("creating course...")

    create_course_headers = {
        'Authorization': "FAKE BEARER TOKEN",
        'Content-Type': "application/json"
    }

    response = requests.request(
        "POST", create_course_url, headers=create_course_headers, data=json.dumps(course))
    response.raise_for_status
    print(f"status: {response.status_code}")
    print(f"time taken for create course: {response.elapsed}")
    return response


def create_new_course(user_id):
    print("creating a new course")

    course = {
        "title": lorem.sentence(),
        "courseID": "",
        "welcomeMessage": lorem.paragraph(),
        "userID": user_id
    }

    return create_course(course)


def update_existing_course(course_id, instructor_id):
    print(f"updating existing course: {course_id}")

    course = {
        "title": lorem.sentence(),
        "courseID": course_id,
        "welcomeMessage": lorem.paragraph(),
        "instructorID": instructor_id
    }

    return create_course(course)


def login(user_name, password):
    print("logging in a user")

    login_headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    login_payload = {"email": user_name, "password": password}

    response = requests.request(
        "POST", login_url, headers=login_headers, data=json.dumps(login_payload))
    response.raise_for_status
    print(f"status: {response.status_code}")
    print(f"time taken for login: {response.elapsed}")
    return response


# login_response = login("abcd2@gmail.com", "secret124").json()
# print(login_response)
# instructor_id = login_response['id']
# create_new_course_response = create_new_course(instructor_id).json()
# print(f" create_new_course response: {create_new_course_response}")

# course_id = create_new_course_response['courseID']
# update_existing_course_response = update_existing_course(
#     course_id, instructor_id).json()
# print(
#     f" update_existing_course_response response: {update_existing_course_response}")

# update_existing_course_response = update_existing_course(
#     course_id, instructor_id).json()
# print(
#     f" update_existing_course_response response: {update_existing_course_response}")


def create_new_courses(user_id, num_of_courses):
    print(
        f"create_new_courses user_id: {user_id}, num_of_courses: {num_of_courses} ")
    for index in range(0, num_of_courses):
        create_new_course_response = create_new_course(user_id).json()
        print(f"create_new_course response: {create_new_course_response}")

# create_new_courses(user_name="abcd2@gmail.com",
#                    password="secret124", num_of_courses=5)


def get_courses_by_user_id(user_id):
    payload = {}
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.request(
        "GET", create_course_url + "?userID=" + user_id, headers=headers, data=payload)
    response.raise_for_status()
    print(f"status: {response.status_code}")
    return response


def test_login_create_courses_get(user_name, password):
    print(
        f"Inside test_login_create_courses_get user_name: {user_name}, password: {password}")
    login_response = login(user_name, password).json()
    print(login_response)
    user_id = login_response['id']

    create_new_courses(user_id=user_id, num_of_courses=5)

    get_courses_response = get_courses_by_user_id(
        user_id).json()

    print(get_courses_response)


test_login_create_courses_get("abcd2@gmail.com", "secret124")
