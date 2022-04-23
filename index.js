// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

/****** ACCOUNTS ******/
var showAccountsBtn = document.querySelector('#showAccountsBtn');
var accountsView = document.querySelector('#accountsView');
var accountsBody = document.querySelector('#accountsBody');

// Show Accounts page
showAccountsBtn.addEventListener('click', showAccountsPage);
function showAccountsPage() {
  if (accountsView.classList.contains('d-none')) {
    accountsView.classList.remove('d-none');
    addAccountView.classList.add('d-none');
    editDeleteAccountView.classList.add('d-none');
  }
}

// Accounts data
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

// Populate account data
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

/****** ADD ACCOUNT ******/
var showAddAccountBtn = document.querySelector('#showAddAccountBtn');
var addAccountView = document.querySelector('#addAccountView');
var addNewAccountBtn = document.querySelector('#addNewAccountBtn');
var accountId = document.querySelector('#accountId');
var accountName = document.querySelector('#accountName');
var accountDeposit = document.querySelector('#accountDeposit');
var accountCreditCard = document.querySelector('#accountCreditCard');

// Show Add account page
showAddAccountBtn.addEventListener('click', showAddAccountPage);
function showAddAccountPage() {
  if (addAccountView.classList.contains('d-none')) {
    accountsView.classList.add('d-none');
    addAccountView.classList.remove('d-none');
    editDeleteAccountView.classList.add('d-none');
  }
}

// Add new account
addNewAccountBtn.addEventListener('click', addNewAccount);
function addNewAccount() {
  var accountIdValue = accountId.value;
  var nameValue = accountName.value;
  var depositValue = accountDeposit.value;
  var creaditCardValue = accountCreditCard.value;
  // console.log(accountIdValue, nameValue, depositValue, creaditCardValue);

  var newAccount = {
    id: accountIdValue,
    name: nameValue,
    deposit: depositValue,
    cCard: creaditCardValue,
  };
  //console.log(newAccount);

  accountsData.push(newAccount);
  // console.log(accountsData);

  createAccountsTable();
  showAccountsPage();
}

/****** EDIT / DELETE ACCOUNT ******/
var showEditDeleteBtn = document.querySelector('#showEditDeleteBtn');
var editDeleteAccountView = document.querySelector('#editDeleteAccountView');
var editDeleteAccountBody = document.querySelector('#editDeleteAccountBody');

// Show Edit/Delete accounts page
showEditDeleteBtn.addEventListener('click', showEditDeleteAccountPage);
function showEditDeleteAccountPage() {
  if (editDeleteAccountView.classList.contains('d-none')) {
    accountsView.classList.add('d-none');
    addAccountView.classList.add('d-none');
    editDeleteAccountView.classList.remove('d-none');
  }
}
