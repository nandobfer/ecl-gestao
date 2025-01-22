#!/bin/bash

yarn build
zip -r ecl.zip dist
scp ecl.zip boz:/var/www/ 

ssh boz "cd /var/www && unzip ecl.zip && rm -rf ecl.nandoburgos.dev.bak/ && mv ecl.nandoburgos.dev/ ecl.nandoburgos.dev.bak && mv dist/ ecl.nandoburgos.dev && rm -rf ecl.zip"