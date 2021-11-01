# Weather Station using Raspberry Pi and Arduino UNO

<!-- 
## Table of Content
- [What the project does](#What-the-project-does)
- What hardware and technologies did I use
- Final conclusions
!-->

## How does project work
1. There are many sensors connected to either Raspberry Pi or Arduino UNO. Those sensors are listening to the real world (temperature, humidity, pressure etc.)
2. Everything is being saved in the MySQL database every 3 seconds.
4. Data from the MySQL database are shown in the website. Real time values and daily/weekly/monthly charts. You can see how it looks like here: https://i.imgur.com/yXEnd5l.png

## What hardware and technologies did I use
1. Raspberry Pi 4 for running the server && taking data from sensors 
2. Arduino UNO for taking data from sensors
3. Sensors like BME280, MH-DR raindrops module, etc.(all I2C interface because it's simple)
4. MySQL as a database. PHP for manipulating with the database.
5. HTML, CSS, JavaScript for showing the data in the browser
6. ApexChart library for creating daily/weekly/montly charts
7. Crontab for scheduling Linux tasks



## Final conclusions
I really enjoyed making this project. It was fun to work with so many technologies and face so many challenges. I learned a lot.

