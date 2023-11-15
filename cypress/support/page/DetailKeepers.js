class DetailKeepers {

    getKeeperWelcomeText() {
        return cy.get('span[class="styles_welcomeText__VZNfu"]');
    }

    getYourDispatchedText() {
        return cy.get('div[class="styles_statsContent__Gwhiz"]');
    }
    getYourPointsText() {
        return cy.get('div[class="styles_statsContent__Gwhiz"]')
    }
    getKeepersTitle() {
        return cy.get('h2[class="styles_title__mh8GS"]');
    }
    getHavenText() {
        return cy.get('div[class="styles_header__crUfW"]')
    }
    getNoKeepersNFTsText() {
        return cy.get('div[class="styles_wrapper__PNVk5 globals_spaceBetween__ANdJo"]')
    }
    getPointGeneratorsText() {
        return cy.get('p[class="point-generators_pointGeneratorHeaderTitle__HmxCK"]');
    }

    getViewCitizenshipText() {
        return cy.get('div[class="point-generators_pointGeneratorHeader__ZD6oh"]');
    }

    getKeepersDispatchedText() {
        return cy.get('div[class="point-generators_pointGeneretorInfoContainer__ufelU"]');
    }

    getCitizenshipScoreText() {
        return cy.get('div[class="point-generators_pointGeneretorInfoContainer__ufelU"]');
    }

    getCitizenshipRecordsText() {
        return cy.get('div[class="point-generators_pointGeneretorInfoContainer__ufelU"]');
    }

    getDailyEarnRateText() {
        return cy.get('span[class="styles_title__qn70d"]');
    }

    getKeeperBonusText() {
        return cy.get('div[class="globals_centerAlign__cVjD1"]');
    }

    getChibiBonusText() {
        return cy.get('div[class="globals_centerAlign__cVjD1"]');
    }

    getCitizenshipBonusText() {
        return cy.get('div[class="globals_centerAlign__cVjD1"]');
    }

    getTotalDailyEarnRateText() {
        return cy.get('div[class="globals_row__2oLR7 globals_spaceBetween__ANdJo styles_total__3w0p4"]');
    }

    getLeaderboardsText() {
        return cy.get('div[class="globals_row__2oLR7 globals_spaceBetween__ANdJo globals_pr16__gvDCL styles_market__oJJeo"]');
    }

    getCitizenNameText() {
        return cy.get('div[class="styles_row__mP_Od globals_spaceBetween__ANdJo styles_headerTable__fMU1o globals_gap20__Bfrla"]');
    }

    getPointsCollectedText() {
        return cy.get('div[class="styles_row__mP_Od globals_spaceBetween__ANdJo styles_headerTable__fMU1o globals_gap20__Bfrla"]');
    }

    getMarketText() {
        return cy.get('div[class="globals_row__2oLR7 globals_spaceBetween__ANdJo globals_pr16__gvDCL styles_market__oJJeo"]');
    }

    getProfileDropdownText() {
        return cy.get('div[class="styles_openModalUser__9zClD"]');
    }

    getProfileDropdown() {
        return cy.get('div[class="styles_userMenu__xU7BY undefined"]')
    }

    getSignInText() {
        return cy.get('div[class="styles_signMenu__9qKKL"]');
    }

    getBioText() {
        return cy.get('p[class="styles_title__vF_9n"]');
    }

    getSaveChangesText() {
        return cy.get('button[class="styles_buttonGray__LYojV undefined "]');
    }

    getRepresentativePFPText() {
        return cy.get('span[class="styles_text__1Qx7k"]');
    }

    getKeeperNumberText() {
        return cy.get('span[class="styles_text__1Qx7k globals_font24__6Q0i_ globals_ptop20__fqAkT"]');
    }

    getRemoveText() {
        return cy.get('span[class="styles_text__1Qx7k"]');
    }

    getChangePFText() {
        return cy.get('button[class="styles_buttonWhite__dooHj"]');
    }

    getNicknameText() {
        return cy.get('label[class="input_inputSubTopText__012s_"]');
    }

    getLoginDetailsText() {
        return cy.get('p[class="styles_title__vF_9n"]');
    }

    getEditText() {
        return cy.get('button[class="styles_buttonDefault__usd_6"]');
    }

    getEmailAddressText() {
        return cy.get('div[class="styles_body__O8bvq"]');
    }

    getPasswordText() {
        return cy.get('div[class="styles_body__O8bvq"]');
    }

    getWalletsText() {
        return cy.get('p[class="styles_title__vF_9n"]');
    }

    getConnectNewWalletText() {
        return cy.get('button[class="styles_buttonDefault__usd_6"]');
    }

    getDisconnectText() {
        return cy.get('span[class="styles_disconnect__2Y_Y5"]');
    }

    getSocialText() {
        return cy.get('p[class="styles_title__vF_9n"]');
    }

    getConnectText() {
        return cy.get('span[class="styles_disconnect__2Y_Y5"]');
    }

    getGoogleText() {
        return cy.get('span[class="styles_address__HSKm7"]');
    }

    getTwitterText() {
        return cy.get('span[class="styles_address__HSKm7"]');
    }

    getNotificationsText() {
        return cy.get('p[class="styles_title__vF_9n"]');
    }
    getCryptoWalletText() {
        return cy.get('div[class="styles_body__O8bvq"]');
    }

    getLeftAnchors() {
        return cy.get('div[class="styles_controlledTabs__Q9zqW globals_onlyDesktop__AItTM"]')
    }
}

module.exports = new DetailKeepers();