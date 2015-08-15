module.exports=function(grunt){
  grunt.initConfig({
    sass: {                              // Task 
      dist:{
        files: {                         // Dictionary of files 
          'assets/stylesheets/src/common.css': 'assets/stylesheets/src/common.scss',
          'assets/stylesheets/src/land.css': 'assets/stylesheets/src/land.scss',
          'assets/stylesheets/src/about.css': 'assets/stylesheets/src/about.scss',
          'assets/stylesheets/src/howitworks.css': 'assets/stylesheets/src/howitworks.scss'       // 'destination': 'source' 
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass','cssmin']
      }
    },
      //concat: {
    //    css: {
     //     src: ['assets/stylesheets/src/common.css', 'assets/stylesheets/src/land.scss'],
     //     dest: 'assets/stylesheets/app.css',
     //   },
    //},
    cssmin: {
      target: {
        files: {
           'assets/stylesheets/app.min.css':
            [
              'assets/stylesheets/src/common.css',
              'assets/stylesheets/src/land.css',
              'assets/stylesheets/src/about.css',
              'assets/stylesheets/src/howitworks.css'
            ]
       }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
//  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',['sass','cssmin','watch']);
};  