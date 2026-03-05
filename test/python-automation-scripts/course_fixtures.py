from faker import Faker
import logging
import random
import datetime

logger = logging.getLogger(__name__)
fake = Faker()


def get_array_of_random_sentences(nb_words):
    array_of_random_sentences = []
    random_number = random.randint(5, 30)
    for index in range(1, random_number):
        array_of_random_sentences.append(fake.sentence(nb_words))
    return array_of_random_sentences


def get_random_course_section():
    course_section = {
        "title": fake.sentence(10),
        "courseTopics": [
        ]
    }
    course_section['courseTopics'] = get_array_of_random_sentences(10)
    return course_section


def get_multiple_random_course_sections():
    random_number = random.randint(5, 30)
    course_sections = []
    for index in range(1, random_number):
        course_sections.append(get_random_course_section())

    return course_sections


def get_random_language():
    languages = ['ENGLISH', 'TELUGU', 'TAMIL', 'MALAYALAM', 'HINDI']
    language = random.choice(languages)
    logger.debug(f"get_random_language: {get_random_language}")
    return language


def get_random_level():
    levels = ['BEGINNER',
              'INTERMEDIATE',
              'ADVANCED']
    level = random.choice(levels)
    logger.debug(f"get_random_level: {get_random_level}")
    return level


def get_new_subcategory(category_id):
    course_subcategory = {
        "name": fake.sentence(),
        "categoryID": category_id
    }
    return course_subcategory


def get_new_category():
    course_category = {
        "name": fake.sentence()
    }
    return course_category


def get_new_course(userID, categoryID, subCategoryID):

    course = {
        "userID": userID,
        "title": fake.sentence(),
        "subTitle": fake.sentence(),
        "description": fake.paragraph(nb_sentences=10),
        "language": "",
        "level": "",
        "category": None,
        "subCategory": None,
        "courseImage": "http://lorempixel.com/g/1024/768/",
        "courseVideo": "https://www.youtube.com/watch?v=qml_YVfm0z0",
        "highlights": [
        ],
        "requirements": [
        ],
        "targetAudience": [
        ],
        "courseSections": [
        ],
        "welcomeMessage": fake.paragraph(nb_sentences=30),
        "congratulatoryMessage": fake.paragraph(nb_sentences=30)
    }
    if(categoryID != None):
        course['category'] = {
            "id": categoryID
        }
    if(subCategoryID != None):
        course['subCategory'] = {
            "id": subCategoryID,
            "categoryID": categoryID
        }
    course['language'] = get_random_language()
    course['level'] = get_random_level()
    course['highlights'] = get_array_of_random_sentences(nb_words=15)
    course['requirements'] = get_array_of_random_sentences(nb_words=5)
    course['targetAudience'] = get_array_of_random_sentences(nb_words=2)
    course['courseSections'] = get_multiple_random_course_sections()
    return course


# TODO
# 'JSON parse error: Cannot deserialize value of type '
# '`java.time.ZonedDateTime` from String "2020-08-24T02:20:49Z": '
# 'Failed to deserialize java.time.ZonedDateTime: '
# '(java.time.format.DateTimeParseException) Text '
# "'2020-08-24T02:20:49Z' could not be parsed at index 19; nested "
# 'exception is '

def get_new_schedule_course_batch_details(user_id, course_id):
    schedule_course_batch_details = {"userID": user_id,
                                     "courseID": course_id,
                                     "startDate": datetime.datetime.now().strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3] + "Z",
                                     "endDate": datetime.datetime.now().strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3] + "Z",
                                     "startTime": "",
                                     "durHours": "",
                                     "durMins": "",
                                     "ignoreWeekend": False,
                                     "everydaySch": [
                                     ],
                                     "isOnsite": False,
                                     "isCustomOnline": False,
                                     "selectedOnline": "ZOOM",
                                     "customOnlineText": "",
                                     "currency": "INR",
                                     "actualPrice": 0,
                                     "discountedPrice": 0,
                                     "couponList": []
                                     }

    return schedule_course_batch_details
