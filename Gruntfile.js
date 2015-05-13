module.exports = function(grunt) {
  grunt.registerTask('configure', 'Setting configuration', function(environment){

    grunt.initConfig({
      'template': {
        'process-html-template': {
          'options': {
            'data': {
              'api_url': "APIURL",
              'api_directory': "APIDIRECTORY"
            }
          },
          'files': [
            {
              expand: true,
              filter: 'isFile',
              cwd: 'src/',
              src: '**',
              dest: 'bin/'
            }
          ]
        }
      }
    });
  });

  grunt.registerTask('default', ['configure:development','template']);
  grunt.loadNpmTasks('grunt-template');
}