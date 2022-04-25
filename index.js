// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

/****** ACCOUNTS ******/
var showAccountsBtn = document.querySelector('#showAccountsBtn');
var accountsView = document.querySelector('#accountsView');
var accountsBody = document.querySelector('#accountsBody');

/****** EDIT ACCOUNT ******/
var editAccountView = document.querySelector('#editAccountView');
var editAccountBody = document.querySelector('#editAccountBody');
var editAccountId = document.querySelector('#editAccountId');
var editAccountName = document.querySelector('#editAccountName');
var editAccountDeposit = document.querySelector('#editAccountDeposit');
var editAccountCreditCard = document.querySelector('#editAccountCreditCard');
var editAccountBtn = document.querySelector('#editAccountBtn');

// Show Accounts page
showAccountsBtn.addEventListener('click', showAccountsPage);
function showAccountsPage() {
  if (accountsView.classList.contains('d-none')) {
    accountsView.classList.remove('d-none');
    addAccountView.classList.add('d-none');
    editAccountView.classList.add('d-none');
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
    text +=
      '<td><button data-id="edit-account-' +
      i +
      '" id="edit-account-' +
      i +
      '" type="button" class="btn btn-warning edit">Edit</button></td>';
    text +=
      '<td><button id="delete-account-' +
      i +
      '" type="button" class="btn btn-danger delete">Delete</button></td>';
    text += '</tr>';
  }

  accountsBody.innerHTML = text;

  // Delete account
  var deleteBtns = document.querySelectorAll('.delete');
  for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', deleteAccount);
  }

  // Edit account
  var editBtns = document.querySelectorAll('.edit');
  for (var i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', editAccount);
  }
}
createAccountsTable();

// DELETE account
function deleteAccount() {
  var accountId = this.id;
  //console.log(accountId);

  accountsData.splice(accountId, 1); // 1 quantity of deleted items

  createAccountsTable();
}

// EDIT account
function editAccount() {
  //var accountId = this.id;
  //console.log(accountId);
  var editAccountId = this.getAttribute('data-id');
  // console.log(editAccountId);

  // Show Edit Account page
  function showEditAccountPage() {
    if (editAccountView.classList.contains('d-none')) {
      accountsView.classList.add('d-none');
      addAccountView.classList.add('d-none');
      editAccountView.classList.remove('d-none');
    }
  }
  showEditAccountPage();

  //
  editAccountId.value = accountsData[id].accountId;
  // editAccountName.value = accountsData[name].accountName;
  // editDepositValue = accountsData[deposit].accountDeposit;
  // editCreaditCardValue = accountsData[cCard].accountCreditCard;
}

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
    editAccountView.classList.add('d-none');
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
