desc "Set up a Grunt Blank Slate project."
task :install do
  %x{npm install grunt --save-dev}
  %x{npm install grunt-contrib-sass --save-dev}
  %x{npm install grunt-contrib-coffee --save-dev }
  %x{npm install grunt-contrib-watch --save-dev}
  %x{npm install grunt-contrib-connect --save-dev}
  %x{npm install grunt-contrib-jshint --save-dev}
  %x{npm install grunt-contrib-uglify --save-dev}
  %x{npm install grunt-notify --save-dev}
  %x{rm -rf .git}
  puts "\nYou're ready to go! Just run `grunt` to get going.\n"
end
