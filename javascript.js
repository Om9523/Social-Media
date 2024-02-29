document.addEventListener('DOMContentLoaded', loadExpenses);

function addExpense() {
    const expenseInput = document.getElementById('expense');
    const amountInput = document.getElementById('amount');

    const expense = expenseInput.value.trim();
    const amount = amountInput.value.trim();

    if (expense === '' || amount === '') {
        alert('Please enter both expense and amount.');
        return;
    }

    const expenseItem = { expense, amount };
    appendExpense(expenseItem);
    saveExpense(expenseItem);

    // Clear input fields
    expenseInput.value = '';
    amountInput.value = '';
}

function appendExpense(expenseItem) {
    const expenseList = document.getElementById('expenseList');
    const li = document.createElement('li');
    li.innerHTML = `<span><span class="c1">${expenseItem.expense}:</span><span class="c2"> $${expenseItem.amount}</span></span>
                    <button onclick="editExpense(this)">Edit</button>
                    <button onclick="deleteExpense(this)">Delete</button>`;
    expenseList.appendChild(li);
}

function editExpense(button) {
    const li = button.parentNode;
    const span = li.querySelector('span');
    const expense = prompt('Edit expense:', span.textContent.split(':')[0]);
    const amount = prompt('Edit amount:', span.textContent.split(':')[1].slice(1));

    if (expense !== null && amount !== null) {
        span.textContent = `${expense}: $${amount}`;
        updateLocalStorage();
    }
}

function deleteExpense(button) {
    const li = button.parentNode;
    li.remove();
    updateLocalStorage();
}

function saveExpense(expenseItem) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expenseItem);
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function loadExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.forEach(appendExpense);
}

function updateLocalStorage() {
    const expenseNodes = document.querySelectorAll('#expenseList li span');
    const expenses = Array.from(expenseNodes).map(node => {
        const [expense, amount] = node.textContent.split(': $;');
        return { expense, amount };
    });
    localStorage.setItem('expenses', JSON.stringify(expenses));
}