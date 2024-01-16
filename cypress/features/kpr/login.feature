@feature("Login")
Feature: Login

    Feature Login page will work depending on the user credentials

    Background:
        Given A user opens a login website in "develop"
        And A user enters the password in the home page
        And A user clicks on the submit button
        And A user clicks on the login to kprverse button

    @severity("critical")
    Scenario: Successful Login in KPR
        When A user enters the email "test2024@gmail.com"
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then valid if the user has been able to login

    Scenario: Incorrect email on Login in KPR
        When A user enters the email "test2026@gmail.com"
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then The error message is displayed

    Scenario: Validating empty email field error in macbook-15
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validation of empty password text field error in macbook-15
        And A user enters the email "test2026@gmail.com"
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validating empty password and email field error in KPR
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: incorrect login password in KPR
        When A user enters the email "test2024@gmail.com"
        And A user enters the password "test2026.."
        And A user clicks on the login button
        Then The error message is displayed

    Scenario: Visibility of background texts in the Login/Signup area in KPR
        Then valid "Email" background text is visible
        And valid "Password" background text is visible
        And A user clicks on the sign up button
        And valid "Nickname" background text is visible
        And valid "Email" background text is visible
        And valid "Password" background text is visible
        And valid "Confirm Password" background text is visible

    Scenario: Successful registration in KPR
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid if the user has been able to register

    Scenario: Visibility of the Home page texts in KPR
        Then valid that the text "Welcome back Keeper" is visible
        And valid that the text "Forgot Password?" is visible
        And valid that the text "OR SIGN IN WITH SOCIALS" is visible
        And valid that the text "Dont have an account?" is visible

    Scenario: validate the back button in the sign up modal in KPR
        When A user clicks on the sign up button
        And A user clicks on the back button
        Then valid button on the home page

    Scenario: Validation of forgot password in the modal in KPR
        When A user clicks on the forgot Password button
        Then valid that the text "Forgot your password" is visible
        And valid that the text "Verify your email address?" is visible
        And valid "Email Address" background text is visible
        And A user clicks on the Send Verification Code button

    Scenario: Validation of empty nickname field error message in KPR
        When A user clicks on the sign up button
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validation of empty email field error message in KPR
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validation of empty password field error message in KPR
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Error validation of empty confirm password field in KPR
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then The error message is displayed