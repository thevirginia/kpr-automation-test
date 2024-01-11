@feature("Login_Settings")
Feature: Login Settings

    Feature Login page will work depending on the user credentials

    Background:
        Given the user Sign into the settings page in "staging"
        And I change the resolution to "macbook-15"
        And A user clicks the Sign in button in the home page

    @severity("critical")
    Scenario: Success Login in setting page
        When A user enters the email "lovamin725@dpsols.com"
        And A user enters the password "lovamin725.."
        And A user clicks on the login button
        Then valid if the user has been able to login

    Scenario: Incorrect email Login in setting page
        When A user enters the email "test2026@gmail.com"
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then The error message is displayed

    Scenario: empty email field in setting page
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: empty password field in setting page
        And A user enters the email "test2026@gmail.com"
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: empty email and password fields in setting page
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Incorrect Password Login in setting page
        When A user enters the email "lovamin725@dpsols.com"
        And A user enters the password "test2026.."
        And A user clicks on the login button
        Then The error message is displayed

    Scenario: background texts in setting page
        Then valid "Email" background text is visible
        And valid "Password" background text is visible
        And A user clicks on the sign up button
        And valid "Nickname" background text is visible
        And valid "Email" background text is visible
        And valid "Password" background text is visible
        And valid "Confirm Password" background text is visible

    Scenario: Successful registration in setting page
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid if the user has been able to register

    Scenario: home page texts in setting page
        Then valid that the text "Welcome back Keeper" is visible
        And valid that the text "Forgot Password?" is visible
        And valid that the text "OR SIGN IN WITH SOCIALS" is visible
        And valid that the text "Dont have an account?" is visible

    Scenario: validate the back button in the sign up modal in setting page
        When A user clicks on the sign up button
        And A user clicks on the back button
        Then valid button on the home page

    Scenario: forgot Password modal in setting page
        When A user clicks on the forgot Password button
        Then valid that the text "Forgot your password" is visible
        And valid that the text "Verify your email address?" is visible
        And valid "Email Address" background text is visible
        And A user clicks on the Send Verification Code button

    Scenario: empty nickname field in sign up in setting page
        When A user clicks on the sign up button
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: empty email field in sign up in setting page
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: empty password field in sign up in setting page
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: empty confirm password field in sign up in setting page
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then The error message is displayed