<?php
class DBConnect
{
    private $server = 'localhost';
    private $dbname = 'react-php';
    private $user = 'root';
    private $password = '';

    public function connect()
    {
        try {
            $conn = new PDO('mysql:host=' . $this->server . ';dbname=' . $this->dbname, $this->user, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (\Exception $e) {
            echo "DataBase Error: " . $e->getMessage();
        }
    }
}
