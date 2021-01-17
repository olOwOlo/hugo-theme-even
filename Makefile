start:
	hugo server --source=exampleSite --themesDir=../.. --disableFastRender
changelog:
	conventional-changelog -p angular -i CHANGELOG.md -s
