# odin-restaurant-page
The Odin Project Full Stack JavaScript: Restaurant Page

Steps:

1: Run npm init -y --init-type=module, this creates a package.json

2: Create a gitignore and add node_modules,dist on separate lines

3: Run --save-dev webpack webpack-cli, this installs webpack as well as its command line interface

4: Create the src and dist directories on the main directory

5: Create the index.html and index.js(no dependancies created yet), in the src directory

6: Create webpack.config.js in the root directory

7: Run npm install --save-dev html-webpack-plugin, this allows html to be bundled

8: Edit webpack.config.js to add the html-webpack-plugin

0: Run npm install --save-dev webpack-dev-server, this is similar to live preview, it is a QOL that reduces the time spent running npx webpack

0.1: Edit webpack.config.js, to include the source map in the devtool as well as set watchfiles to the template.html

