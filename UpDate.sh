#!/bin/bash

git add . 
git commit -m $(date +"%Y/%m/%d/%T")
git push -u org
