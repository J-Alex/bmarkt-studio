'use strict';

module.exports = function(grunt) {
	grunt.initConfig({  
		pkg: grunt.file.readJSON('package.json'),    	
		watch: {
			sass: {
				files: ['src/scss/framework/*.scss','src/scss/layouts/*.scss','src/scss/*.scss'],
				tasks: ['sass']
			},
			cssmin: {
				files: ['public/res/css/styles.css'],
				tasks: ['cssmin']
			},
			uglify: {
				files: ['src/js/**/*.js'],
				tasks: ['uglify']
			}
		},
		sass: {
			dist: {
				files: {
					'public/res/css/styles.css':'src/scss/styles.scss'
				}
			}
		},
		cssmin: {
			dist: {
				files: [{
					expand: false,
					src:  ['public/res/css/styles.css'],
					dest: 'public/res/css/styles.min.css'
				}]
			}
		},
		uglify: {
			dist: {
				src:  ['src/js/modules/*.module.js', 'src/js/**/*.js'],
				dest: 'public/res/js/scripts.min.js'
			}
		},
		php: {
			dev: {
				options: {
					hostname: '127.0.0.1',
					port: 5000,
					base: './public'
				}
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
		            src: [
							'public/res/css/styles.min.css',
							'public/res/js/scripts.min.js',
							//'public/res/css/styles.css',
							'public/res/js/scripts.js',
							'public/**/*.html',
							'public/*.html'
						]				
		        },
		        options: {
		        	proxy:'<%= php.dev.options.hostname %>:<%= php.dev.options.port %>',
		        	/*server: './public',
		        	address: '0.0.0.0',*/
		        	port: 9000,
		            watchTask: true,
		            open: true
				}
			} 
		},
		imagemin: {
		    dynamic: {
		      files: [{
		        expand: true,
		        cwd: 'src/images/',
		        src: ['**/*.jpg'],
		        dest: 'public/res/img/'
		      }]
		    } 
		}
	});
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-php');

	grunt.registerTask('default',['php','browserSync','watch']);
	grunt.registerTask('build',[ 'imagemin']);
}