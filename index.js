// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

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

/****** FORM IDENTIFIERS ******/
// Add account
var accountInputId = document.querySelector('#accountInputId');
var accountInputNameSurname = document.querySelector('#accountInputNameSurname');
var accountInputDeposit = document.querySelector('#accountInputDeposit');
var accountInputCreditCard = document.querySelector('#accountInputCreditCard');
var addNewAccountFormBtn = document.querySelector('#addNewAccountFormBtn');
// Edit account
var editAccountInputId = document.querySelector('#editAccountInputId');
var editAccountInputNameSurname = document.querySelector('#editAccountInputNameSurname');
var editAccountInputDeposit = document.querySelector('#editAccountInputDeposit');
var editAccountInputCreditCard = document.querySelector('#editAccountInputCreditCard');
var editAccountFormBtn = document.querySelector('#editAccountFormBtn');

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
// Create and populate account data
function createAndPopulateAccountsTable() {
  var text = '';

  for (var i = 0; i < accountsData.length; i++) {
    text += '<tr>';
    text += '<td>' + accountsData[i].accountsDataId + '</td>';
    text += '<td>' + accountsData[i].accountsDataNameSurname + '</td>';
    text += '<td>' + accountsData[i].accountsDataDeposit + '</td>';
    text += '<td>' + accountsData[i].accountsDataCreditCard + '</td>';
    text +=
      '<td><button ' +
      'data-id="edit-account-' + i + '"' +
      'id="edit-account-' + i + '"' +
      'type="button"' + 
      'class="btn btn-warning edit">Edit</button></td>';
    text +=
      '<td><button ' + 
      'id="delete-account-' + i + '"' + 
      'type="button"' +
      'class="btn btn-danger delete">Delete</button></td>';
    text += '</tr>';
  }

  // Inject it to Accounts body
  accountsBody.innerHTML = text;
}
createAndPopulateAccountsTable();

// DELETE account
// function createAndPopulateAccountsTable() {
// Delete account
// var deleteBtns = document.querySelectorAll('.delete');
// for (var i = 0; i < deleteBtns.length; i++) {
//   deleteBtns[i].addEventListener('click', deleteAccount);
// }
// function deleteAccount() {
//   var accountId = this.id;
//   //console.log(accountId);

//   accountsData.splice(accountId, 1); // 1 quantity of deleted items

//   createAndPopulateAccountsTable();
// }

// EDIT account
// function createAndPopulateAccountsTable() {
// Edit account
// var editBtns = document.querySelectorAll('.edit');
// for (var i = 0; i < editBtns.length; i++) {
//   editBtns[i].addEventListener('click', editAccount);
// }
// function editAccount() {
//   //var accountId = this.id;
//   //console.log(accountId);
//   var editAccountId = this.getAttribute('data-id');
//   // console.log(editAccountId);


//   // Show Edit Account page
//   showEditAccountPage();

//   // Populate the form fields with a value from the array
//   editAccountId.value = accountsData[accountId].dataId;
//   // editAccountInputNameSurname.value = accountsData[dataNameSurname].accountName;
//   // editDepositValue = accountsData[dataDeposit].accountInputDeposit;
//   // editCreaditCardValue = accountsData[dataCreditCard].accountInputCreditCard;
// }

/****** ADD ACCOUNT Form ******/


// Add new account
addNewAccountFormBtn.addEventListener('click', addNewAccount);
function addNewAccount() {
  var accountInputIdValue = accountInputId.value;
  var nameSurnameValue = accountInputNameSurname.value;
  var depositValue = accountInputDeposit.value;
  var creaditCardValue = accountInputCreditCard.value;
  // console.log(accountInputIdValue, nameSurnameValue, depositValue, creaditCardValue);

  var newAccount = {
    dataId: accountInputIdValue,
    dataNameSurname: nameSurnameValue,
    dataDeposit: depositValue,
    dataCreditCard: creaditCardValue,
  };
  //console.log(newAccount);

  accountsData.push(newAccount);
  // console.log(accountsData);

  createAndPopulateAccountsTable();
  showAccountsPage();
}
