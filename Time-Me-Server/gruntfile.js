module.exports = function grunt(grunt){
  "use strict";

  grunt.initConfig({
    ts: {
      app: {
        files: [{
          src: ["server/\*\*/\*.ts", "!src/.baseDir.ts"],
          dest: "./dist"
        }],
        options: {
          module: "commonjs",
          target: "es6",
          sourceMap: false,
          roodDir: "src"
        }
      }
    },
    watch: {
      ts: {
        files: ["server/\*\*/\*.ts"],
        tasks: ["ts"],
        options: {
          debounceDelay: 200
        }
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask("default", [
    "ts"
  ]);
}
