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
            validateText(DetailKeepers.getYourDispatchedText(), 'YOUR DISPATCHED KEEPERS');
            break;
        case "YOUR POINTS":
            validateText(DetailKeepers.getYourPointsText(), 'YOUR POINTS');
            break;
        case "Keepers":
            validateText(DetailKeepers.getKeepersTitle(), 'Keepers');
            break;
        case "Haven":
            validateText(DetailKeepers.getHavenText(), 'Haven');
            break;
        case "No Keepers NFTs are found":
            validateText(DetailKeepers.getNoKeepersNFTsText(), 'No Keepers NFTs are found');
            break;
        case "Point Generators":
            validateText(DetailKeepers.getPointGeneratorsText(), 'Point Generators');
            break;
        case "VIEW CITIZENSHIP":
            validateText(DetailKeepers.getViewCitizenshipText(), 'VIEW CITIZENSHIP');
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
        case "SETTINGS":
        case "SIGN OUT":
            validateText(DetailKeepers.getProfileDropdownText(), text);
            break;
        case "SIGN IN":
            validateText(DetailKeepers.getSignInText(), 'SIGN IN');
            break;
        case "BIO":
            validateText(DetailKeepers.getBioText().first(), 'BIO');
            break;
        case "SAVE CHANGES":
            validateText(DetailKeepers.getSaveChangesText(), 'SAVE CHANGES');
            break;
        case "REPRESENTATIVE PFP":
            validateText(DetailKeepers.getRepresentativePFPText(), 'REPRESENTATIVE PFP');
            break;
        case "KEEPER #00000":
            validateText(DetailKeepers.getKeeperNumberText(), 'KEEPER #00000');
            break;
        case "REMOVE":
            validateText(DetailKeepers.getRemoveText().last(), 'REMOVE');
            break;
        case "CHANGE PFP":
            validateText(DetailKeepers.getChangePFText(), 'CHANGE PFP');
            break;
        case "nickname":
            validateText(DetailKeepers.getNicknameText(), 'nickname');
            break;
        case "LOGIN DETAILS":
            validateText(DetailKeepers.getLoginDetailsText().eq(1), 'LOGIN DETAILS');
            break;
        case "EDIT":
            validateText(DetailKeepers.getEditText(), 'EDIT');
            break;
        case "Email Address":
            validateText(DetailKeepers.getEmailAddressText().eq(1), 'Email Address');
            break;
        case "Password":
            validateText(DetailKeepers.getPasswordText().eq(1), 'Password');
            break;
        case "WALLETS":
            validateText(DetailKeepers.getWalletsText().eq(2), 'WALLETS');
            break;
        case "CONNECT NEW WALLET":
            validateText(DetailKeepers.getConnectNewWalletText().last(), 'CONNECT NEW WALLET');
            break;
        case "DISCONNECT":
            validateText(DetailKeepers.getDisconnectText(), 'DISCONNECT');
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
            DetailKeepers.getCryptoWalletText().eq(2).invoke('text').then((text) => {
                expect(text).to.match(/^0x[0-9a-fA-F]+$/);
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
