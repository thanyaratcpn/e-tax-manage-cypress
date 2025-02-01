Feature: Login E-Tax manage

    Can Login - User Customer Support

    Scenario: User Customer Support can login
        # LGET0001_01_001
        When Click Profile button
        And Click Logout button

        When Login with user Role CustomerSupport User 01
        Then Show e-Tax Invoice Request List is the main page

# When Click Logout button
# Then Show Home page Login


