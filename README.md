# 📊 MyFinance Dashboard

**MyFinance Dashboard** is a web-based personal finance management application that helps users **plan budgets, track income and expenses, and analyze spending patterns**.  
The project is built using **HTML, external CSS, and Vanilla JavaScript**, following proper separation of structure, style, and logic.

---

## 🚀 Features

### ✅ Income & Expense Tracking
- Add income transactions (e.g., Salary)
- Add expense transactions (Food, Travel, Shopping, Rent, etc.)
- Automatically calculates:
  - Total Income  
  - Total Expense  
  - Remaining Balance  

### ✅ Budget Planning & Control
- Set a **monthly budget**
- Set **category-wise budgets**:
  - Food
  - Travel
  - Shopping
  - Rent
- Alerts the user when:
  - Monthly budget is exceeded
  - Any category budget is exceeded

### ✅ Expense & Income Analysis
- Filter transactions by category (including Salary)
- View category-wise totals dynamically
- Delete individual transactions

### ✅ Data Persistence
- Uses **LocalStorage**
- All data remains saved even after page refresh

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure and layout  
- **CSS3 (External stylesheet, Flexbox & Grid)** – Styling and responsive design  
- **Vanilla JavaScript (ES6+)** – Application logic and DOM manipulation  
- **Browser APIs** – LocalStorage for persistent data  

🚫 No frameworks  
🚫 No libraries (React, jQuery, etc.)  
🚫 No backend services  

---

## ⚙️ How It Works (High-Level)

1. User sets monthly and category budgets  
2. User adds income or expense transactions  
3. JavaScript:
   - Stores data in arrays and objects
   - Saves data to LocalStorage
   - Dynamically updates the DOM  
4. Application recalculates totals and checks budgets  
5. Alerts are shown if spending exceeds limits  

---

## 🎯 Learning Outcomes

This project demonstrates understanding of:

- Separation of concerns (HTML, CSS, JavaScript)
- DOM manipulation (creating, updating, and removing elements)
- Event handling (form submission, clicks, change events)
- Application state management using JavaScript
- Client-side data persistence with LocalStorage
- Responsive UI design using external CSS

---

## 📌 Use Cases

- Personal expense tracking
- Budget planning for students
- Learning project for Web Development fundamentals
- Demonstration of Vanilla JavaScript skills

---

## 🧪 How to Run the Project

1. Download or clone the project  
2. Open `index.html` in any modern web browser  
3. Ensure `style.css` and `script.js` are in the same directory  
4. Start adding budgets and transactions  

No additional setup required.

---

## 📖 Future Enhancements (Optional)

- Graphical charts for income vs expense
- Monthly reports
- Export data to CSV
- Dark mode toggle

---

## 👨‍💻 Author

**Project Name:** MyFinance Dashboard  
**Developed by:** Kunal Behani  
**Institution:** Scaler School of Technology  
**Course:** Web Development II  

---

## 🏁 Conclusion

**MyFinance Dashboard** is a clean and structured personal finance management system that emphasizes proper separation of concerns, real-world usability, and strong Vanilla JavaScript fundamentals without relying on external frameworks.
