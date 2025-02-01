Feature: Filter Search

    Can filter search E-Tax request list transaction
    Scenario: Show E-Tax Request Request List Page
        # ETAXRL101_01_001
        When Click E-Tax Request List menu
        And Show E-Tax Request Request List Page

    Scenario: Validate Tax ID cannot be blank
        # ETAXRL101_01_002
        When Click E-Tax Request List menu
        And No Fill in Tax ID information
        And Click the Search button



