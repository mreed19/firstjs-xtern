$(document).foundation();

var app = {

  init: function() {
    var myForm = document.querySelector('form');
    myForm.onsubmit = this.addValuesToDetails;
  },

  buildColorDiv: function(color) {
    return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>';
  },

  buildList: function(listValues) {
    var dl = document.createElement('dl');
    dl.style.border = '1px solid red';
    dl.innerHTML= this.buildListItem('First Name', listValues.firstName) +
      this.buildListItem('Hair Color', listValues.hairColor) +
      this.buildListItem('Age', listValues.age) +
      this.buildListItem('Birthplace', listValues.birthplace);

    return dl;
  },

  buildListItem: function(term, definition) {
    return '<li><dt>' + term + '</dt><dd>' + definition + '</dd></li>';
  },

  addValuesToDetails: function(ev) {
    ev.preventDefault();
    var details = document.querySelector('.details');

    var listValues = {
      firstName: this.firstName.value,
      hairColor: app.buildColorDiv(this.hairColor.value),
      age: this.age.value,
      birthplace: this.birthplace.value
    };

    details.appendChild(app.buildList(listValues));
  }
};

app.init();
