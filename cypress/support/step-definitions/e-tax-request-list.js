import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Then(/^Show e-Tax Invoice Request List is the main page$/i, () => {
  // ตรวจสอบว่าแต่ละ User สามารถเห็นหัวข้อและตารางที่ถูกต้อง
  cy.get('.flex.w-full').should('contain.text', 'รายการคำขอ e-Tax (ใบกำกับภาษีอิเล็กทรอนิกส์)');
  cy.get('#myTable').within(() => {
    cy.contains('ชื่อ - สกุล').should('be.visible');
    cy.contains('เลขที่เอกสาร').should('be.visible');
    cy.contains('เลขประจำตัวผู้เสียภาษี').should('be.visible');
    cy.contains('เบอร์โทร').should('be.visible');
    cy.contains('สถานะ').should('be.visible');
    cy.contains('อัปเดตล่าสุด').should('be.visible');
  });

  // ตรวจสอบเมนูที่แสดงเมื่อคลิกที่ปุ่ม
  cy.get('.p-1.bg-white.text-customGoldText.rounded-md').click();

  // ตรวจสอบเมนูหลักที่ทุกบทบาทสามารถเห็นได้
  cy.get('#DBET0001').should('contain.text', 'Dashboard');
  cy.get('#RLET0001').should('contain.text', 'E-Tax Request List');
  cy.get('#RPET0001').should('contain.text', 'Reports');
  cy.get('#RPET0002').should('contain.text', 'Summary Report');

  // ตรวจสอบเมนูเพิ่มเติมสำหรับ ITSupportAccount และ AdminAccount
  if (Cypress.env('user') === 'ITSupportAccount' || Cypress.env('user') === 'AdminAccount') {
    cy.get('#AMET0001').should('contain.text', 'Application Management');
  }

  // ตรวจสอบเมนูเพิ่มเติมสำหรับ AdminAccount เท่านั้น
  if (Cypress.env('user') === 'AdminAccount') {
    cy.get('#UMET0001').should('contain.text', 'User Management');
  }

  // ตรวจสอบว่าเมนูที่ไม่ควรแสดงสำหรับบทบาทนั้น ๆ ไม่ปรากฏ
  if (Cypress.env('user') === 'CustomerSupportAccount' || Cypress.env('user') === 'FinanceAccount') {
    cy.get('#AMET0001').should('not.exist');
    cy.get('#UMET0001').should('not.exist');
  }
});