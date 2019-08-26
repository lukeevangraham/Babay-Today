# Babay Today

## Overview
Deployed at:  https://ayadav2-baby-logger.herokuapp.com/

Babay Today is an app to help parents monitor the care of their infants.  Users can log feedings, diaper changes and sleep information for each of their children.  Babay Today generates reports based off of the information provided.

Babay Today is built with MySQL, Sequelize, Node.js, Express, and Passport.js.

## Views

### Login

![Login](./readmeImages/login.png?raw=true "Login Page")

Users can create a new account or use an eisting one.  A sample account is at the following:
* username: gandalf@gmail.com
* password: 1234567890

### Baby Select

![Baby Select](./readmeImages/babySelect.png?raw=true "Baby Select Page")

After logging in users can select the baby the want to log events for or add a baby to the site.

### Main

![Main](./readmeImages/main.png?raw=true "Main Page")

From the main page users can choose to log one of the following
![Food event entry form](./readmeImages/food.png?raw=true "Food Form")
* **Food event**: bottle at current time, nursing at current time or a custom time by selecting 'Manual Feed Log'

![Diaper event entry form](./readmeImages/diaper.png?raw=true "Diaper Form")

* **Diaper event**: dry at current time, wet at current time, dirty at current time or a custom time by selecting 'Manual Change Log'

![Sleep event entry form](./readmeImages/sleep.png?raw=true "Sleep Form")

* **Sleep event**: at current time or a custom time by selecting 'Manual sleep log'


The last five events entered into the log are displayed at the bottom of the main page.

### Reports

![Report](./readmeImages/report.png?raw=true "Report Page")

The reports page lists entries for the current infant.
