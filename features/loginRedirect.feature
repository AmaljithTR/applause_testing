Feature: Applause login

    Login to applause is handled with zoom.

    Scenario: Applause signin redirects to zoom
        Given Open website
        When I Click SignIn
        Then I should be redirected to "https://zoom.us/oauth2/login"
