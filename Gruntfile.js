/// <binding BeforeBuild='dev' />
/*global module */
module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        // read in the project settings from the package.json file into the pkg property
        pkg: grunt.file.readJSON("package.json"),
        
        // Install only the bower packages that we need
        bower: {
            install: {
                options: {
                    "targetDir": "./public/lib",
                    "copy": true,
                    "cleanup": true,
                    "install": true
                }
            }
        },
        
        concat: {
            css: {
                src: [
                    "public/lib/css/bootstrap/bootstrap.css",
                    "public/lib/css/fontawesome/font-awesome.css",
                    "public/css/about.css",
                    "public/css/contact.css",
                    "public/css/gettingstarted.css",
                    "public/css/home.css",
                    "public/css/index.css"
                ],
                dest: "public/lib/dist/cts.css"
            },
            js: {
                src: [
                    "public/lib/js/jquery/jquery.js",
                    "public/lib/js/bootstrap/bootstrap.js",
                    "public/js/script.js"
                ],
                dest: "public/lib/dist/cts.js"
            }
        },
        
        cssmin: {
            target: {
                files: {
                    "public/lib/dist/cts.min.css": "public/lib/dist/cts.css"
                }
            }
        },
        
        uglify : {
            js: {
                files: {
                    "public/lib/dist/cts.min.js": "public/lib/dist/cts.js"
                }
            }
        },
        
        copy: {
            files: {
                expand: true,
                flatten: true,
                src: ["public/lib/fonts/**/*"],
                dest: "public/lib/fonts/",
                filter: "isFile"
            }
        },
        
        watch: {
            files: ["public/css/cts.css", "public/js/cts.js"],
            tasks: ["concat", "cssmin", "uglify"]
        }
    });
    
    // Add all plugins that your project needs here
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    
    // this would be run by typing "grunt test" on the command line
    // the array should contains the names of the tasks to run
    grunt.registerTask("test", []);
    
    // define the default task that can be run just by typing "grunt" on the command line
    // the array should contains the names of the tasks to run
    grunt.registerTask("default", ["bower", "concat", "cssmin", "uglify", "copy", "watch"]);
    grunt.registerTask("dev", ["bower", "concat", "cssmin", "uglify", "copy"]);
    grunt.registerTask("combine", ["concat", "cssmin", "uglify", "copy"]);
    grunt.registerInitTask("install", ["bower"]);
};