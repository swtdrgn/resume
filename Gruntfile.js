module.exports = function(grunt) {
  grunt.registerTask('configure', 'Setting configuration', function(environment){
    professional_experience = grunt.file.read('data/work_experience.json');
    education = grunt.file.read('data/education.json');
    technical_skills = grunt.file.read('data/technical_skills.json');
    keywords = grunt.file.read('data/keywords.json');
    technologies = grunt.file.read('data/technical_keywords.json');
    projects = grunt.file.read('data/projects.json');
    header = grunt.file.read('components/header.html');
    grunt.initConfig({
      'template': {
        'process-html-template': {
          'options': {
            'data': {
              'professional_experience': professional_experience,
              'education': education,
              'technical_skills': technical_skills,
              'header': header,
              'keywords': keywords,
              'technologies': technologies,
              'projects': projects
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