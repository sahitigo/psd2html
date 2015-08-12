module.exports=function(grunt){
     grunt.initConfig({
      sass: {                              // Task 
       dist:{
          files: {                         // Dictionary of files 
            'styles.css': 'styles.scss'       // 'destination': 'source' 
       
          }
        }
    },
    watch: {
      css: {
        files: ['*.scss'],
        tasks: ['sass'],
        
  },
},
    'http-server': {
 
        'dev': {
 
            // the server root directory 
            root: './',
            port: 8282,
 
            // the host ip address 
            // If specified to, for example, "127.0.0.1" the server will 
            // only be available on that ip. 
            // Specify "0.0.0.0" to be available everywhere 
            host: "0.0.0.0",
            showDir : true,
            autoIndex: true,
 
            // server default file extension 
            ext: "html",
 
            // run in parallel with other tasks 
            runInBackground: false,
 
            // specify a logger function. By default the requests are 
            // sent to stdout. 
            
            /// Use 'https: true' for default module SSL configuration 
            /// (default state is disabled) 
            
         }
     }
});

     
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-http-server');
     grunt.registerTask('default',['sass','watch']);
 };  