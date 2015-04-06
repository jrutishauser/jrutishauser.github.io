angular.module("jrutishausergithubio").run(["$templateCache", function($templateCache) {$templateCache.put("app/about/about.html","<section class=\"about\"><section class=\"bodycontent\"><section class=\"aboutimages\"><img src=\"/assets/images/meandaverie.jpg\" alt=\"Averie and me\"> <img src=\"/assets/images/allyandme.jpg\" alt=\"My wife and I\"> <img src=\"/assets/images/snook.jpg\" alt=\"snook in FL\"></section><section class=\"aboutwords\"><h3>ABOUT ME</h3><p>I’m Jonathan Rutishauser. As you can see, I have a pretty long name, which has given me a lot of nicknames in my lifetime- Rutis, JRu, Jon… Most people will tell you I have a lot of hobbies and I tend to dive head first into those hobbies, from brewing beer to whitewater kayaking to computer programming. Over the past decade, programming has always piqued my interest and until recently, remained just another hobby. I spend my free time with my wife, Ally, and our goofy 6-year-old daughter, Averie. After spending the last 8 years in sales and sales management, I decided it was time for a major career change. I signed up for The Iron Yard’s Front End Engineering Program and haven’t looked back since.</p><h3>Why Me?</h3><p>So why do you need me? I love to tinker with just about anything and I’ve found that programming is a true passion for me. Creating awesome projects with the skills I’ve learned through Front End Engineering is exactly what I’m good at. I am genuinely excited to learn new ways to create with JavaScript and learn about all of its many frameworks. Ever since starting with Angular.js, I have been hooked. I am also skilled with HTML, CSS, jQuery and Sass and if I need a new tool to accomplish a goal, I set out on a mission to find it.</p></section></section><div class=\"bot\"></div></section>");
$templateCache.put("app/blog/blog.html","<section class=\"blog\"><h3>blog</h3></section>");
$templateCache.put("app/main/main.html","<div class=\"container\"><section class=\"social\"><ul><li><a href=\"https://github.com/jrutishauser\" alt=\"github\" target=\"_blank\"><i class=\"fa fa-github-square fa-2x\"></i></a></li><li><a href=\"https://twitter.com/jonrutis\" alt=\"twitter\" target=\"_blank\"><i class=\"fa fa-twitter-square fa-2x\"></i></a></li><li><a href=\"https://www.linkedin.com/in/jonathanrutishauser\" alt=\"linked in\" target=\"_blank\"><i class=\"fa fa-linkedin-square fa-2x\"></i></a></li><li><a href=\"http://codepen.io/jrutishauser/\" alt=\"codepen\" target=\"_blank\"><i class=\"fa fa-codepen fa-2x\"></i></a></li><li><a href=\"/resume.html\" alt=\"resume\" target=\"_blank\"><i class=\"fa fa-file-text-o fa-2x\"></i></a></li></ul></section><header><div class=\"first\"><h1>Hello. My name is Jon Rutishauser</h1></div><div class=\"second\"><div class=\"insecond\"><p>AND I</p><p>DREAM</p></div><div class=\"insecondtoo\"><p>about building the internet.</p></div></div><div class=\"third\"><p>I live in sunny Orlando, Florida.</p></div><div class=\"fourth\"><p>Click below to learn more about me.</p></div></header><nav><ul><li><a ui-sref=\"home.about\">ABOUT</a></li><li><a ui-sref=\"home.work\">WORK</a></li><li><a ui-sref=\"home.blog\">BLOG</a></li></ul></nav></div><div ui-view=\"\"></div><div class=\"footer\"><section class=\"divider\"><span>^</span> <span>^</span> <span>^</span></section><img src=\"/assets/images/myface.jpg\" alt=\"me\"><p>Thanks for spending some time on my site. Feel free to click the icons above and below to view my github, twitter, linkedin or codepen accounts. You can also view my <a href=\"/resume.html\" target=\"_blank\">resume</a>. I can be reached directly at 407.802.0860 or <a href=\"mailto:jrutishauser@gmail.com\">jrutishauser@gmail.com</a></p><section class=\"social\"><ul><li><a href=\"https://github.com/jrutishauser\" target=\"_blank\"><i class=\"fa fa-github-square fa-2x\"></i></a></li><li><a href=\"https://twitter.com/jonrutis\" target=\"_blank\"><i class=\"fa fa-twitter-square fa-2x\"></i></a></li><li><a href=\"https://www.linkedin.com/in/jonathanrutishauser\" target=\"_blank\"><i class=\"fa fa-linkedin-square fa-2x\"></i></a></li><li><a href=\"http://codepen.io/jrutishauser/\" target=\"_blank\"><i class=\"fa fa-codepen fa-2x\"></i></a></li><li><a href=\"/resume.html\" target=\"_blank\"><i class=\"fa fa-file-text-o fa-2x\"></i></a></li></ul></section></div>");
$templateCache.put("app/work/work.html","<section class=\"work\"><h3>Here are a few things I have built.</h3><section class=\"workitem\"><section class=\"workimg\"><img src=\"/assets/images/iphonehaus.png\" alt=\"iphone w/ hausbrewer\"></section><section class=\"workdesc\"><img src=\"/assets/images/hblogo.png\" alt=\"hausbrewer logo\"><h3>hausbrewer</h3><p>Hausbrewer is a mobile-first streamlined, easy-to-use guide and record keeping application for those new to brewing their own beer. With step-by-step instructions, recipe storage, and fermentation tracking, it’s never been simpler to start your own brew. This project is live at <a href=\"http://hausbrewer.com\" target=\"blank\">hauserbrewer.com</a></p><h4>Tech stack Used</h4><ul class=\"icons\"><li><img src=\"/assets/images/angular.png\" alt=\"angular\"></li><li><img src=\"/assets/images/firebase.png\" alt=\"firebase\"></li><li><img src=\"/assets/images/node-sass.png\" alt=\"sass\"></li><li><img src=\"/assets/images/gulp.png\" alt=\"gulp\"></li><li><img src=\"/assets/images/yeoman.png\" alt=\"yeoman\"></li><li><img src=\"/assets/images/bower.png\" alt=\"bower\"></li></ul><h4>Quick Facts</h4><ul class=\"facts\"><li>Mobile first design using Angular.js.</li><li>Cloud storage with a Firebase backend.</li><li>Project scaffolded with Yeoman generator.</li><li>Tasking and automation by gulp.js.</li><li>Bower package manager used.</li><li>Sass, to give my CSS super powers.</li><li>This project is open source and available on <a href=\"https://github.com/jrutishauser/hausbrewer\">github</a></li><li>Features continuously added.</li></ul></section></section><section class=\"workitem\"><section class=\"workimg\"><img src=\"/assets/images/susanna-bot.png\" alt=\"susannabot\"></section><section class=\"workdesc\"><h3>SusannaBot</h3><p>SusannaBot is a google chrome extension of the campus director at the Orlando Iron Yard. This was a team project built in a couple days several weeks into the program. Press the advice button and a random piece of advice is sent from an API. Press cuddle huddle and answer a random question that is then posted to our class slack. View code <a href=\"https://github.com/jrutishauser/TIY-Mashup\" target=\"blank\">here on github</a></p><h4>Tech stack Used</h4><ul class=\"icons\"><li><img src=\"/assets/images/chrome.png\" alt=\"chrome ext\"></li><li><img src=\"/assets/images/html5.png\" alt=\"html5\"></li><li><img src=\"/assets/images/css3.svg\" alt=\"css3\"></li><li><img src=\"/assets/images/jquery-icon.png\" alt=\"jQuery\"></li></ul><h4>Quick Facts</h4><ul class=\"facts\"><li>Had to divide work with my partner.</li><li>Made API calls using jQuery.</li><li>Learned about chrome extensions.</li><li>Learned a lot about Git/Github and work division.</li></ul></section></section></section>");
$templateCache.put("components/navbar/navbar.html","<nav class=\"navbar\" ng-controller=\"NavbarCtrl\"><a href=\"https://github.com/Swiip/generator-gulp-angular\">Gulp Angular</a><ul><li class=\"active\"><a ng-href=\"#\">Home</a></li><li><a ng-href=\"#\">About</a></li><li><a ng-href=\"#\">Contact</a></li></ul><ul><li><a ng-href=\"#\">Current date: {{ date | date:\'yyyy-MM-dd\' }}</a></li></ul></nav>");}]);