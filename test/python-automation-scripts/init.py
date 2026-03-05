simplitrain_url = ""
simplitrain_port = 0
create_course_url = ""
get_course_details_by_course_id_url = ""
login_url = ""
create_category_url = ""
create_subcategory_url = ""
schedule_course_url = ""


def init_local_environment():
    print("initializing local environment...")
    global simplitrain_url, simplitrain_port
    simplitrain_url = "localhost"
    simplitrain_port = 8080


def init_urls():
    global create_course_url, login_url, get_course_details_by_course_id_url, create_category_url, create_subcategory_url, schedule_course_url
    create_category_url = "http://{host}:{port}/api/v1/courses/meta/category".format(
        host=simplitrain_url, port=simplitrain_port)
    create_subcategory_url = "http://{host}:{port}/api/v1/courses/meta/subcategory".format(
        host=simplitrain_url, port=simplitrain_port)
    create_course_url = "http://{host}:{port}/api/v1/courses".format(
        host=simplitrain_url, port=simplitrain_port)
    schedule_course_url = "http://{host}:{port}/api/v1/courses/schedule".format(
        host=simplitrain_url, port=simplitrain_port)
    login_url = "http://{host}:{port}/api/v1/login".format(
        host=simplitrain_url, port=simplitrain_port)
    get_course_details_by_course_id_url = "http://{host}:{port}/api/v1/courses".format(
        host=simplitrain_url, port=simplitrain_port)
