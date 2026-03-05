## Step 1
Generate a random state string to protect from CSRF and store in local storage 

Make a redirect to this URL 
`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`

After success, it will redirect to redirectUri with code and state

Code is OAuth 2.0 authorization code

If failure, the following fields are sent

- error
- error_description
- state

## Step 2
Have a route for redirectUri 
/linkedin/auth/callback

capture the get parameters code/error and state

If code is present, verify if the state in local storage matches the state returned from linkedin

If error is present, show the error to the user appropriately and take to login page

## Step 3
Make a server side call to SimpliTrain API linkedLoginApi and pass the code
    POST https://localhost:8080/api/v1/linkedinSignup
    {
        "code" : ""
    }

## Step 4
Use the code to exchange for accessToken with LinkedIn

    POST https://www.linkedin.com/oauth/v2/accessToken
    Content-Type: application/x-www-form-urlencoded
    grant_type=authorization_code&code=AQRfTOGY25wyFI_MmCyR879DD4q8JibYwXXKJ-Q99WBjDDgHBJYcqr5iom6cltE6IdEk9P7fb5We0uK3daBSBFRNj2cEdoozij1hzWLQpBvDlEli-7J2Ea5yDrWnCVlRHcLJDjYa7AiY2FvRafNmCjqjwLSmR8JOSYi2937oAskCcHg87905KO8RYaZdKA&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Flinkedin%2Fauth%2Fcallback&client_id=860jxeciixgosg&client_secret=bnA2R1EIcYgVUuZF

Response

    {"access_token":"AQVYgQV0unYuXiNL3LjHVu8EnEL_uOtwrnZa7qQhpQUSxWEI7SVPOb6-e6cvxPxi56QYqboNLIL4q4dk0_KKWSrIO1Ie4nGICuGYv584lkhXPEjkW1DGPSxk_bEPlvlxMyIkPdpaFw2tfhGtMn0rjRZjO__dxTydYs8A9zdjJvGvkjYqMLJrSn0DVad-kFa4T4Vuocia1bKkMYTh-aVSA9z88_6L7mpmrDi5IRfe12M19LVx4c6P-rP5E1O_xMTnN7brAOniihyUAtGnZDF2evjCpFqWEW2WkVmEe0qcmvYChaF1etL0FELNbMJA5ns38I2TCivYg2NHIJA3SBsriCmrjlt5RA","expires_in":5183999}

collect localizedFirstName, localizedLastName, id

    GET https://api.linkedin.com/v2/me
    Connection: Keep-Alive
    Authorization: Bearer AQVYgQV0unYuXiNL3LjHVu8EnEL_uOtwrnZa7qQhpQUSxWEI7SVPOb6-e6cvxPxi56QYqboNLIL4q4dk0_KKWSrIO1Ie4nGICuGYv584lkhXPEjkW1DGPSxk_bEPlvlxMyIkPdpaFw2tfhGtMn0rjRZjO__dxTydYs8A9zdjJvGvkjYqMLJrSn0DVad-kFa4T4Vuocia1bKkMYTh-aVSA9z88_6L7mpmrDi5IRfe12M19LVx4c6P-rP5E1O_xMTnN7brAOniihyUAtGnZDF2evjCpFqWEW2WkVmEe0qcmvYChaF1etL0FELNbMJA5ns38I2TCivYg2NHIJA3SBsriCmrjlt5RA

Response

    {
      "localizedLastName": "Jammalamadaka",
      "profilePicture": {
        "displayImage": "urn:li:digitalmediaAsset:C5103AQFRWz3HOuAPTw"
      },
      "firstName": {
        "localized": {
          "en_US": "Sridhar"
        },
        "preferredLocale": {
          "country": "US",
          "language": "en"
        }
      },
      "lastName": {
        "localized": {
          "en_US": "Jammalamadaka"
        },
        "preferredLocale": {
          "country": "US",
          "language": "en"
        }
      },
      "id": "Y9Qfzr_V5c",
      "localizedFirstName": "Sridhar"
    }

## Step 5 
Check if a user with the LinkedinId is already registered. 
Make another call to fetch primary email address and store it in database

    GET https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))
    Connection: Keep-Alive
    Authorization: Bearer AQVYgQV0unYuXiNL3LjHVu8EnEL_uOtwrnZa7qQhpQUSxWEI7SVPOb6-e6cvxPxi56QYqboNLIL4q4dk0_KKWSrIO1Ie4nGICuGYv584lkhXPEjkW1DGPSxk_bEPlvlxMyIkPdpaFw2tfhGtMn0rjRZjO__dxTydYs8A9zdjJvGvkjYqMLJrSn0DVad-kFa4T4Vuocia1bKkMYTh-aVSA9z88_6L7mpmrDi5IRfe12M19LVx4c6P-rP5E1O_xMTnN7brAOniihyUAtGnZDF2evjCpFqWEW2WkVmEe0qcmvYChaF1etL0FELNbMJA5ns38I2TCivYg2NHIJA3SBsriCmrjlt5RA

Response 

    {
      "elements": [
        {
          "handle": "urn:li:emailAddress:441578225",
          "type": "EMAIL",
          "handle~": {
            "emailAddress": "sridhar.jammalamadaka@gmail.com"
          },
          "primary": true
        }
      ]
    }
