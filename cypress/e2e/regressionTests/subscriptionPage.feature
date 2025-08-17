Feature: Test Case 10: Verify Subscription in home page

  Scenario: Verify subscription functionality on home page
    Given Navigate to website
    Then Verify that home page is visible successfully
    When Scroll down to footer
    Then Verify text 'Subscription'
    And Enter email address in input and click arrow button
    Then Verify success message 'You have been successfully subscribed!' is visible



  Scenario: Verify subscription functionality on Cart page
    Given Navigate to website
    Then Click on cart link
    And Verify that cart page is visible successfully
    When Scroll down to footer
    Then Verify text 'Subscription'
    And Enter email address in input and click arrow button
    Then Verify success message 'You have been successfully subscribed!' is visible
