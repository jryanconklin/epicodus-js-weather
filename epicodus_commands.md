# Run First:
npm init
bower init

# Run Second:
npm install browserify --save-dev
npm install del --save-dev
npm install jshint --save-dev
npm install gulp --save-dev
npm install gulp-concat --save-dev
npm install gulp-jshint --save-dev
npm install gulp-uglify --save-dev
npm install gulp-util --save-dev
npm install vinyl-source-stream --save-dev
npm install browser-sync --save-dev

bower install jquery --save
bower install bootstrap --save
npm install bower-files --save-dev

# Global Installs - New Setup Only:

npm install bower -g

# Old Project on New Machine
npm install //Check on this
bower install

# Gulp Script Tags


# Bower Link/Script Tags

## JavaScript - FIRST
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>


## CSS - SECOND
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">

# API's and Optional Installs
bower install moment --save
<script src="bower_components/moment/min/moment.min.js"></script>

# Final Script and CSS Tags

<link rel="stylesheet" href="build/css/vendor.css">
<script src="build/js/vendor.min.js"></script>
<script type="text/javascript" src="build/js/app.js"></script>
