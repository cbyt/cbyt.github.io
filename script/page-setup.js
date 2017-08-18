document.body.onload = function () {
  createFooter();
  createNavigation();
  fillInSubs();
};

function createFooter () {
  var footerSRC = '';
  
  footerSRC = '<div class="w3-container w3-black w3-large"><div class="w3-row"><div class="w3-col m12 l6 w3-center"><p>Charles Brewer</p></div><div class="w3-col m12 l6 w3-center"><a href="https://www.youtube.com/channel/UCMm79jobVpVvghnA9voTtag" style="text-decoration: none"><span style="background-color: #cc181e; padding: 5px 5px 5px 5px; border-radius: 5px 0px 0px 5px">Subscribe</span><span class="sub-count w3-light-gray" style="padding: 5px; border-radius: 0px 5px 5px 0px">null</span><br/><br/></a></div></div></div>';
  document.getElementById('footer').innerHTML = footerSRC;
}

var videos = [
  'https://www.youtube.com/watch?v=gF90fuaX_NY'
];

var links = [
  {
    name: 'Home',
    url: '/'
  },
  
  {
    name: 'Music',
    url: '/docs/music/'
  },
  
  {
    name: 'Subscribe',
    url: 'https://www.youtube.com/channel/UCMm79jobVpVvghnA9voTtag" target="_blank'
  },
  
  {
    name: 'Random Video',
    url: String(findRandomVideo() + '" target="_blank"')
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
  var subCount = 37;
  var viewCount = 91;
  
  for (i = 0; i < document.getElementsByClassName('sub-count').length; i++) {
    document.getElementsByClassName('sub-count')[i].innerHTML = subCount;
  } for (i = 0; i < document.getElementsByClassName('view-count').length; i++) {
    document.getElementsByClassName('view-count')[i].innerHTML = viewCount;
  } for (i = 0; i < document.getElementsByClassName('upload-count').length; i++) {
    document.getElementsByClassName('upload-count')[i].innerHTML = videos.length;
  }
}

function findRandomVideo () {
  return videos[Math.floor(Math.random() * (((videos.length - 1) - 0) + 1))];
}
