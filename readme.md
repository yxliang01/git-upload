[![Build Status](https://travis-ci.org/yxliang01/git-upload.svg?branch=master)](https://travis-ci.org/yxliang01/git-upload)
[![Dependency Status](https://david-dm.org/yxliang01/git-upload.svg)]()
[![Code Climate](https://codeclimate.com/github/yxliang01/git-upload/badges/gpa.svg)](https://codeclimate.com/github/yxliang01/git-upload)
[![npm version](https://badge.fury.io/js/git-upload.svg)](https://badge.fury.io/js/git-upload)

Git-Upload
=====

Save your time everyday

Git-Upload saves your time by removing the need to type three most common git modification upload commands `git add .`, `git commit` and `git push`

If you are just too lazy or you really don't need commit message, you can just call `gitu`.

To install:
```bash
npm install -g git-upload
```

To Use:
```bash
# Go to your git repository (via cd) 

gitu MSG

# Wait for prompts
# When it has finished, it will prompt you "done!"
```

<!-- To install manually(for developing purpose):
```bash

``` -->


`gitu MSG` = `git add . && git commit -m MSG && git push`
