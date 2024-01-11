@feature("Widget")
Feature: Widget

    Feature Login page will work depending on the user credentials

    Background:
        Given the user opens the website
        And I change the resolution to "iphone-8"
        And A user clicks the Login button in the home page

    @severity("critical")
    Scenario: Success Login in Widget page
        When A user enters the email "lovamin725@dpsols.com"
        And A user enters the password "lovamin725.."
        And A user clicks on the login button
        Then valid if the user has been able to login

    Scenario: Incorrect email Login in Widget page
        When A user enters the email "test2026@gmail.com"
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then The error message is displayed

    Scenario: empty email field in Widget page
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: empty password field in Widget page
        And A user enters the email "test2026@gmail.com"
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: empty email and password fields in Widget page
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Incorrect Password Login in Widget page
        When A user enters the email "lovamin725@dpsols.com"
        And A user enters the password "test2026.."
        And A user clicks on the login button
        Then The error message is displayed

    Scenario: background texts in Widget page
        Then valid "Email" background text is visible
        And valid "Password" background text is visible
        And A user clicks on the sign up button
        And valid "Nickname" background text is visible
        And valid "Email" background text is visible
        And valid "Password" background text is visible
        And valid "Confirm Password" background text is visible

    Scenario: Successful registration in Widget page
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid if the user has been able to register

    Scenario: home page texts in Widget page
        Then valid that the text "Welcome back Keeper" is visible
        And valid that the text "Forgot Password?" is visible
        And valid that the text "OR SIGN IN WITH SOCIALS" is visible
        And valid that the text "Dont have an account?" is visible

    Scenario: validate the back button in the sign up modal in Widget page
        When A user clicks on the sign up button
        And A user clicks on the back button
        Then valid button on the home page

    Scenario: forgot Password modal in Widget page
        When A user clicks on the forgot Password button
        Then valid that the text "Forgot your password" is visible
        And valid that the text "Verify your email address?" is visible
        And valid "Email Address" background text is visible
        And A user clicks on the Send Verification Code button

    Scenario: empty nickname field in sign up in Widget page
        When A user clicks on the sign up button
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: empty email field in sign up in Widget page
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: empty password field in sign up in Widget page
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: empty confirm password field in sign up in Widget page
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then The error message is displayed