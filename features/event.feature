Feature: Applause events

    Create two-way performances, listening sessions, meet & greets and more as events in applause

    Scenario: Create event redirects to zoom
        Given Open website
        When I Click create event
        Then I should be redirected to "https://zoom.us/oauth2/login"
