
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const mainMenu = ["Home", "Dashboard", "E-Tax Request List", "Reports", "Application Management", "User Management"];

// ฟังก์ชันสำหรับการเข้าสู่ระบบ
function login(username, password) {
  cy.intercept("POST", "/?/getlogin").as("loginResponse");
  cy.get('#txtEmail').type(username);
  cy.get('#txtPassword').type(password);
  cy.get('#btnSubmitLogin').click();
  cy.wait("@loginResponse").its("response.statusCode").should("eq", 200);
  cy.wait(1000);
}

// ฟังก์ชันสำหรับดึงข้อมูลผู้ใช้งานจาก fixture
function getUserCredentials(userType, userRoleID) {
  return cy.fixture("user-info.json").then((info) => {
    let username = "";
    let password = "";

    switch (userType) {
      case "Admin":
        username = info.AdminAccount[`ada${userRoleID}`]?.username;
        password = info.AdminAccount[`ada${userRoleID}`]?.password;
        break;
      case "IT Support":
        username = info.ITSupportAccount[`its${userRoleID}`]?.username;
        password = info.ITSupportAccount[`its${userRoleID}`]?.password;
        break;
      case "Finance":
        username = info.FinanceAccount[`faa${userRoleID}`]?.username;
        password = info.FinanceAccount[`faa${userRoleID}`]?.password;
        break;
      case "CustomerSupport":
        username = info.CustomerSupportAccount[`csa${userRoleID}`]?.username;
        password = info.CustomerSupportAccount[`csa${userRoleID}`]?.password;
        break;
      default:
        throw new Error(`Invalid user type: ${userType}`);
    }

    if (!username || !password) {
      throw new Error(`User credentials not found for type: ${userType}, role ID: ${userRoleID}`);
    }

    return { username, password };
  });
}

beforeEach(function () {
  cy.fixture("user-info.json").as("userInfo");
  cy.visit("https://staging-manage-etax.centralpattana.co.th");

  // เข้าสู่ระบบด้วย AdminAccount เป็นค่าเริ่มต้น
  cy.get("@userInfo").then((userInfo) => {
    const adminAccount = userInfo.AdminAccount.ada01;
    login(adminAccount.username, adminAccount.password);
  cy.wait(1000);
  });
});

When(/^Login with user Role (CustomerSupport|IT support|Finance|Admin) User (.+)$/i, (userType, userRoleID) => {
  getUserCredentials(userType, userRoleID).then(({ username, password }) => {
    login(username, password);
  });
});

And(/^Click Submit Login button$/i, () => {
  cy.get("#btnSubmitLogin").click();
});

When(/^Click Profile button$/i, () => {
  cy.get("#btnOpenPopUpUser").click();
  
});
When(/^Click Logout button$/i, () => {
  cy.get("#btnSubmitSignOut").click();

});

