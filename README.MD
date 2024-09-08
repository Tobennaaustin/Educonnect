# EduConnect
# Please use mobile view to run this code. This version is not available for laptops for now thankyou


EduConnect is a multipage web application for university students, allowing them to sign up, log in, and access various resources such as course materials, study groups, event calendars, discussion forums, a resource library, tutoring services, career services, announcements, and a contact directory. The application uses JSON Server to simulate a backend for storing user data and resources.


## Prerequisites

1. **Node.js**: Ensure that Node.js is installed on your machine. [Download Node.js](https://nodejs.org/)

## Installation


1. **Install JSON Server**:
    ```bash
    npm install -g json-server
    ```



2. **Populate `db.json`**:
    Add the following initial data to `db.json`:
    ```json
    {
      "authmatric": {
        "matricNumbers": [
          "220502054",
          "220502006",
          "220501010",
          ...
        ]
      },
      "users": []
      //add others too
    }
    ```


## Running the Application

1. **Start JSON Server**:
    ```bash
    json-server --watch db.json
    ```

2. **Open the Application**:
    Open `public/index.html` in your web browser.

## File Details

- **index.html**: Main page where users will click on the get started btn and signup or login.
- **login.html**: Login page.
- **CSS**: there are 4 in number, the styles.css is the genral one, then you figure out the rest.
- **signup.js**: JavaScript for handling signup functionality.
- **general.js**: I was trying the navigation stuff.
- **login.js**: JavaScript for handling login functionality.
- **demo.js**: JavaScript for handling user data and navigation.
- **index.js**: No mind that one, i was trying something.

