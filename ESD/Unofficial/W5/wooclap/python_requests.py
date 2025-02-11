import requests

try:
    url = "http://localhost:5000/book/1234567890123"
    json = {"availability": 15, "price": 98.5, "title": "ESD"}
    response = requests.request(
        "POST", url, json=json)  # Send HTTP POST to url

    print("HTTP CODE: " + str(response.status_code))  # Print HTTP status code
    print(response.json())  # Print JSON received
except Exception as e:
    print("ERROR: " + str(e))
