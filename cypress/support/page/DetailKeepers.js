class DetailKeepers {

    getKeeperWelcomeText() {
        return cy.get('span[class="styles_welcomeText__m+HIT"]');
    }

    getYourDispatchedText() {
        return cy.get('div[class="styles_informationQuanty__MVfZq"]');
    }
    getYourPointsText() {
        return cy.get('div[class="styles_statsContent__Gwhiz"]')
    }
    getKeepersTitle() {
        return cy.get('div[class="globals_column__pUL1B"]');
    }
    getHavenText() {
        return cy.get('span[class="styles_numberInfo__OY2N2"]')
    }
    getNoKeepersNFTsText() {
        return cy.get('div[class="styles_wrapper__PNVk5 globals_spaceBetween__ANdJo"]')
    }
    getPointGeneratorsText() {
        return cy.get('p[class="point-generators_pointGeneratorHeaderTitle__HmxCK"]');
    }

    getViewCitizenshipText() {
        return cy.get('div[class="styles_havenBanner__NeMT8"]');
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

    getSettingsText() {
        return cy.get('div[class="styles_container__Tv4JR"]');
    }

    getBioText() {
        return cy.get('p[class="styles_title__vF_9n"]');
    }

    getSaveChangesText() {
        return cy.get('button[class="styles_buttonWhite__dooHj styles_outlineWhite__9K4A9"]');
    }

    getRepresentativePFPText() {
        return cy.get('span[class="styles_text__1Qx7k"]');
    }

    getKeeperNumberText() {
        return cy.get('span[class="styles_titleKeeper__Yspb8 globals_font24__6Q0i_ globals_ptop20__fqAkT"]');
    }

    getRemoveText() {
        return cy.get('span[class="styles_text__1Qx7k"]');
    }

    getChangePFText() {
        return cy.get('button[class="styles_buttonWhite__dooHj"]');
    }

    getNicknameText() {
        return cy.get('div[class="styles_inputBox__Ksgon"]');
    }

    getLoginDetailsText() {
        return cy.get('p[class="styles_title__vF_9n"]');
    }

    getEditText() {
        return cy.get('button[class="styles_buttonDefault__usd_6"]');
    }

    getEmailAddressText() {
        return cy.get('div[class="styles_inputBox__Ksgon"]');
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

    getNoWalletConnectedText() {
        return cy.get('span[class="styles_address__HSKm7"]');
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
        return cy.get('div[style="width:100%"]>.styles_body__O8bvq> div > div  > span');
    }

    getLeftAnchors() {
        return cy.get('div[class="styles_controlledTabs__Q9zqW globals_onlyDesktop__AItTM"]')
    }
}

export default new DetailKeepers();