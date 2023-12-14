@feature("Detail_Keepers_settings")
@story("Detail_Keepers_settings")
Feature: Detail Keepers settings

    Background:
        Given A user opens Detail Keepers Settings
        And I change the resolution to "iphone-8"

    Scenario Outline: Validate DetailKeepers Settings
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

    Scenario Outline: Validate DetailKeepers Settings anchors at the left
        Then validate that the "<Anchors>" is displayed

        Examples:
            | Anchors       |
            | BIO           |
            | LOGIN DETAILS |
            | WALLET        |
            | SOCIAL        |
            | NOTIFICATIONS |