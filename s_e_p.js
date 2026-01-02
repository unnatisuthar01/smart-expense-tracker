let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    const name = document.getElementById("expenseName").value.trim();
    const amount = document.getElementById("expenseAmount").value.trim();
    const date = document.getElementById("expenseDate").value;

    if (!name || !amount || !date) {
        alert("Please enter name, amount and date");
        return;
    }

    expenses.push({ name, amount: Number(amount), date });
    updateUI();
    saveData();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseDate").value = "";
    localStorage.setItem("totalExpenses", totalAmount);

}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateUI();
    saveData();
}

function editExpense(index) {
    const newName = prompt("Update Expense Name:", expenses[index].name);
    const newAmount = prompt("Update Amount ₹:", expenses[index].amount);
    const newDate = prompt("Update Date:", expenses[index].date);

    if (newName && newAmount && newDate) {
        expenses[index] = { name: newName, amount: Number(newAmount), date: newDate };
        updateUI();
        saveData();
    }
}

function updateUI() {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";

    let total = 0;

    expenses.forEach((item, index) => {
        total += item.amount;
        list.innerHTML += `
            <li>
                <div>
                    <strong>${item.name}</strong> – ₹${item.amount} <br>
                    <small>${item.date}</small>
                </div>
                <div>
                    <button class="btn edit-btn" onclick="editExpense(${index})">Edit</button>
                    <button class="btn delete-btn" onclick="deleteExpense(${index})">Delete</button>
                </div>
            </li>
        `;
    });

    document.getElementById("totalAmount").innerText = "₹" + total;
}

function saveData() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

updateUI();

const homeBtn = document.getElementById("home-btn");
const expenseBox = document.querySelector(".container");

homeBtn.addEventListener("click", () => {
  expenseBox.classList.remove("animate");
  void expenseBox.offsetWidth; // restart trick
  expenseBox.classList.add("animate");
});

/* ======== SHOW EXPENSE LIST IN ANALYTICS ======== */
function showExpenseList(){
  let listContainer = document.getElementById("expenseAnalyticsList");
  listContainer.innerHTML = "";

  if(expenses.length === 0){
    listContainer.innerHTML = "<p style='text-align:center;margin-top:10px;'>✨ No expenses added yet!</p>";
    return;
  }

  expenses.forEach((e,index)=>{
    listContainer.innerHTML += `
      <div class="expense-item">
        <span>🛍️ ${e.name} — ₹${e.amount} <br> <small>📅 ${e.date}</small></span>
        <div class="expense-actions">
            <button class="edit-btn" onclick="editExpense(${index})">✏️ Edit</button>
            <button class="delete-btn" onclick="deleteExpense(${index})">🗑️ Delete</button>
        </div>
      </div>
    `;
  });
}

function editExpense(i){
  let newName = prompt("Update Name:", expenses[i].name);
  let newAmount = prompt("Update Amount:", expenses[i].amount);

  if(newName && newAmount){
    expenses[i].name = newName;
    expenses[i].amount = newAmount;
    localStorage.setItem("expenses", JSON.stringify(expenses));
    location.reload();
  }
}

function deleteExpense(i){
  if(confirm("Delete this expense?")){
    expenses.splice(i,1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    location.reload();
  }
}

/* call on load */
showExpenseList();
