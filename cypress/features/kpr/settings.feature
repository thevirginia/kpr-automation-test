@feature("Settings")
@story("Settings")
Feature: Settings

    Background:
        Given A user opens Settings

    Scenario Outline: Validate Settings page
        Then validate that the "<Text>" is displayed

        Examples:
            | Text               |
            | SIGN IN            |
            | BIO                |
            | SAVE CHANGES       |
            | REPRESENTATIVE PFP |
            | KEEPER #00000      |
            | REMOVE             |
            | CHANGE PFP         |
            | nickname           |
            | LOGIN DETAILS      |
            | EDIT               |
            | Email Address      |
            | Password           |
            | WALLETS            |
            | CONNECT NEW WALLET |
            | DISCONNECT         |
            | SOCIAL             |
            | CONNECT            |
            | GOOGLE             |
            | TWITTER            |
            | NOTIFICATIONS      |
            | CRYPTO WALLET      |

    Scenario Outline: Validate Settings page anchors at the left
        Then validate that the "<Anchors>" is displayed

        Examples:
            | Anchors       |
            | BIO           |
            | LOGIN DETAILS |
            | WALLET        |
            | SOCIAL        |
            | NOTIFICATIONS |