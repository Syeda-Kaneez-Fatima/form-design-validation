# form-design-validation
Project 4 - Form Design &amp; Validation | Decode-Labs Internship

# Project 4 — Form Design & Validation

> DecodeLabs Frontend Development Internship · Batch 2026
> Optional Mastery Phase | Data Integrity & User Experience

---

## Live Demo

[👉 Click here to view the live project](https://syeda-kaneez-fatima.github.io/form-design-validation/)

---

## Project Overview

This project is part of the **DecodeLabs Industrial Training Kit** — Project 4: Form Design & Validation. The goal was to build a fully functional registration form with real-time client-side validation using **pure JavaScript** — no libraries, no frameworks.

The focus of this project is on:
- Data Integrity** — ensuring only valid data can be submitted
- User Experience** — providing immediate, clear feedback on every field
- Programmatic Architecture** — managing state and validation logic entirely through vanilla JS

---

## Project Structure

```
form-design-validation/
│
├── index.html       # Main HTML structure
├── style.css        # All styling & responsive design
├── script.js        # All validation logic in JavaScript
└── README.md        # Project documentation
```

---

## Tech Stack

- HTML5 — Semantic structure
- CSS3 — Custom properties, Flexbox, Grid, transitions
- Vanilla JavaScript — All validation logic, DOM manipulation, state management
- **Google Fonts** — Poppins typeface

> No external libraries or frameworks were used. All logic is written from scratch.

---

## Validation Logic

Each field has its own dedicated validation function in `script.js`:

| Field              | Rule |
  
| Full Name          | Minimum 3 characters required |
| Phone              | Exactly 11 digits (Pakistan format: 03XX-XXXXXXX) |
| Email              | Must match standard email format via regex |
| Field of Interest  | A dropdown option must be selected |
| Password           | Minimum 8 characters + at least 1 number |
| Confirm Password   | Must exactly match the Password field |
| Bio                | Minimum 20 characters |
| Terms & Conditions | Checkbox must be checked |

All validations run on `oninput` / `onchange` for real-time feedback, and again on submit to catch any skipped fields.

---

## How to Run Locally

No setup needed — just open in browser.

```bash
# Option 1: Just open in browser
Double-click index.html

# Option 2: Clone the repo
git clone https://github.com/Syeda-Kaneez/form-design-validation.git
cd form-design-validation
# Open index.html in any browser
```

---

## Key Concepts Demonstrated

- DOM Manipulation — dynamically adding/removing CSS classes and showing/hiding elements
- Regex — used for email and phone pattern matching
- Event Handling — `oninput`, `onchange`, `onclick` for interactive feedback
- State Management — tracking validation state per field before allowing form submission
- CSS Custom Properties — consistent theming using `:root` variables
- Responsive Layout — CSS Grid for two-column layout that collapses on mobile

---

## Author

Syeda Fatima
Frontend Development Intern @ DecodeLabs
GitHub: [@Syeda-Kaneez-Fatima](https://github.com/Syeda-Kaneez-Fatima)

---

## License

This project was built as part of an internship training program at **DecodeLabs**.
© 2026 DecodeLabs · All rights reserved.
