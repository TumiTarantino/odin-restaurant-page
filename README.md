odin-restaurant-page

The Odin Project Full Stack JavaScript: Restaurant Page

Setup and Development

Run npm init -y --init-type=module. This creates a package.json with ES module support.

Create a .gitignore and add node_modules and dist on separate lines.

Run npm install --save-dev webpack webpack-cli. This installs Webpack and its command-line interface.

Create the src directory in the project root. Webpack will generate the dist directory when building.

Create src/template.html and src/index.js.

Create webpack.config.js in the project root.

Run npm install --save-dev html-webpack-plugin. This allows Webpack to generate the HTML file and inject the bundled JavaScript.

Edit webpack.config.js to configure html-webpack-plugin.

Run npm install --save-dev webpack-dev-server. This provides a development server and automatically rebuilds when files change.

Edit webpack.config.js to include source maps through devtool and configure watchFiles to watch src/template.html.

Run npx webpack serve. If everything works, the development server should be available at http://localhost:8080.

Run npm install --save-dev style-loader css-loader. css-loader processes imported CSS files and their dependencies; style-loader injects the processed CSS into the page.

Create src/styles.css and import it into index.js.

Style your HTML and CSS as desired.

Dynamically generate the homepage and separate pages using JavaScript modules. Import these modules into index.js.

If you want to reference local images from HTML files, install and configure html-loader. For images imported directly into JavaScript or CSS, configure Webpack's asset modules instead.

Deployment (GitHub Pages)

Make sure all your source code changes are committed and pushed to main.

Create a deployment branch. This only needs to be done once:

git branch gh-pages

Switch to the deployment branch and merge the latest changes from main:

git checkout gh-pages
git merge main --no-edit

Build the production files:

npx webpack

Force-add the generated dist directory and commit it:

git add dist -f
git commit -m "Deployment commit"

Push the contents of dist to the root of the remote gh-pages branch:

git subtree push --prefix dist origin gh-pages

Return to the main branch:

git checkout main

On GitHub, open your repository's Settings → Pages.

Under Build and deployment, select:

Source: Deploy from a branch

Branch: gh-pages

Folder: / (root)

Save the settings. GitHub Pages will publish your website.

Your website should be available at:

https://<username>.github.io/<repository-name>/

Redeploying After Changes

Whenever you make changes to your project:

Commit and push your source changes to main.

Switch to gh-pages and merge main.

Build the project with npx webpack.

Add and commit the generated dist directory.

Push the updated build with git subtree push.

Return to main.

Commands:

git add .
git commit -m "Update restaurant page"
git push

git checkout gh-pages
git merge main --no-edit

npx webpack

git add dist -f
git commit -m "Deployment commit"

git subtree push --prefix dist origin gh-pages

git checkout main