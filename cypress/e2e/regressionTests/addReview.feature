Feature: Add review on product

  Scenario: User adds a review on product
    Given I navigate to website
    When I click on "Products" button
    Then I should be navigated to ALL PRODUCTS page successfully
    When I click on "View Product" button
    Then I should see "Write Your Review" section
    When I enter name "Leen", email "leen@test.com" and review "Great product!"
    And I click on "Submit" review button
    Then I should see success message "Thank you for your review."
