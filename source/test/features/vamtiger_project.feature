Feature: Create a new web project
    Defined web projects can be created
    e.g vamtiger project project-type

    Scenario Outline: Project: PHP - Laravel
        Given "<command>" command
        And project type: "<type>"
        And project name: "<name>"
        When running the command via the API
        And running the command via the CLI
        Then a new project should be created

        Examples:
            | command | type        | name                |
            | project | php-laravel | php-laravel-project |