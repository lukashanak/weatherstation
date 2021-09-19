# Weather Station using Raspberry Pi and Arduino UNO

## Table of Content
What the project does
What hardware and technologies did I use
Final conclusions


## What the project does
1. It takes the data from the sensors (temperature, pressure etc.)
2. It's send those data into the Arduino UNO / Raspberry PI
3. It's saving those data into the MySQL database and manipulating those data using PHP
4. It's showing those data from the MySQL database in the website. Actual values, daily/weekly/monthly charts.

## What hardware and technologies did I use
1. Raspberry Pi 4 for running the server && taking data from sensors 
2. Arduino UNO for taking data from sensors
3. Sensors like BME280, MH-DR raindrops module, etc.(all I2C interface because it's simple)
4. MySQL as a database. PHP for manipulating with the database.
5. HTML, CSS, JavaScript for showing the data in the browser
6. ApexChart library for creating daily/weekly/montly charts
7. Crontab for scheduling Linux tasks



## Final conclusions
I really enjoyed making this project. Anyway, I learned a lot. I worked with many technologies and faced many challenges. The project isn't perfect. I would do many things differently now.



