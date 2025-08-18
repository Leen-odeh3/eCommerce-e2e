Feature: View category products

  Scenario: User views products by category
    Given Navigate to website
    Then I should see categories in the left sidebar

    When I click on the 'Women' category
    And I click on a sub-category link under 'Women' category
    Then I should see the category page with title 'WOMEN - TOPS PRODUCTS'
