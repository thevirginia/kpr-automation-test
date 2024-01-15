@feature("Detail_Keepers")
Feature: Detail Keepers

    Background:
        Given A user opens DetailKeepers
        And I change the resolution to "macbook-15"

    Scenario Outline: Validate DetailKeepers page - <Text> with macbook-15
        Then validate that the "<Text>" is displayed

        Examples:
            | Text                      |
            | Keeper, welcome to Haven! |
            | YOUR DISPATCHED KEEPERS   |
            | YOUR POINTS               |
            | Keepers                   |
            | Haven                     |
            | No Keepers NFTs are found |
            | Point Generators          |
            | VIEW CITIZENSHIP          |
            | KEEPERS DISPATCHED        |
            | CITIZENSHIP SCORE         |
            | CITIZENSHIP RECORDS       |
            | Daily Earn Rate           |
            | KEEPER BONUS              |
            | CHIBI BONUS               |
            | CITIZENSHIP BONUS         |
            | TOTAL DAILY EARN RATE     |
            | Leaderboards              |
            | CITIZEN NAME              |
            | POINTS COLLECTED          |
            | Market                    |

    Scenario Outline: Validate Dropdown from Nickname with macbook-15
        When select Nickname dropdown
        Then validate that the "<Text>" is displayed

        Examples:
            | Text            |
            | CITIZEN PROFILE |
            | SETTINGS        |
            | SIGN OUT        |