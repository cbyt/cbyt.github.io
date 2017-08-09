document.body.onload = function () {
  createNavigation();
};

var links = [
  {
    name: 'Home',
    url: '/'
  }
];

function createNavigation () {
  var i = 0;
  
  for (i = 0; i < links.length; i++) {
    document.getElementById('nav-bar').innerHTML += '<a href="' + links[i].url + '"><div class="w3-button w3-bar-item">' + links[i].name + '</div></a>';
  }
}
