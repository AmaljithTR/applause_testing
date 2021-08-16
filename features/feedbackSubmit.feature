Feature: FAQ Feedback Submit

    FAQ conatins list of questions and answers relating to Applause, with feedback form.

    Scenario: Submitting feedback form for a question in help for fans
        Given Open website
        When Goto Help
        And Click FAQ
        And Select a Question
        And I Submitted yes for the feedback form
        Then I should recieve "Action successfull"