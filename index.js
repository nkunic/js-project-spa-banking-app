// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

/****** PAGE SELECTORS ******/
// Accounts
var showAccountsPageBtn = document.querySelector('#showAccountsPageBtn');
var accountsView = document.querySelector('#accountsView');
var accountsBody = document.querySelector('#accountsBody');
// Add account
var showAddAccountPageBtn = document.querySelector('#showAddAccountPageBtn');
var addAccountView = document.querySelector('#addAccountView');
// Edit account
var editAccountView = document.querySelector('#editAccountView');

/****** FORM SELECTORS ******/
// Add account
var addAccountForm = document.querySelector('#addAccountForm');
var accountInputId = document.querySelector('#accountInputId');
var accountInputNameSurname = document.querySelector(
  '#accountInputNameSurname'
);
var accountInputDeposit = document.querySelector('#accountInputDeposit');
var accountInputCreditCard = document.querySelector('#accountInputCreditCard');
var addNewAccountFormBtn = document.querySelector('#addNewAccountFormBtn');
// Edit account
var editAccountForm = document.querySelector('#editAccountForm');
var editAccountInputId = document.querySelector('#editAccountInputId');
var editAccountInputNameSurname = document.querySelector(
  '#editAccountInputNameSurname'
);
var editAccountInputDeposit = document.querySelector(
  '#editAccountInputDeposit'
);
var editAccountInputCreditCard = document.querySelector(
  '#editAccountInputCreditCard'
);
var editAccountFormBtn = document.querySelector('#editAccountFormBtn');
var id;

/****** SHOW PAGES ******/
// Show Accounts page
showAccountsPageBtn.addEventListener('click', showAccountsPage);
function showAccountsPage() {
  if (accountsView.classList.contains('d-none')) {
    accountsView.classList.remove('d-none');
    addAccountView.classList.add('d-none');
    editAccountView.classList.add('d-none');
  }
}
// Show Add account page
showAddAccountPageBtn.addEventListener('click', showAddAccountPage);
function showAddAccountPage() {
  if (addAccountView.classList.contains('d-none')) {
    accountsView.classList.add('d-none');
    addAccountView.classList.remove('d-none');
    editAccountView.classList.add('d-none');
  }
}
// Show Edit Account page
function showEditAccountPage() {
  if (editAccountView.classList.contains('d-none')) {
    accountsView.classList.add('d-none');
    addAccountView.classList.add('d-none');
    editAccountView.classList.remove('d-none');
  }
}

/****** ACCOUNTS DATA ******/
var accountsData = [
  {
    accountsDataId: '1',
    accountsDataNameSurname: 'Mark Otto',
    accountsDataDeposit: '12000',
    accountsDataCreditCard: 'Visa',
  },
  {
    accountsDataId: '2',
    accountsDataNameSurname: 'Jacob Thornton',
    accountsDataDeposit: '15000',
    accountsDataCreditCard: 'Mastercard',
  },
  {
    accountsDataId: '3',
    accountsDataNameSurname: 'Larry Bird',
    accountsDataDeposit: '100000',
    accountsDataCreditCard: 'American express',
  },
];

/****** ACCOUNTS TABLE ******/
// Create and populate account data table
function createAndPopulateAccountsTable() {
  // Text assign value of 0
  var text = '';

  // Define text value
  for (var i = 0; i < accountsData.length; i++) {
    text += '<tr>';
    text += '<td>' + accountsData[i].accountsDataId + '</td>';
    text += '<td>' + accountsData[i].accountsDataNameSurname + '</td>';
    text += '<td>' + accountsData[i].accountsDataDeposit + '</td>';
    text += '<td>' + accountsData[i].accountsDataCreditCard + '</td>';
    text +=
      '<td><button ' +
      'data-id="' +
      i +
      '"' +
      'type="button"' +
      'class="btn btn-warning edit">Edit</button></td>';
    text +=
      '<td><button ' +
      'id="' +
      i +
      '"' +
      'type="button"' +
      'class="btn btn-danger delete">Delete</button></td>';
    text += '</tr>';
  }

  // Inject text value it to Accounts body
  accountsBody.innerHTML = text;

  // DELETE account on click
  var deleteAccountBtns = document.querySelectorAll('.delete'); // All delete buttons
  // Add event listener on every delete accound button
  for (var i = 0; i < deleteAccountBtns.length; i++) {
    deleteAccountBtns[i].addEventListener('click', deleteAccount);
  }
  function deleteAccount() {
    // ID
    var id = this.id;
    console.log(id);
    // Delete account with this Id
    accountsData.splice(this.id, 1); // 1 quantity of deleted items
    // Create and populate account data table
    createAndPopulateAccountsTable();
  }

  // EDIT account on click
  var editAccountBtns = document.querySelectorAll('.edit'); // All edit buttons
  // Add event listener on every edit accound button
  for (var i = 0; i < editAccountBtns.length; i++) {
    editAccountBtns[i].addEventListener('click', editAccount);
  }
  function editAccount() {
    // Show Edit Account page
    showEditAccountPage();
    // ID
    // var id = this.getAttribute('data-id');
    id = this.getAttribute('data-id');
    console.log(id);
    // Populate the form fields with a value from the array
    editAccountInputId.value = accountsData[id].accountsDataId;
    editAccountInputNameSurname.value =
      accountsData[id].accountsDataNameSurname;
    editAccountInputDeposit.value = accountsData[id].accountsDataDeposit;
    editAccountInputCreditCard.value = accountsData[id].accountsDataCreditCard;
  }
}
createAndPopulateAccountsTable();

/****** FORM ******/
// Add new account
addNewAccountFormBtn.addEventListener('click', addNewAccount);
function addNewAccount() {
  var accountInputIdValue = accountInputId.value;
  var accountInputNameSurnameValue = accountInputNameSurname.value;
  var accountInputDepositValue = accountInputDeposit.value;
  var accountInputCreaditCardValue = accountInputCreditCard.value;
  // console.log(
  //   accountInputIdValue,
  //   accountInputNameSurnameValue,
  //   accountInputDepositValue,
  //   accountInputCreaditCardValue
  // );

  // New account
  var newAccount = {
    accountsDataId: accountInputIdValue,
    accountsDataNameSurname: accountInputNameSurnameValue,
    accountsDataDeposit: accountInputDepositValue,
    accountsDataCreditCard: accountInputCreaditCardValue,
  };
  //console.log(newAccount);

  // Add new account to accountsData array of objects
  accountsData.push(newAccount);
  //console.log(accountsData);

  // Create and populate account data table
  createAndPopulateAccountsTable();

  // Clear Add new account form
  addAccountForm.reset();

  // Show Accounts page
  showAccountsPage();
}

// Edit old account
editAccountFormBtn.addEventListener('click', editOldAccount);
function editOldAccount() {
  // Populate the form fields with a value from the input field
  var accountInputIdValue = editAccountInputId.value;
  var accountInputNameSurnameValue = editAccountInputNameSurname.value;
  var accountInputDepositValue = editAccountInputDeposit.value;
  var accountInputCreditCardValue = editAccountInputCreditCard.value;
  console.log(
    accountInputIdValue,
    accountInputNameSurnameValue,
    accountInputDepositValue,
    accountInputCreditCardValue
  );

  // Edited account
  var editedAccount = {
    accountsDataId: accountInputIdValue,
    accountsDataNameSurname: accountInputNameSurnameValue,
    accountsDataDeposit: accountInputDepositValue,
    accountsDataCreditCard: accountInputCreditCardValue,
  };
  console.log(editedAccount);

  // Add new account to accountsData array of objects
  accountsData.push(editedAccount);
  console.log(accountsData);

  // Create and populate account data table
  createAndPopulateAccountsTable();

  // Clear Edit old account form
  editAccountForm.reset();

  // Show Accounts page
  showAccountsPage();
}
