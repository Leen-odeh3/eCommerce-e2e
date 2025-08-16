Feature: Logout User

    Scenario: User should be able to logout from the website

        Given I launch the browser and navigate to login page
        Then I should see the login page
        When I enter correct email address and password
        And I click login button
        Then I should see Logged in as username is visible
        When I click Logout button
        Then I should be nevigated to login page
