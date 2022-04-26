// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!
import './js/accounts-data.js';

/****** IDENTIFIERS ******/
// Accounts
var showAccountsPageBtn = document.querySelector('#showAccountsPageBtn');
var accountsView = document.querySelector('#accountsView');
var accountsBody = document.querySelector('#accountsBody');
// Add account
var showAddAccountPageBtn = document.querySelector('#showAddAccountPageBtn');
var addAccountView = document.querySelector('#addAccountView');
// Edit account
var editAccountView = document.querySelector('#editAccountView');

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


/****** FORM IDENTIFIERS ******/
// Add account
// Edit account

/****** EDIT ACCOUNT Form ******/
var editAccountId = document.querySelector('#editAccountId');
var editAccountNameSurname = document.querySelector('#editAccountNameSurname');
var editAccountDeposit = document.querySelector('#editAccountDeposit');
var editAccountCreditCard = document.querySelector('#editAccountCreditCard');

var editAccountBtn = document.querySelector('#editAccountBtn');



// Populate account data
function createAccountsTable() {
  var text = '';

  for (var i = 0; i < accountsData.length; i++) {
    text += '<tr>';
    text += '<td>' + accountsData[i].dataId + '</td>';
    text += '<td>' + accountsData[i].dataNameSurname + '</td>';
    text += '<td>' + accountsData[i].dataDeposit + '</td>';
    text += '<td>' + accountsData[i].dataCreditCard + '</td>';
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
  showEditAccountPage();

  // Populate the form fields with a value from the array
  editAccountId.value = accountsData[accountId].dataId;
  // editAccountNameSurname.value = accountsData[dataNameSurname].accountName;
  // editDepositValue = accountsData[dataDeposit].accountDeposit;
  // editCreaditCardValue = accountsData[dataCreditCard].accountCreditCard;
}

/****** ADD ACCOUNT Form ******/
var addNewAccountBtn = document.querySelector('#addNewAccountBtn');
var accountId = document.querySelector('#accountId');
var accountName = document.querySelector('#accountName');
var accountDeposit = document.querySelector('#accountDeposit');
var accountCreditCard = document.querySelector('#accountCreditCard');

// Add new account
addNewAccountBtn.addEventListener('click', addNewAccount);
function addNewAccount() {
  var accountIdValue = accountId.value;
  var nameSurnameValue = accountName.value;
  var depositValue = accountDeposit.value;
  var creaditCardValue = accountCreditCard.value;
  // console.log(accountIdValue, nameSurnameValue, depositValue, creaditCardValue);

  var newAccount = {
    dataId: accountIdValue,
    dataNameSurname: nameSurnameValue,
    dataDeposit: depositValue,
    dataCreditCard: creaditCardValue,
  };
  //console.log(newAccount);

  accountsData.push(newAccount);
  // console.log(accountsData);

  createAccountsTable();
  showAccountsPage();
}
