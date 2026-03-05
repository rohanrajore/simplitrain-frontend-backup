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
import logging
import logging.config
import course
import course_fixtures
import init
from pprint import pformat
import account

logging.basicConfig(filename='/home/sridhar/code/SimpliTrain/simplitrain-mvp1/test/python-automation-scripts/automation-script.log', format='%(asctime)s [%(levelname)s]: - %(message)s',
                    datefmt='%d-%b-%y %H:%M:%S', level=logging.DEBUG)

# Get the logger specified in the file
logger = logging.getLogger(__name__)


def test_login_create_courses_update_get(user_name, password):
    login_response = account.login(user_name, password).json()
    logger.debug(f"login_response: {pformat(login_response)}")
    user_id = login_response['id']

    # category1 = course_fixtures.get_new_category()
    # logger.debug(f"category to be created: {pformat(category1)}")
    # create_new_category_response = course.create_category(category1).json()
    # logger.debug(
    #     f"create_new_category_response: {pformat(create_new_category_response)}")

    # category_id = create_new_category_response['courseCategory']['id']
    # logger.debug(f"category_id: {category_id}")

    # subcategory1 = course_fixtures.get_new_subcategory(category_id)
    # logger.debug(f"subcategory to be created: {subcategory1}")
    # create_new_sub_category_response = course.create_subcategory(
    #     subcategory1).json()
    # logger.debug(
    #     f"create_new_sub_category_response: {pformat(create_new_sub_category_response)}")

    category1 = {
        "id": "461befa5-24ca-4d67-acac-da7b6a856bc6",
        "name": "Fantastic Rubber Computer"
    }

    subcategory1 = {
        "id": "9d6d940a-45b5-4586-979f-3d6f82cf3a47",
        "name": "Tasty Rubber Sausages",
        "categoryID": "461befa5-24ca-4d67-acac-da7b6a856bc6"
    }

    new_course1 = course_fixtures.get_new_course(
        user_id, category1, subcategory1)
    logger.debug(f"course to be created: {pformat(new_course1)}")
    create_new_course_response = course.create_course(
        new_course1).json()
    logger.debug(
        f" create_new_course_response: {pformat(create_new_course_response)}")

    course_id = create_new_course_response['courseDetails']['courseID']
    logger.debug(f"course_id: {course_id}")
    update_existing_course_response = course.update_existing_course(
        course_id, user_id).json()
    logger.debug(
        f" update_existing_course_response: {pformat(update_existing_course_response)}")

    update_existing_course_response = course.update_existing_course(
        course_id, user_id).json()
    logger.debug(
        f" update_existing_course_response: {pformat(update_existing_course_response)}")


def test_login_create_multiple_courses_get(user_name, password, num_of_courses):
    logger.debug(
        f"Inside test_login_create_multiple_courses_get user_name: {user_name}, password: {password}, num_of_courses: {num_of_courses}")
    login_response = account.login(user_name, password).json()
    logger.debug(login_response)
    user_id = login_response['id']

    for index in range(0, num_of_courses):
        logger.debug(f"creating {index}th course")
        course_id = create_new_course(user_id)
        logger.debug(f"created course with course_id: {course_id}")

    get_courses_response = course.get_courses_by_user_id(
        user_id).json()
    logger.debug(pformat(get_courses_response))


def test_login_create_single_course_get_by_course_id(user_name, password):
    logger.debug(
        f"Inside test_login_create_single_course_get_by_course_id user_name: {user_name}, password: {password}")
    login_response = account.login(user_name, password).json()
    logger.debug(login_response)
    user_id = login_response['id']

    course_id = create_new_course(user_id)

    get_course_by_course_id_response = course.get_course_by_course_id(
        course_id).json()
    logger.debug(
        f" get_course_by_course_id_response: {pformat(get_course_by_course_id_response)}")


def test_login_create_single_course_schedule_course(user_name, password):
    logger.debug(
        f"Inside test_login_create_single_course_get_by_course_id user_name: {user_name}, password: {password}")
    login_response = account.login(user_name, password).json()
    logger.debug(login_response)
    user_id = login_response['id']
    course_id = create_new_course(user_id)
    course_batch_id = schedule_course_batch(course_id, user_id)


def create_new_course(user_id):
    # category1 = course_fixtures.get_new_category()
    # logger.debug(f"category to be created: {pformat(category1)}")
    # create_new_category_response = course.create_category(category1).json()
    # logger.debug(
    #     f"create_new_category_response: {pformat(create_new_category_response)}")

    # category_id = create_new_category_response['courseCategory']['id']
    # logger.debug(f"category_id: {category_id}")

    # subcategory1 = course_fixtures.get_new_subcategory(category_id)
    # logger.debug(f"subcategory to be created: {subcategory1}")
    # create_new_sub_category_response = course.create_subcategory(
    #     subcategory1).json()
    # logger.debug(
    #     f"create_new_sub_category_response: {pformat(create_new_sub_category_response)}")
    # subcategory_id = create_new_sub_category_response['courseSubcategory']['id']

    category1 = {
        "id": "461befa5-24ca-4d67-acac-da7b6a856bc6",
        "name": "Fantastic Rubber Computer"
    }

    subcategory1 = {
        "id": "9d6d940a-45b5-4586-979f-3d6f82cf3a47",
        "name": "Tasty Rubber Sausages",
        "categoryID": "461befa5-24ca-4d67-acac-da7b6a856bc6"
    }

    new_course1 = course_fixtures.get_new_course(
        userID=user_id, categoryID=category1['id'], subCategoryID=subcategory1['id'])
    logger.debug(f"course to be created: {pformat(new_course1)}")
    create_new_course_response = course.create_course(
        new_course1).json()
    logger.debug(
        f" create_new_course_response: {pformat(create_new_course_response)}")
    course_id = create_new_course_response['courseDetails']['courseID']
    logger.debug(f"course_id: {course_id}")

    return course_id


def schedule_course_batch(course_id, user_id):
    new_schedule_course_batch1_details = course_fixtures.get_new_schedule_course_batch_details(
        user_id, course_id)
    logger.debug(
        f"course_batch to be created: {pformat(new_schedule_course_batch1_details)}")
    schedule_course_batch1_details_response = course.schedule_course(
        new_schedule_course_batch1_details).json()
    logger.debug(
        f" schedule_course_batch1_details_response: {pformat(schedule_course_batch1_details_response)}")
    course_batch_id = schedule_course_batch1_details_response[
        'scheduledCourseBatchDetails']['courseBatchID']
    logger.debug(f"course_batch_id: {course_batch_id}")

    return course_batch_id
