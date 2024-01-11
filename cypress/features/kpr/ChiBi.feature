@feature("Chibi-Koya_MintPage)
Feature:Chibi-Koya MintPage

    Background:
        Given A user opens a Mint Page in "staging"
        When A user enters the email "hahipoy739@wenkuu.com"
        And A user enters the password "hahipoy739.."
        And A user clicks on the login button
        And A user clicks on the close button of the modal

    Scenario: Buying Chi-Bi with Ethereum
        When user clicks one amount
        And select checkout button
        And select Ethereum option
        And select Continue option
        And select Metamask option
        And select Confirm button
        And A user enters the Cardholder name "test test"
        And A user enters the Card number "4242424242424242"
        Then I should see "Google Pay is not set up" in modal

    Scenario: Buying with credit or debit card
        When user clicks one amount
        And select checkout button
        And select Credit Card or Debit Card
        And select Continue option
        And select Metamask option
        And select Confirm button
        Then I should see "Transaction Pending..." text

    Scenario: Chibi Checkout Page
        Then I validate the currency "USD"
        And valid that the "CHI-HOUSE PRODUCTION MACHINE" text is displayed
        And valid that the "SELECT AMOUNT" text is displayed

    Scenario: ETH currency validation
        When user clicks one amount
        And select checkout button
        And select Ethereum option
        And select Continue option
        Then I validate the currency "ETH"

    Scenario: Validate "CONNECT YOUR WALLET" Section
        When user clicks one amount
        And select checkout button
        And select Ethereum option
        And select Continue option
        Then valid that the "CONNECT YOUR WALLET" text is displayed
        And valid that the "Metamask" text is displayed
        And valid that the "Coinbase Wallet" text is displayed
        And valid that the "Walletconnect" text is displayed

    Scenario: Validate "CONFIRM ORDER DETAILS" Section
        When user clicks one amount
        And select checkout button
        And select Ethereum option
        And select Continue option
        And select Metamask option
        Then valid that the "Wallet Connected" text is displayed
        And valid that the "CONNECT A DIFFERENT WALLET" text is displayed