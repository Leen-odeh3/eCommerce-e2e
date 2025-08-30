Feature: Create New Account
  As a new user
  I want to register an account
  So that I can log in and use the website

  Background:
    Given I am on the home page

  @smoke
  Scenario: Successful user registration
    When I click on the Signup / Login button
    And I enter a new name and a valid email address
    And I click the 'Signup' button
    And I fill all required registration details
    And I click the 'Create Account' button
    Then I should see the message "Account Created!"
    And I click the 'Continue' button
    And I should be logged in as the new user

  @regression
  Scenario: Register with an existing email
    When I click on the Signup / Login button
    And I enter a name and an existing email address
    And I click the 'Signup' button
    Then I should see the error message "Email Address already exist!"

  @regression
  Scenario: Register with an invalid email format
    When I click on the Signup / Login button
    And I enter a new name and an invalid email address
    And I click the 'Signup' button
    Then should see the error message "please include an '@' in the email address."
