Feature: Contact Us form
  As a user
  I want to send a message through the contact form
  So that I can contact the support team

  Background:
    Given I open the Automation Exercise website
    And I navigate to the Contact Us page

  Scenario: Submit contact form successfully
    When I enter "Leen" in the name field
    And I enter "leen@example.com" in the email field
    And I enter "Subject test" in the subject field
    And I enter "This is a test message for support." in the message field
    And I upload a file "testfile.pdf"
    And I click the submit button
    Then I should see a success message "Success! Your details have been submitted successfully."

  Scenario: Submit contact form with missing mandatory fields
    When I leave the email field empty
    And I enter "Leen" in the name field
    And I enter "Subject test" in the subject field
    And I enter "This is a test message" in the message field
    And I click the submit button
    Then I should see an error alert

  Scenario: Navigate back to home page from Contact Us
    When I click the Home button
    Then I should be redirected to the homepage
