# Login Page

This is a simple login page that checks the fields to ensure both the email and password are valid.

What is checked in the HTML file (client side):
Both fields are not empty

What is checked in the JavaScript file (server side):
The Email field contains an "@" character.
The password is at least 8 characters long.

If one of these conditions are violated, then an alert pops up telling you the requirements. If all of these conditions are satisfied, than text is output saying that you logged in as the given email.
