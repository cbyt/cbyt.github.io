document.body.onload = function () {
  createNavigation();
  fillInSubs();
};

var links = [
  {
    name: 'Home',
    url: '/'
  },
  
  {
    name: 'Subscribe',
    url: 'https://www.youtube.com/channel/UCMm79jobVpVvghnA9voTtag" target="_blank'
  }
];

function createNavigation () {
  var i = 0;
  
  for (i = 0; i < links.length; i++) {
    document.getElementById('nav-bar').innerHTML += '<a href="' + links[i].url + '"><div class="w3-button w3-bar-item">' + links[i].name + '</div></a>';
  }
}

function fillInSubs () {
  var i = 0;
  var subCount = 63;
  
  for (i = 0; i < document.getElementsByClassName('sub-count').length; i++) {
    document.getElementsByClassName('sub-count')[i].innerHTML = subCount;
  }
}
