@feature("Chibi-Koya_MintPage")
Feature:Chibi-Koya MintPage

    Background:
        Given A user opens MintPage
        And I change the resolution to "macbook-15"

   Scenario: Validation of Chi-Bi purchase with the Ethereum currency with macbook-15
        When user clicks one amount
        And select checkout button
        And select Ethereum option
        And select Continue option
        And select Metamask option
        And select Confirm button
        Then I should see "Transaction Pending..." text

    Scenario: Buying Chi-Bi with credit or debit card with macbook-15
        When user clicks one amount
        And select checkout button
        And select Credit Card or Debit Card
        And select Continue option
        And select Metamask option
        And select Confirm button
        Then I should see "Transaction Pending..." text

    Scenario: Checkout page display validation in Chi-Bi with macbook-15
        Then I validate the currency "USD"
        And valid that the "CHI-HOUSE PRODUCTION MACHINE" text is displayed
        And valid that the "SELECT AMOUNT" text is displayed

    Scenario: ETH currency option validation with macbook-15 
        When user clicks one amount
        And select checkout button
        And select Ethereum option
        And select Continue option
        Then I validate the currency "ETH"

    Scenario: Validate "CONNECT YOUR WALLET" Section with macbook-15
        When user clicks one amount
        And select checkout button
        And select Ethereum option
        And select Continue option
        Then valid that the "CONNECT YOUR WALLET" text is displayed
        And valid that the "Metamask" text is displayed
        And valid that the "Coinbase Wallet" text is displayed
        And valid that the "Walletconnect" text is displayed

    Scenario: Validate "CONFIRM ORDER DETAILS" Section with macbook-15
        When user clicks one amount
        And select checkout button
        And select Ethereum option
        And select Continue option
        And select Metamask option
        Then valid that the "Wallet Connected" text is displayed
        And valid that the "CONNECT A DIFFERENT WALLET" text is displayed