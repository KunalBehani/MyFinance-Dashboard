let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

let budgets = JSON.parse(localStorage.getItem("budgets")) || {
  monthly: 0,
  Food: 0,
  Travel: 0,
  Shopping: 0,
  Rent: 0
};

const totalIncomeText = document.getElementById("total-income");
const totalExpenseText = document.getElementById("total-expense");
const balanceText = document.getElementById("balance");

const monthlyBudgetInput = document.getElementById("monthly-budget");
const foodBudgetInput = document.getElementById("food-budget");
const travelBudgetInput = document.getElementById("travel-budget");
const shoppingBudgetInput = document.getElementById("shopping-budget");
const rentBudgetInput = document.getElementById("rent-budget");

const form = document.getElementById("transaction-form");
const list = document.getElementById("transaction-list");
const filterSelect = document.getElementById("filter-category");
const categoryTotalText = document.getElementById("category-total");

monthlyBudgetInput.value = budgets.monthly;
foodBudgetInput.value = budgets.Food;
travelBudgetInput.value = budgets.Travel;
shoppingBudgetInput.value = budgets.Shopping;
rentBudgetInput.value = budgets.Rent;

function saveData() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
  localStorage.setItem("budgets", JSON.stringify(budgets));
}

function updateSummary() {
  let income = 0;
  let expense = 0;

  transactions.forEach(t => {
    if (t.type === "Income") income += t.amount;
    else expense += t.amount;
  });

  totalIncomeText.textContent = "₹" + income;
  totalExpenseText.textContent = "₹" + expense;
  balanceText.textContent = "₹" + (income - expense);
}

function checkBudgets() {
  let spent = { Food: 0, Travel: 0, Shopping: 0, Rent: 0 };
  let totalExpense = 0;

  transactions.forEach(t => {
    if (t.type === "Expense") {
      totalExpense += t.amount;
      if (spent[t.category] !== undefined) {
        spent[t.category] += t.amount;
      }
    }
  });

  if (budgets.monthly && totalExpense > budgets.monthly) {
    alert("Monthly budget exceeded!");
  }

  Object.keys(spent).forEach(cat => {
    if (budgets[cat] && spent[cat] > budgets[cat]) {
      alert(cat + " budget exceeded!");
    }
  });
}

function renderTransactions() {
  list.innerHTML = "";
  let selected = filterSelect.value;
  let total = 0;

  transactions.forEach((t, index) => {
    if (selected !== "All" && t.category !== selected) return;

    const li = document.createElement("li");
    li.textContent = `${t.type} - ${t.category} - ₹${t.amount}`;

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => {
      transactions.splice(index, 1);
      saveData();
      renderApp();
    };

    li.appendChild(btn);
    list.appendChild(li);

    if (selected === "Salary" && t.type === "Income") total += t.amount;
    if (selected !== "Salary" && t.type === "Expense") total += t.amount;
  });

  categoryTotalText.textContent = "Total: ₹" + total;
}

function renderApp() {
  updateSummary();
  renderTransactions();
  checkBudgets();
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const type = document.getElementById("type").value;
  const amount = Number(document.getElementById("amount").value);
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;

  if (!type || !amount || !category || !date || amount <= 0) {
    alert("Please enter valid details");
    return;
  }

  transactions.push({ type, amount, category, date });
  saveData();
  renderApp();
  form.reset();
});

[
  monthlyBudgetInput,
  foodBudgetInput,
  travelBudgetInput,
  shoppingBudgetInput,
  rentBudgetInput
].forEach(input => {
  input.addEventListener("change", () => {
    budgets.monthly = Number(monthlyBudgetInput.value) || 0;
    budgets.Food = Number(foodBudgetInput.value) || 0;
    budgets.Travel = Number(travelBudgetInput.value) || 0;
    budgets.Shopping = Number(shoppingBudgetInput.value) || 0;
    budgets.Rent = Number(rentBudgetInput.value) || 0;
    saveData();
  });
});

filterSelect.addEventListener("change", renderTransactions);

renderApp();
