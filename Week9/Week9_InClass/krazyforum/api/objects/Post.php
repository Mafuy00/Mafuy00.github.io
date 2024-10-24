<?php
    class Post {
    
        // database connection and table name
        private $conn;
        private $table_name = "post";
   
        // object properties
        public $id;
        public $create_timestamp;
        public $author;
        public $category;
        public $comment;
    
        // constructor with $db as database connection
        public function __construct($db) {
            $this->conn = $db;
        }

        // read all
        public function read() {
        
            // select all query
            $query = "SELECT
                            *
                        FROM
                            post";

        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // read one item
        public function readOne() {
        
            // query to read single record
            $query = "SELECT
                            *
                        FROM
                            post
                        WHERE
                            id = ?
                        LIMIT
                            0, 1";
        
            // prepare query statement
            $stmt = $this->conn->prepare( $query );
        
            // bind id of product to be updated
            $stmt->bindParam(1, $this->id);
        
            // execute query
            $stmt->execute();
        
            // get retrieved row
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
            // set values to object properties
            $this->id = $row['id'];
            $this->create_timestamp = $row['create_timestamp'];
            $this->author = $row['author'];
            $this->category = $row['category'];
            $this->comment = $row['comment'];
        }

        // read one item
        public function get_by_id($id) {
        
            // query to read single record
            $query = "SELECT
                            *
                        FROM
                            post
                        WHERE
                            id = ?";
        
            // prepare query statement
            $stmt = $this->conn->prepare( $query );
        
            // bind id of product to be updated
            $stmt->bindParam(1, $id);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }
        

        // search by author
        public function search_by_author($search_term) {
        
            // select all query
            $query = "SELECT
                        *
                        FROM
                            post
                        WHERE
                            UPPER(author) = ?
                        ORDER BY
                            id";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
            
            $search_term = strtoupper($search_term);
            // bind
            $stmt->bindParam(1, $search_term);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }


        // search by category
        public function search_by_category($search_term) {
        
            // select all query
            $query = "SELECT
                        *
                        FROM
                            post
                        WHERE
                            UPPER(category) = ?
                        ORDER BY
                            id";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
            
            $search_term = strtoupper($search_term);
            // bind
            $stmt->bindParam(1, $search_term);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }


        // write an entry into table
        public function write($author, $category, $comment) {
        
            // select all query
            $query = "INSERT INTO post (create_timestamp, author, category, comment)
                      VALUES (NOW(), ?, ?, ?)";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
            
            // bind
            $stmt->bindParam(1, $author);
            $stmt->bindParam(2, $category);
            $stmt->bindParam(3, $comment);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }


        // search by user's gender AND age
        public function search_by_author_category($author, $category) {
        
            // select all query
            $query = "SELECT
                        *
                        FROM
                            post
                        WHERE
                            UPPER(author) = ? AND
                            UPPER(category) = ?
                        ORDER BY
                            id";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);

            // bind
            $stmt->bindParam(1, $author);
            $stmt->bindParam(2, $category);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // read with pagination
        public function readPaging($from_record_num, $records_per_page) {
        
            // select query
            $query = "SELECT
                        *
                        FROM
                            post
                        ORDER BY id
                        LIMIT ?, ?";
        
            // prepare query statement
            $stmt = $this->conn->prepare( $query );
        
            // bind variable values
            $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
            $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);
        
            // execute query
            $stmt->execute();
        
            // return values from database
            return $stmt;
        }

        // used for paging
        public function count() {
            $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";
        
            $stmt = $this->conn->prepare( $query );
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
            return $row['total_rows'];
        }
    }
?>