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

    Scenario: Incorrect email Login in setting page With macbook-15
        When A user enters the email "test2026@gmail.com"
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then The error message is displayed

    Scenario: Validating empty email field error in settings Page with macbook-15
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validating empty password field error in settings Page with macbook-15
        And A user enters the email "test2026@gmail.com"
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validating empty email and password field error in settings Page with macbook-15
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validating incorrect password error on settings Page with macbook-15
        When A user enters the email "lovamin725@dpsols.com"
        And A user enters the password "test2026.."
        And A user clicks on the login button
        Then The error message is displayed

    Scenario: Visibility of SIGN UP background texts in settings Page with macbook-15
        Then valid "Email" background text is visible
        And valid "Password" background text is visible
        And A user clicks on the sign up button
        And valid "Nickname" background text is visible
        And valid "Email" background text is visible
        And valid "Password" background text is visible
        And valid "Confirm Password" background text is visible

    Scenario: Successful registration in settings Page with macbook-15
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid if the user has been able to register

    Scenario: Visibility of home page texts in settings Page with macbook-15
        Then valid that the text "Welcome back Keeper" is visible
        And valid that the text "Forgot Password?" is visible
        And valid that the text "OR SIGN IN WITH SOCIALS" is visible
        And valid that the text "Dont have an account?" is visible

    Scenario: Validation of the "Back" button in the sign up modal in settings Page with macbook-15
        When A user clicks on the sign up button
        And A user clicks on the back button
        Then valid button on the home page

    Scenario: Validation of forgot password in the modal in Settings Page with macbook-15
        When A user clicks on the forgot Password button
        Then valid that the text "Forgot your password" is visible
        And valid that the text "Verify your email address?" is visible
        And valid "Email Address" background text is visible
        And A user clicks on the Send Verification Code button

    Scenario: Validation of empty nickname field error message in settings page with macbook-15
        When A user clicks on the sign up button
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validation of empty email field error message in settings page with macbook-15
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validation of empty password field error message in settings page with macbook-15
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validation of empty confirm password field error message in settings page with macbook-15
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then The error message is displayed