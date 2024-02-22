# Govtech-Technical-Assessment

A. Frontend:

- Create a single page web application that displays 2 number input fields, an "Add" button and a "Subtract" button.
- When you fill up the 2 input fields and click the "Add" button, your application will send a POST request to your server, which will reply with the addition of the 2 numbers. You will display the result in your webpage.
- When you fill up the 2 input fields and click the "Subtract" button, your application will send a POST request to your server, which will reply with the subtraction of the 2 numbers. You will display the result in your webpage.
- If any of the 2 input fields are blank, just treat the input value as 0 and still trigger the request to the server, displaying the result in your webpage.

B. Backend:

- Create a simple REST API server that will accept requests from your frontend application.
- API 1 - POST request using (application/x-www-form-urlencoded) accepting 2 numbers, add the 2 numbers in the server, and return the result as a response (application/json)
- API 2 - POST request using (application/x-www-form-urlencoded) accepting 2 numbers, subtract the 2 numbers in the server, and return the result as a response (application/json)
