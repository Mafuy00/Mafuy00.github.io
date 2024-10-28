<?php

header('Content-Type: application/json');

$employees = [
    ['id' => 1, 'name' => 'John Doe', 'department' => 'Engineering', 'email' => 'john.doe@company.com'],
    ['id' => 2, 'name' => 'Jane Smith', 'department' => 'Marketing', 'email' => 'jane.smith@company.com'],
    ['id' => 3, 'name' => 'Bill Evans', 'department' => 'HR', 'email' => 'bill.evans@company.com'],
    ['id' => 4, 'name' => 'Selena Gibbons', 'department' => 'Finance', 'email' => 'selena.gibbons@company.com']
];

echo json_encode($employees);

?>