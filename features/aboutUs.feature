Feature: AboutUS

    Contains information about applause

    Scenario: View AboutUS
        Given Open website
        When Goto About us
        Then I should see "https://grayjay.applause.stream/about"