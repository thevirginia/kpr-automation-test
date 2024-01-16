@feature("Login_Mint")
Feature: Login Mint

    Feature Login page will work depending on the user credentials

    Background:
        Given A user opens a Mint Page in "staging"
        And I change the resolution to "iphone-8"

    @severity("critical")
    Scenario: Successful login to Mint Page with Iphone 8
        When A user enters the email "test2024@gmail.com"
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then valid if the user has been able to login

    Scenario: Incorrect email on Mint Page login with Iphone 8
        When A user enters the email "test2026@gmail.com"
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then The error message is displayed

    Scenario: Validating empty email field error in Mint Page with Iphone 8
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validating empty password field error in Mint Page with Iphone 8
        And A user enters the email "test2026@gmail.com"
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validating empty email and password field error in Mint Page with Iphone 8
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Incorrect Password Login in Mint page with Iphone 8
        When A user enters the email "test2024@gmail.com"
        And A user enters the password "test2026.."
        And A user clicks on the login button
        Then The error message is displayed

    Scenario: Visibility of SIGN UP background texts in Mint Page with Iphone 8
        Then valid "Email" background text is visible
        And valid "Password" background text is visible
        And A user clicks on the sign up button
        And valid "Nickname" background text is visible
        And valid "Email" background text is visible
        And valid "Password" background text is visible
        And valid "Confirm Password" background text is visible

    Scenario: Successful registration in Mint page with Iphone 8
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid if the user has been able to register

    Scenario: Visibility of home page texts in Mint Page with Iphone 8
        Then valid that the text "Welcome back Keeper" is visible
        And valid that the text "Forgot Password?" is visible
        And valid that the text "OR SIGN IN WITH SOCIALS" is visible
        And valid that the text "Dont have an account?" is visible

    Scenario: Validation of the "Back" button in the sign up modal in Mint Page with Iphone 8
        When A user clicks on the sign up button
        And A user clicks on the back button
        Then valid button on the home page

    Scenario: Display of the "Forgot password" button in the sign up mode in Mint Page with Iphone 8
        When A user clicks on the forgot Password button
        Then valid that the text "Forgot your password" is visible
        And valid that the text "Verify your email address?" is visible
        And valid "Email Address" background text is visible
        And A user clicks on the Send Verification Code button

    Scenario: Validating empty nickname field error in Mint Page signup with Iphone 8
        When A user clicks on the sign up button
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validating empty email field error in Mint Page signup with Iphone 8
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the password "test2024.."
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Validating empty password field error in Mint Page signup with Iphone 8
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enter the confirm Password "test2024.."
        And A user clicks on the login button
        Then valid error message of empty field

    Scenario: Error validation of empty confirm password field in the signup of Mint Page with Iphone 8
        When A user clicks on the sign up button
        And A user enters the nickname
        And A user enters the new email
        And A user enters the password "test2024.."
        And A user clicks on the login button
        Then The error message is displayed