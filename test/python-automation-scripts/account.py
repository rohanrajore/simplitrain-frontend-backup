import logging
import logging.config
import requests
import init
import json

logger = logging.getLogger(__name__)

init.init_local_environment()
init.init_urls()


def login(user_name, password):
    logger.debug("logging in a user")

    login_headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    login_payload = {"email": user_name, "password": password}

    response = requests.request(
        "POST", init.login_url, headers=login_headers, data=json.dumps(login_payload))
    response.raise_for_status
    logger.debug(f"status: {response.status_code}")
    logger.debug(f"time taken for login: {response.elapsed}")
    return response
