SHELL := /bin/bash

all: _site

bundle:
	bundle

npm:
	npm install

clean:
	bundle exec jekyll clean
	rm -rf build_source

build_source:
	rm -rf $@
	mkdir -p $@
	cp -a source/* build_source

_site: bundle npm build_source
	bundle exec jekyll build

serve: bundle npm build_source
	bundle exec jekyll serve

.PHONY: all clean serve bundle npm
