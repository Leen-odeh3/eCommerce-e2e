Feature: Login User
  As a registered user
  I want to log in to my account
  So that I can access my profile and use the website

  @smoke
  Scenario: Login with correct email and password
    Given I am on the login page
    When I enter valid login credentials
    And I click the 'Login' button
    Then I should be redirected to mainPage

  @regression
  Scenario: Login with incorrect email and correct password
    Given I am on the login page
    When I enter an invalid email and valid password
    And I click the 'Login' button
    Then I should see the error message "Your email or password is incorrect!"

  @regression
  Scenario: Login with correct email and incorrect password
    Given I am on the login page
    When I enter a valid email and incorrect password
    And I click the 'Login' button
    Then I should see the error message "Your email or password is incorrect!"
