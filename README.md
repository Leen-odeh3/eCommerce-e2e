# E-Commerce Automation Project

## Overview
This project is an **automation exercise** for an e-commerce website, using **Cypress** and **Cucumber** (Gherkin syntax) for end-to-end testing. The tests are implemented following the **Page Object Model (POM)** for better maintainability and readability. The project covers product actions, cart operations, product reviews, and user authentication scenarios.

## Test Cases Covered
Below is the list of test cases for practice and automation:

- Register User
- Login User with correct email and password
- Login User with incorrect email and password
- Logout User
- Register User with existing email
- Contact Us Form
- Verify All Products and product detail page
- Search Product
- Verify Subscription in home page
- Verify Subscription in Cart page
- Add Products in Cart
- Verify Product quantity in Cart
- Place Order: Register while Checkout
- Place Order: Register before Checkout
- Remove Products From Cart
- View Category Products
- View & Cart Brand Products
- Search Products and Verify Cart After Login
- Add review on product
- Add to cart from Recommended items
- Download Invoice after purchase order
- Verify Scroll Up using 'Arrow' button and Scroll Down functionality
- Verify Scroll Up without 'Arrow' button and Scroll Down functionality



## Tools & Technologies
- **Cypress**: End-to-end testing framework
- **Cucumber/Gherkin**: Behavior-driven development (BDD) syntax
- **Page Object Model (POM)**: Organizes actions and assertions
- **JavaScript**
- **JMeter**: Performance/load testing
- **GitHub**: Version control

## Installation
1. Clone the repository:
```bash
git clone https://github.com/Leen-odeh3/eCommerce-e2e.git
```
2. Navigate to the project folder:
```bash
cd eCommerce-e2e
```
3. Install dependencies:
```bash
npm install
```

## Running Tests
- **Cypress Tests**
```bash
npx cypress open
```
Select a feature or test file to run in the Cypress Test Runner.

## Performance Testing
- Executed performance and load testing using **JMeter**.
- Simulated multiple users to test application behavior under load.
- Validated response times, throughput, and error rates for key functionalities.
- Ensured stability and reliability of the e-commerce application under stress.

## Contributing
Feel free to fork this repository and submit pull requests for improvements or new test scenarios.

## License
This project is for educational purposes.
