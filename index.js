// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

// Accounts
var showAccountsBtn = document.querySelector('#showAccountsBtn');
var accountsView = document.querySelector('#accountsView');
var accountsBody = document.querySelector('#accountsBody');
showAccountsBtn.addEventListener('click', showAccountsPage);
function showAccountsPage() {
  if (accountsView.classList.contains('d-none')) {
    accountsView.classList.remove('d-none');
    addAccountView.classList.add('d-none');
    editDeleteAccountView.classList.add('d-none');
  }
}
var accountsData = [
  {
    id: '1',
    name: 'Mark Otto',
    deposit: '12000',
    cCard: 'Visa',
  },
  {
    id: '2',
    name: 'Jacob Thornton',
    deposit: '15000',
    cCard: 'Mastercard',
  },
  {
    id: '3',
    name: 'Larry Bird',
    deposit: '100000',
    cCard: 'American express',
  },
];
function createAccountsTable() {
  var text = '';
  for (var i = 0; i < accountsData.length; i++) {
    text += '<tr>';
    text += '<td>' + accountsData[i].id + '</td>';
    text += '<td>' + accountsData[i].name + '</td>';
    text += '<td>' + accountsData[i].deposit + '</td>';
    text += '<td>' + accountsData[i].cCard + '</td>';
    text += '</tr>';
  }
  accountsBody.innerHTML = text;
}
createAccountsTable();

// Add Accounts
var showAddAccountBtn = document.querySelector('#showAddAccountBtn');
var addAccountView = document.querySelector('#addAccountView');
showAddAccountBtn.addEventListener('click', showAddAccountPage);
function showAddAccountPage() {
  if (addAccountView.classList.contains('d-none')) {
    accountsView.classList.add('d-none');
    addAccountView.classList.remove('d-none');
    editDeleteAccountView.classList.add('d-none');
  }
}

// Edit / Delete Accounts
var showEditDeleteBtn = document.querySelector('#showEditDeleteBtn');
var editDeleteAccountView = document.querySelector('#editDeleteAccountView');
showEditDeleteBtn.addEventListener('click', showEditDeleteAccountPage);
function showEditDeleteAccountPage() {
  if (addAccountView.classList.contains('d-none')) {
    accountsView.classList.add('d-none');
    addAccountView.classList.add('d-none');
    editDeleteAccountView.classList.remove('d-none');
  }
}
