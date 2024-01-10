@feature("Detail_Keepers_settings")
@story("Detail_Keepers_settings")
Feature: Detail Keepers settings

    Background:
        Given A user opens Detail Keepers Settings
        And I change the resolution to "iphone-8"
         And A user enters the Sign In button
        When A user enters the email "hahipoy739@wenkuu.com"
        And A user enters the password "hahipoy739.."
        And A user clicks on the login button
        And A user clicks on the close button of the modal

    Scenario Outline: Validate Settings page
        Then validate that the "<Text>" is displayed

        Examples:
            | Text                 |
            | SETTINGS             |
            | PROFILE DETAILS      |
            | SAVE CHANGES         |
            | AVATAR               |
            | No Keeper Found      |
            | EDIT AVATAR          |
            | NICKNAME             |
            | LOGIN DETAILS        |
            | CHANGE PASSWORD      |
            | EMAIL ADDRESS        |
            | CUSTODIAL WALLET     |
            | CONNECT A NEW WALLET |
            | No Wallet Connected  |

    Scenario Outline: Validate Settings page anchors at the left
        Then validate that the "<Anchors>" is displayed

        Examples:
            | Anchors          |
            | PROFILE DETAILS  |
            | LOGIN DETAILS    |
            | CUSTODIAL WALLET |