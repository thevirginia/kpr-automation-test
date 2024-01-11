import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import DetailKeepers from "../../support/page/DetailKeepers";

const ethereumAddressRegExp = /^0x[0-9a-zA-Z]+$/;

const validateText = (element, expectedText) => {
    element.first().should('be.visible').and('include.text', expectedText);
};

Then('validate that the {string} is displayed', (text) => {
    switch (text) {
        case "Keeper, welcome to Haven!":
            validateText(DetailKeepers.getKeeperWelcomeText(), 'Keeper, welcome to Haven!');
            break;
        case "YOUR DISPATCHED KEEPERS":
            validateText(DetailKeepers.getYourDispatchedText().first(), 'YOUR DISPATCHED KEEPERS');
            break;
        case "YOUR POINTS":
            validateText(DetailKeepers.getYourDispatchedText().last(), 'YOUR POINTS');
            break;
        case "GLOBAL KEEPERS DISPATCHED":
            validateText(DetailKeepers.getKeepersTitle().first(), 'GLOBAL KEEPERS DISPATCHED');
            break;
        case "2,304":
            validateText(DetailKeepers.getHavenText().first(), '2,304');
            break;
        case "GLOBAL POINTS COLLECTED":
            validateText(DetailKeepers.getKeepersTitle().last(), 'GLOBAL POINTS COLLECTED');
            break;
        case "234,509":
            validateText(DetailKeepers.getHavenText().last(), '234,509');
            break;
        case "HAVEN":
            validateText(DetailKeepers.getViewCitizenshipText(), 'HAVEN');
            break;
        case "KEEPERS DISPATCHED":
            validateText(DetailKeepers.getKeepersDispatchedText(), 'KEEPERS DISPATCHED');
            break;
        case "CITIZENSHIP SCORE":
            validateText(DetailKeepers.getCitizenshipScoreText(), 'CITIZENSHIP SCORE');
            break;
        case "CITIZENSHIP RECORDS":
            validateText(DetailKeepers.getCitizenshipRecordsText(), 'CITIZENSHIP RECORDS');
            break;
        case "Daily Earn Rate":
            validateText(DetailKeepers.getDailyEarnRateText(), 'Daily Earn Rate');
            break;
        case "KEEPER BONUS":
            validateText(DetailKeepers.getKeeperBonusText(), 'KEEPER BONUS');
            break;
        case "CHIBI BONUS":
            DetailKeepers.getChibiBonusText().eq(1).should('be.visible').and('have.text', 'CHIBI BONUS');
            break;
        case "CITIZENSHIP BONUS":
            DetailKeepers.getCitizenshipBonusText().eq(2).should('be.visible').and('have.text', 'CITIZENSHIP BONUS');
            break;
        case "TOTAL DAILY EARN RATE":
            DetailKeepers.getTotalDailyEarnRateText().should('be.visible').and('have.text', 'TOTAL DAILY EARN RATE - ');
            break;
        case "Leaderboards":
            validateText(DetailKeepers.getLeaderboardsText(), 'Leaderboards');
            break;
        case "CITIZEN NAME":
            validateText(DetailKeepers.getCitizenNameText(), 'CITIZEN NAME');
            break;
        case "POINTS COLLECTED":
            validateText(DetailKeepers.getPointsCollectedText(), 'POINTS COLLECTED');
            break;
        case "Market":
            validateText(DetailKeepers.getMarketText().last(), text);
            break;
        case "CITIZEN PROFILE":
        // case "SIGN OUT":
        //   validateText(DetailKeepers.getProfileDropdownText(), text);
        //   break;
        case "SETTINGS":
            validateText(DetailKeepers.getSettingsText(), 'SETTINGS');
            break;
        case "PROFILE DETAILS":
            validateText(DetailKeepers.getBioText().first(), 'PROFILE DETAILS');
            break;
        case "SAVE CHANGES":
            validateText(DetailKeepers.getSaveChangesText().first(), 'SAVE CHANGES');
            break;
        case "AVATAR":
            validateText(DetailKeepers.getRepresentativePFPText(), 'AVATAR');
            break;
        case "No Keeper Found":
            validateText(DetailKeepers.getKeeperNumberText(), 'No Keeper Found');
            break;
        case "REMOVE":
            validateText(DetailKeepers.getRemoveText().last(), 'REMOVE');
            break;
        case "EDIT AVATAR":
            validateText(DetailKeepers.getSaveChangesText().last(), 'EDIT AVATAR');
            break;
        case "NICKNAME":
            validateText(DetailKeepers.getNicknameText(), 'NICKNAME');
            break;
        case "LOGIN DETAILS":
            validateText(DetailKeepers.getLoginDetailsText().eq(1), 'LOGIN DETAILS');
            break;
        case "CHANGE PASSWORD":
            validateText(DetailKeepers.getEditText().first(), 'CHANGE PASSWORD');
            break;
        case "EMAIL ADDRESS":
            validateText(DetailKeepers.getEmailAddressText().eq(1), 'EMAIL ADDRESS');
            break;
        case "Password":
            validateText(DetailKeepers.getPasswordText().eq(1), 'Password');
            break;
        case "CUSTODIAL WALLET":
            validateText(DetailKeepers.getWalletsText().eq(2), 'CUSTODIAL WALLET');
            break;
        case "CONNECT A NEW WALLET":
            validateText(DetailKeepers.getConnectNewWalletText().last(), 'CONNECT A NEW WALLET');
            break;
        case "No Wallet Connected":
            validateText(DetailKeepers.getNoWalletConnectedText(), 'No Wallet Connected');
            break;
        case "SOCIAL":
            validateText(DetailKeepers.getSocialText().eq(3), 'SOCIAL');
            break;
        case "CONNECT":
            validateText(DetailKeepers.getConnectText(), 'CONNECT');
            break;
        case "GOOGLE":
            validateText(DetailKeepers.getGoogleText().eq(1), 'GOOGLE');
            break;
        case "TWITTER":
            validateText(DetailKeepers.getTwitterText().last(), 'TWITTER');
            break;
        case "NOTIFICATIONS":
            validateText(DetailKeepers.getNotificationsText().last(), 'NOTIFICATIONS');
            break;
        case "CRYPTO WALLET":
            DetailKeepers.getCryptoWalletText().first().invoke('text').then((text) => {
                expect(text).to.match(ethereumAddressRegExp);
            });
            break;
        case "BIO":
        case "LOGIN DETAILS":
        case "WALLET":
        case "SOCIAL":
        case "NOTIFICATIONS":
            validateText(DetailKeepers.getLeftAnchors(), text);
            break;
        default:
            throw new Error(`Text "${text}" not handled.`);
    }
});

When('select Nickname dropdown', () => {
    DetailKeepers.getProfileDropdown().should('be.visible').click();
});
