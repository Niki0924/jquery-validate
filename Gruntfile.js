module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    outputStyle: 'compressed'
                },
                files: [
                  {
                    expand: true,
                    cwd: 'sass/',
                    src: ['**/*.scss'],
                    dest: 'css/',
                    ext: '.css',
                  },
                ],
            }
        },
        uglify: {
            dist: {
              files:{
                    'js/jquery-validate.min.js': ['js/jquery-validate.js']
              },
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                updateConfigs: ["pkg"],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json'], // '-a' for all files
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                commitFiles: ["-a"],
                push: false
            }
        },
        watch: {
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass'],
                options: { 
                    spawn: false,
                    livereload: true 
                },
            },
            scripts: {
                files: 'js/**/*.js',
                tasks: ['newer:uglify'],
                options: { 
                    spawn: false,
                    livereload: true 
                },
            },
            images: {
              files: ['images/**/*.{png,jpg,gif}'],
              tasks: ['imagemin'],
              options: {
              spawn: false,
              }
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-bump');
    grunt.registerTask('default',['watch']);
}