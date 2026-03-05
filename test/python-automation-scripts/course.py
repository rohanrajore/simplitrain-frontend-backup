import requests
import json
import init
from lorem_text import lorem
import logging
import logging.config
from pprint import pformat

# Get the logger specified in the file
logger = logging.getLogger(__name__)

init.init_local_environment()
init.init_urls()


def create_category(category):
    logger.debug("creating category...")

    create_category_headers = {
        'Authorization': "FAKE BEARER TOKEN",
        'Content-Type': "application/json"
    }

    response = requests.request(
        "POST", init.create_category_url, headers=create_category_headers, data=json.dumps(category))
    response.raise_for_status
    logger.debug(f"status: {response.status_code}")
    logger.debug(f"time taken for create course: {response.elapsed}")
    return response


def create_subcategory(subcategory):
    logger.debug("creating subcategory...")

    create_subcategory_headers = {
        'Authorization': "FAKE BEARER TOKEN",
        'Content-Type': "application/json"
    }

    response = requests.request(
        "POST", init.create_subcategory_url, headers=create_subcategory_headers, data=json.dumps(subcategory))
    response.raise_for_status
    logger.debug(f"status: {response.status_code}")
    logger.debug(f"time taken for create course: {response.elapsed}")
    return response


def create_course(course):
    logger.debug("creating course...")

    create_course_headers = {
        'Authorization': "FAKE BEARER TOKEN",
        'Content-Type': "application/json"
    }

    response = requests.request(
        "POST", init.create_course_url, headers=create_course_headers, data=json.dumps(course))
    response.raise_for_status
    logger.debug(f"status: {response.status_code}")
    logger.debug(f"time taken for create course: {response.elapsed}")
    return response


def schedule_course(schedule_course_batch_details):
    logger.debug("scheduling course...")

    schedule_course_headers = {
        'Authorization': "FAKE BEARER TOKEN",
        'Content-Type': "application/json"
    }

    response = requests.request(
        "POST", init.schedule_course_url, headers=schedule_course_headers, data=json.dumps(schedule_course_batch_details))
    response.raise_for_status
    logger.debug(f"status: {response.status_code}")
    logger.debug(f"time taken for create course: {response.elapsed}")
    return response


def create_new_course(user_id):
    logger.debug("creating a new course")

    course = {
        "title": lorem.sentence(),
        "courseID": "",
        "welcomeMessage": lorem.paragraph(),
        "userID": user_id
    }

    return create_course(course)


def update_existing_course(course_id, instructor_id):
    logger.debug(f"updating existing course: {course_id}")

    course = {
        "title": lorem.sentence(),
        "courseID": course_id,
        "welcomeMessage": lorem.paragraph(),
        "userID": instructor_id
    }

    return create_course(course)


def create_new_courses(user_id, num_of_courses):
    logger.debug(
        f"create_new_courses user_id: {user_id}, num_of_courses: {num_of_courses} ")
    for index in range(0, num_of_courses):
        create_new_course_response = create_new_course(user_id).json()
        logger.debug(
            f"create_new_course response: {pformat(create_new_course_response, width=100)}")

# create_new_courses(user_name="abcd2@gmail.com",
#                    password="secret124", num_of_courses=5)


def get_courses_by_user_id(user_id):
    payload = {}
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.request(
        "GET", init.create_course_url + "?userID=" + user_id, headers=headers, data=payload)
    response.raise_for_status()
    logger.debug(f"status: {response.status_code}")
    return response


def get_course_by_course_id(course_id):
    payload = {}
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.request(
        "GET", init.get_course_details_by_course_id_url + "/" + course_id, headers=headers, data=payload)
    response.raise_for_status()
    logger.debug(f"status: {response.status_code}")
    return response


# http: // localhost: 8080/api/v1/courses/7877be0b-1f1f-43dd-9f61-d12b03803bf6
