Feature: Create a new web project
    Defined web projects can be created
    e.g vamtiger project [--options] project-name

    Scenario Outline: vamtiger <command> --type <type> <name>
        Given "<command>" command
        And project type is "<type>"
        And project name is "<name>"
        When running the command via the API
        And running the command via the CLI
        Then a new project should be created

        Examples:
            | command | type        | name                |
            | project | php-laravel | php-laravel-project |