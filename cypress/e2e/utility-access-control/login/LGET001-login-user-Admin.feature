Feature: Login E-Tax manage

    Can Login - User Customer Support

    Scenario: User Customer Support can login
        # LGET0001_01_001
        When Click Profile button
        And Click Logout button

        When Login with user Role CustomerSupport User 01
        Then Show e-Tax Invoice Request List is the main page

        When Click Logout button
        Then Show Home page Login

    Scenario: User Finance and Account can login
        # LGET0001_01_002
        When Click Profile button
        And Click Logout button

        When Login with user Role Finance and Account User 01
        And Click Submit Login button
        Then Show e-Tax Invoice Request List is the main page
        And Show main menu based on the permissions of the user role Finance and Account

        When Click Logout button
        Then Show Home page Login


    Scenario: User IT Support can login
        # LGET0001_01_003
        When Click Profile button
        And Click Logout button

        When Login with user Role IT Support User 01
        And Click Submit Login button
        Then Show e-Tax Invoice Request List is the main page
        And Show main menu based on the permissions of the user role IT Support

        When Click Logout button
        Then Show Home page Login


    Scenario: User Admin can login
        # LGET0001_01_004
        When Click Profile button
        And Click Logout button

        When Login with user Role Admin User 01
        And Click Submit Login button
        Then Show e-Tax Invoice Request List is the main page
        And Show main menu based on the permissions of the user role Admin

        When Click Logout button
        Then Show Home page Login


