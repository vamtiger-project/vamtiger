# [VAMTIGER](https://www.npmjs.com/package/vamtiger)
[VAMTIGER](https://www.npmjs.com/package/vamtiger) is a language agnostic web development utility.

## Installation
[VAMTIGER](https://www.npmjs.com/package/vamtiger) can be installed globally:
```bash
npm install --global vamtiger
```

## Usage
[VAMTIGER](https://www.npmjs.com/package/vamtiger) commands can be executed from the commandline:
<code>**vamtiger** _command_ _[--options]_ **argument**</code>

## Commands
All supported commands can be listed with the **help** command:
<code>**vamtiger** _help_</code>

## Create A Web Project
Web projects can be created with the **project** command.

All supported web projects can be listed:
<code>**vamtiger** _help_ **project**</code>

### PHP [Laravel](https://laravel.com)
[Laravel](https://laravel.com) projects can be created:
```bash
vamtiger project --type php-laravel php-laravel-project-name
```

This will create a new [Laravel](https://laravel.com) project setup for behaviour driven development (BDD) with [behat](https://docs.behat.org/en/latest/) and [PHPUnit](https://phpunit.de).

All BDD tests are located in **_tests/Feature_** and can be run using [behat](https://docs.behat.org/en/latest/):
```bash
vendor/bin/behat
```