@feature("Detail_Keepers")
@story("Detail_Keepers")
Feature: Detail Keepers

    Background:
        Given A user opens DetailKeepers
        And I change the resolution to "iphone-8"
        And A user enters the Sign In button
        When A user enters the email "hahipoy739@wenkuu.com"
        And A user enters the password "hahipoy739.."
        And A user clicks on the login button
        And A user clicks on the close button of the modal


    Scenario Outline: Validate DetailKeepers page - <Text>
        Then validate that the "<Text>" is displayed

        Examples:
            | Text                      |
            | HAVEN                     |
            | Keeper, welcome to Haven! |
            | YOUR DISPATCHED KEEPERS   |
            | YOUR POINTS               |
            | GLOBAL KEEPERS DISPATCHED |
            | 2,304                     |
            | GLOBAL POINTS COLLECTED   |
            | 234,509                   |


    Scenario Outline: Validate Dropdown from Nickname
        When select Nickname dropdown
        Then validate that the "<Text>" is displayed

        Examples:
            | Text            |
            | CITIZEN PROFILE |
            | SIGN OUT        |

