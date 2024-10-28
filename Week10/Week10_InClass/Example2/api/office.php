<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Expose-Headers: Content-Length, X-JSON");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$people = [

    "Michael Scott" => [
        "work" => [
            "branch" => "Scranton",
            "title" => "Regional Manager",
            "qualification" => "High School Diploma",
            "quote" => "That's what she said!"
        ],
        "personal" => [
            "relationship" =>  "Single",
            "age" =>  "48",
            "photo" =>  "photos/michael.jpg"
        ]
    ],

    "Jan Levinson" => [
        "work" => [
            "branch" => "New York",
            "title" => "Vice President",
            "qualification" => "MBA",
            "quote" => "I don't care how your day was!"
        ],
        "personal" => [
            "relationship" => "Divorced",
            "age" => "45",
            "photo" => "photos/jan.jpg"
        ]
    ],

    "Dwight Schrute" => [
        "work" => [
            "branch" => "Scranton",
            "title" => "Salesman & Assistant (to the) Regional Manager",
            "qualification" => "Bachelor's Degree",
            "quote" => "Fact! People love beets."
        ],
        "personal" => [
            "relationship" => "Attached",
            "age" => "43",
            "photo" => "photos/dwight.jpg"
        ]
    ],

    "Pam Beesly" => [
        "work" => [
            "branch" => "Scranton",
            "title" => "Receptionist",
            "qualification" => "Associate Degree",
            "quote" => "I feel God in this Chili's tonight"
        ],
        "personal" => [
            "relationship" => "Engaged",
            "age" => "31",
            "photo" => "photos/pam.jpg"
        ]
    ],

    "Jim Halpert" => [
        "work" => [
            "branch" => "Stamford",
            "title" => "Salesman",
            "qualification" => "Bachelor's Degree",
            "quote" => "Right now, this is just a job."
        ],
        "personal" => [
            "relationship" => "Single",
            "age" => "33",
            "photo" => "photos/jim.jpg"
        ]
    ]

];

// check if more than 0 record found
if(count($people) > 0) {

    $result_arr["records"] = $people;

    // Add info node (1 per response)
    $date = new DateTime('', new DateTimeZone('Asia/Singapore'));
    $result_arr["info"] = array(
        "author" => "Krazy Company",
        "response_datetime_singapore" => $date->format('Y-m-d H:i:sP')
    );

    // set response code - 200 OK
    http_response_code(200);

    // show products data in json format
    echo json_encode($result_arr);
}
else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no items found
    echo json_encode(
        array("message" => "No items found.")
    );
}
?>