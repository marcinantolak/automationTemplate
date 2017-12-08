Feature: Test page

  Scenario: Example page home page
    Given I open home page
    When I am on correct url
    Then I should see all links

  Scenario: Example page Login page
    Given I open home page
    When I click contact link
    Then I should be on correct page