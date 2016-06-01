$(document).foundation();

(function() {

  var buildColorDiv = function(color) {
    return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>';
  };

  var buildList = function(listValues) {
    var dl = document.createElement('dl');
    dl.style.border = '1px solid red';
    dl.innerHTML= buildListItem('First Name', listValues.firstName) +
      buildListItem('Hair Color', listValues.hairColor) +
      buildListItem('Age', listValues.age) +
      buildListItem('Birthplace', listValues.birthplace);

    return dl;
  };

  var buildListItem = function(term, definition) {
    return '<li><dt>' + term + '</dt><dd>' + definition + '</dd></li>';
  };

  var addValuesToDetails = function(ev) {
    ev.preventDefault();
    var details = document.querySelector('.details');

    var listValues = {
      firstName: this.firstName.value,
      hairColor: buildColorDiv(this.hairColor.value),
      age: this.age.value,
      birthplace: this.birthplace.value
    };

    details.appendChild(buildList(listValues));
  };

  var myForm = document.querySelector('form');
  myForm.onsubmit = addValuesToDetails;
})();
