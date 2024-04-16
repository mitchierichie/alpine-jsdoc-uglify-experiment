npm ci
rm -rf dist && mkdir dist && tsc && uglifyjs index.js --output dist/index.min.js && sed s/index\.js/index\.min\.js/ index.html > dist/index.html
cp alpinejs.min.js dist/alpinejs.min.js