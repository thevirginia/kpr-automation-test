Feature: Detail Keepers

    Background:
        Given A user opens DetailKeepers


    Scenario Outline: Validate DetailKeepers page - <Text>
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


    Scenario Outline: Validate Dropdown from Nickname
        When select Nickname dropdown
        Then validate that the "<Text>" is displayed

        Examples:
            | Text            |
            | CITIZEN PROFILE |
            | SETTINGS        |
            | SIGN OUT        |
