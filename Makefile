prereq:
	command -v node-sass >/dev/null 2>&1 || { npm install -g node-sass; }

install: prereq
	cd style; npm install; cd ../react; npm install;

run: prereq
	cd style; npm run scss-compile; cp assets/css/style*.css ../react/public; cd ../react; npm run dist;

watch: prereq
	cd style; npm run scss-compile; npm run watch;
