$(document).foundation()

var buildColorDiv = function(color) {
  return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>';
};

var addValuesToDetails = function(ev) {
  ev.preventDefault();
  var details = document.querySelector('.details');

  var firstName = this.firstName.value;
  var hairColor = this.hairColor.value;
  var age = this.age.value;
  var birthplace = this.birthplace.value;

  var colorDiv = buildColorDiv(hairColor);

  details.innerHTML +=  ' \
    <dl> \
        <dt>First Name</dt> \
        <dd>' + firstName + '</dd> \
        <dt>Hair Color</dt> \
        <dd>' + colorDiv + '</dd> \
        <dt>Age</dt> \
        <dd>' + age + '</dd> \
        <dt>Birthplace</dt> \
        <dd>' + birthplace + '</dd> \
      </dl>';
};

var myForm = document.querySelector('form');
myForm.onsubmit = addValuesToDetails;
