.PHONY: install lint brain-games publish

install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-calculate:
	node bin/brain-calculate.js	

brain-even:
	node bin/brain-even.js	

brain-gcd:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint --fix