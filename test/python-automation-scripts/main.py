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
import init
from pprint import pformat
import account
import course_tests

logging.basicConfig(filename='/home/sridhar/code/SimpliTrain/simplitrain-mvp1/test/python-automation-scripts/automation-script.log', format='%(asctime)s [%(levelname)s]: - %(message)s',
                    datefmt='%d-%b-%y %H:%M:%S', level=logging.DEBUG)

# Get the logger specified in the file
logger = logging.getLogger(__name__)

# course_tests.test_login_create_multiple_courses_get(
#     "abcd2@gmail.com", "secret124", 10)
course_tests.test_login_create_single_course_schedule_course(
    "abcd2@gmail.com", "secret124")
# course_tests.test_login_create_courses_update_get(
#     "abcd2@gmail.com", "secret124")

# course_tests.test_login_create_single_course_get_by_course_id(
#     "abcd2@gmail.com", "secret124")
