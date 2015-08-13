module.exports=function(grunt){
  grunt.initConfig({
    sass: {                              // Task 
      dist:{
        files: {                         // Dictionary of files 
        'assets/stylsheets/styles.css': 'assets/stylsheets/src/styles.scss'       // 'destination': 'source' 
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylsheets/src/*.scss'],
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['sass','watch']);
};  