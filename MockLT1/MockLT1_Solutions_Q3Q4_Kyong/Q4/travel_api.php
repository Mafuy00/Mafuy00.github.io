<?php

/* DO NOT MODIFY THIS FILE */

header('Content-Type: application/json');

// Sample hard-coded travel package data based on category
$travelPackages = [
    'Korea' => [
        'name' => 'Korea DMZ 6N7D Land Tour',
        'duration' => '6 Nights 7 Days',
        'description' => 'Explore the Demilitarized Zone in Korea with this 6-night land tour. Visit historical sites and experience Korean culture.'
    ],
    'Argentina' => [
        'name' => 'Argentina-Antarctica 9N10D Cruise',
        'duration' => '9 Nights 10 Days',
        'description' => 'Embark on a cruise from Argentina to Antarctica. Enjoy breathtaking views of glaciers, wildlife, and more during this unforgettable journey.'
    ],
    'Kenya' => [
        'name' => 'Kenya Nairobi 4N5D Safari Tour',
        'duration' => '4 Nights 5 Days',
        'description' => "Experience the wildlife of Nairobi with this 4-night safari tour. Witness the Big Five and explore Kenya's rich natural beauty."
    ]
];

// Get the package from the query string
$package = $_GET['package'] ?? '';

// Return the travel package data for the selected category
if (array_key_exists($package, $travelPackages)) {
    echo json_encode($travelPackages[$package]);
} else {
    echo json_encode([
        'name' => 'Unknown',
        'duration' => 'N/A',
        'description' => 'No travel package details available for the selected package.'
    ]);
}

?>
