// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

var accBtn = document.querySelector('#accBtn');
var addAccBtn = document.querySelector('#addAccBtn');
var editDeleteBtn = document.querySelector('#editDeleteBtn');

var mainBody = document.querySelector('#mainBody');
var mainView = document.querySelector('#mainView');
var formView = document.querySelector('#formView');

var db = [
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

function createTable() {
  var text = '';
  for (var i = 0; i < db.length; i++) {
    text += '<tr>';
    text += '<td>' + db[i].id + '</td>';
    text += '<td>' + db[i].name + '</td>';
    text += '<td>' + db[i].deposit + '</td>';
    text += '<td>' + db[i].cCard + '</td>';
    text += '</tr>';
  }
  mainBody.innerHTML = text;
}

createTable();
