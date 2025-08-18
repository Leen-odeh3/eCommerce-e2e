Feature: Verify Scroll Up and Scroll Down functionality on Automation Exercise

  Background:
    Given Navigate to website
    Then I verify that home page is visible successfully

  Scenario: Test Case 25 - Verify Scroll Up using 'Arrow' button and Scroll Down functionality
    When I scroll down the page to the bottom
    Then I verify 'SUBSCRIPTION' is visible
    When I click on the scroll up arrow button at the bottom right
    Then I verify that the page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen

  Scenario: Test Case 26 - Verify Scroll Up without 'Arrow' button and Scroll Down functionality
    When I scroll down the page to the bottom
    Then I verify 'SUBSCRIPTION' is visible
    When I manually scroll up the page to the top
    Then I verify that the page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
