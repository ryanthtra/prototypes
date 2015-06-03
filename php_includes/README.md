# Prototype 1
- Create index.php
  - include the following code in it
  - 
  ``` 
  <?php
    $a=1; $b=5;
    include('includes/data.php');
    $result = $a * $b;
    print("<br>Result is $result");
  </?>
  ```
- Create a folder called includes
- In the includes folder, create a file called 'data.php'
  - In the data.php file, include the following code:
  ```
  <?php 
  $a = 3;
  $b = 2; 
  ?>
  ```
- Run the file and note the print result

# Prototype 2
- Add the following code to the bottom of 'index.php'
  
    
