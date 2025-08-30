# E-Commerce Automation Project

## Overview
This project is an **automation exercise** for an e-commerce website, using **Cypress** and **Cucumber** (Gherkin syntax) for end-to-end testing. The tests are implemented following the **Page Object Model (POM)** for better maintainability and readability. The project covers product actions, cart operations, product reviews, and user authentication scenarios.

## Test Cases Covered
Below is the list of test cases for practice and automation:

1. Register User  
2. Login User with correct email and password  
3. Login User with incorrect email and password  
4. Logout User  
5. Register User with existing email  
6. Contact Us Form  
7. Verify All Products and product detail page  
8. Search Product  
9. Verify Subscription in home page  
10. Verify Subscription in Cart page  
11. Add Products in Cart  
12. Verify Product quantity in Cart  
13. Place Order: Register while Checkout  
14. Place Order: Register before Checkout  
15. Remove Products From Cart  
16. View Category Products  
17. View & Cart Brand Products  
18. Search Products and Verify Cart After Login  
19. Add review on product  
20. Add to cart from Recommended items  
21. Download Invoice after purchase order  
22. Verify Scroll Up using 'Arrow' button and Scroll Down functionality  
23. Verify Scroll Up without 'Arrow' button and Scroll Down functionality  

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
