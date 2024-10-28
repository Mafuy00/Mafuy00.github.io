<?php

header('Content-Type: application/json');

$pets = [
    'Dogs' => [
        [
            'id' => 1,
            'name' => 'Buddy',
            'age' => 3,
            'breed' => 'Golden Retriever',
            'description' => 'Friendly and energetic dog looking for a loving home.',
            'available' => true
        ],
        [
            'id' => 2,
            'name' => 'Max',
            'age' => 5,
            'breed' => 'German Shepherd',
            'description' => 'Loyal companion, great with kids.',
            'available' => true
        ]
    ],
    'Cats' => [
        [
            'id' => 3,
            'name' => 'Whiskers',
            'age' => 2,
            'breed' => 'Siamese',
            'description' => 'Affectionate cat that loves to cuddle.',
            'available' => true
        ],
        [
            'id' => 4,
            'name' => 'Mittens',
            'age' => 4,
            'breed' => 'Tabby',
            'description' => 'Calm and independent, but enjoys attention.',
            'available' => false
        ]
    ],
    'Birds' => [
        [
            'id' => 5,
            'name' => 'Tweety',
            'age' => 1,
            'breed' => 'Canary',
            'description' => 'Sings beautifully, looking for a peaceful home.',
            'available' => true
        ]
    ]
];

echo json_encode($pets);

?>