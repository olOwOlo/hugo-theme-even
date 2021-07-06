start:
	hugo server --source=exampleSite --themesDir=../themes --disableFastRender
dist:
	hugo --source=exampleSite --themesDir=../themes -d ../docs
changelog:
	conventional-changelog -p angular -i CHANGELOG.md -s
