prereq:
	command -v node-sass >/dev/null 2>&1 || { npm install -g node-sass; }

install: prereq
	cd style; npm install; cd ../react; npm install;

run: prereq
	cd style; npm run scss-compile; cp assets/css/style-guide.css ../react/public/css; cp -r assets/fonts ../react/public; cd ../react; npm start

watch: prereq
	cd style; npm run scss-compile; npm run watch;
