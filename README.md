# Temperature Converter/Checker
[![CircleCI](https://circleci.com/gh/Zeff/temp-converter.svg?style=svg&circle-token=3aa38453c7c7991ec8cd825809ba5364cfea1bf3)](https://circleci.com/gh/Zeff/temp-converter)
## Description
A command line utility that allows users to input specific temperature conversion problems along with student answers. It responds with 'correct' or 'incorrect' after comparing the authoritative computed answer to the students answer, after rounding both to the ones place. It also performs basic input validation on the conversion problem data and returns a response of 'invlaid' if it detects an issue with data entry.

## Installation
This command line utility is written in Javascript/Node, so it requires Node.js and certain dependencies to be installed. To install the scripts onto your local machine, you may either download the zip file from Github or clone the repository assuming you have Git on installed on your local machine. 

You will need to have Node.js installed on your PC, preferably version 9.11.1. It will most likely work well with v8.11.1 (tests passing). See [Nodejs.org](https://nodejs.org/) for installation instructions.

To install the dependencies for this package, after insuring Node.js is installed and available, simply navigate into the project directory root (you will see a package.json file at this level) and execute the following command:
`npm install`

## Usage
To use this utility, call it from the command line:

`node converter.js --temp <number> --uom <string> --target <string> --answer <number>`

Replace the parameters within `<>` with your values. Here is the list of accepted parameters:

- temp (any numeric value)
  - `--temp 0`
  - `--temp 100`
  - `--temp 567.54876`
  - `--temp -32.5`
- uom (abbreviations for: Celsius, Fahrenheit, Rankine, or Kelvin)
  - `--uom c` (or C)
  - `--uom f` (or F)
  - `--uom r` (or R)
  - `--uom k` (or K)
- target (same options as uom)
- answer (whatever answer the student gives you)

**Example usage:**
`node converter.js --temp 100 --uom c --target f --answer 212`

This would return a response of `correct`.
