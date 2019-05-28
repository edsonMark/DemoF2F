#Demo

The following is a demo showing protractor as a Node.js test automation tool.

## Install

Pre-requisite:
* Node v4.4.0 at the least
* Java JDK 8

Clone repository:
git clone https://github.com/edsonMark/DemoF2F.git

Install protractor globally:

`npm install -g protractor`

Download webdriver:

`webdriver-manager update`

Start up  selenium server (on a different terminal tab):

`webdriver-manager start`

## Execute

`protractor conf.js`

which would run the Registerspec.js file
