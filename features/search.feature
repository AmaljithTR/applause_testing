Feature: Search

    Search keywords related to applause in help

    Scenario: Search for "faq" in help
        Given Open website
        When Goto Help
        And I enter text "faq" to search
        And Press "Enter"
        Then I should recieve "Action successfull"

    Scenario: Search for "faq" in help and select first suggestion
        Given Open website
        When Goto Help
        And I enter text "faq" to search
        And Select first suggestion
        Then I should recieve "Action successfull"

    Scenario: Search for "fdffgdg;dlvflgl,g" in help
        Given Open website
        When Goto Help
        And I enter text "fdffgdg;dlvflgl,g" to search
        And Press "Enter"
        And I recieve no result
        Then I should recieve "Action successfull"