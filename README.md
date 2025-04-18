# ✅ Test Plan Document – Swag Labs Automation (Cypress)

**🧪 Project Title**: Swag Labs Website Automation Testing  
**📅 Date**: April 18, 2025  
**👤 Prepared By**: Sanchit Chitke

---

## 1. 🎯 Test Objectives

Automate and validate the following key functionalities on the Swag Labs website:

- User login with multiple credentials
- Product filtering by price (Low to High)
- Adding product to cart
- Completing the checkout process

---

## 2. 📌 Test Scenarios

| Scenario ID | Scenario Description                            | Expected Result                           |
|-------------|--------------------------------------------------|-------------------------------------------|
| TS01        | Login with valid and invalid users              | Valid users land on homepage; invalid see error |
| TS02        | Product sorting Low to High                     | Product prices sorted correctly           |
| TS03        | Add product to cart                             | Product is added and visible in cart      |
| TS04        | Complete checkout with valid details            | Checkout success message shown            |
| TS05        | Attempt checkout with missing information       | Error messages shown for required fields  |

---

## 3. ✅ Test Cases

### ✅ Positive Test Cases

| Test Case ID | Description                       | Input                                 | Expected Result                         |
|--------------|-----------------------------------|----------------------------------------|-----------------------------------------|
| TC01         | Login with valid credentials      | `standard_user` / `secret_sauce`       | Redirect to inventory page              |
| TC02         | Apply Low to High filter          | Sort selection = `lohi`                | Prices sorted from lowest to highest    |
| TC03         | Add first product to cart         | First product on sorted list           | Cart badge shows "1", item in cart list |
| TC04         | Complete checkout with details    | First Name, Last Name, Zip Code filled | Order success confirmation message      |

### ❌ Negative Test Cases

| Test Case ID | Description                              | Input                                       | Expected Result                             |
|--------------|------------------------------------------|---------------------------------------------|---------------------------------------------|
| TC05         | Login with invalid user credentials      | `locked_out_user`, wrong password           | Error message displayed                      |
| TC06         | Checkout with missing required fields    | Blank First Name, Last Name or Zip Code     | Error message shown for missing fields       |

---

## 4. 🧾 Test Data

### 🔐 Login Credentials (from `credentials.json` fixture)

| Username           | Password       | Expected Outcome         |
|--------------------|----------------|--------------------------|
| `standard_user`    | `secret_sauce` | ✅ Success – login works |
| `locked_out_user`  | `secret_sauce` | ❌ Error – user locked   |
| `problem_user`     | `secret_sauce` | ✅ Success – with glitches |
| `performance_glitch_user` | `secret_sauce` | ✅ Slow load expected     |

### 🛒 Checkout Fields

| Field        | Valid Input | Invalid Input |
|--------------|-------------|----------------|
| First Name   | John        | *(empty)*      |
| Last Name    | Doe         | *(empty)*      |
| Zip Code     | 12345       | abc, *(empty)* |

---

## 5. 🧰 Environment Setup Instructions (Cypress)

### 💻 System Requirements
- OS: Windows 10 / macOS / Linux
- Node.js v16+
- Browser: Chrome / Edge / Firefox

---

### ⚙️ Cypress Setup

```bash
# Step 1: Clone the project
git clone https://github.com/your-org/swag-labs-automation.git
cd swag-labs-automation

# Step 2: Install Cypress and dependencies
npm install

# Step 3: Open Cypress Test Runner
npx cypress open

# OR run tests in headless mode
npx cypress run

# To run specific spec file (e.g., login)
npx cypress run --spec "cypress/e2e/login.cy.js"
