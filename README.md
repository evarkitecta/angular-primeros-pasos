# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3 and has been updated to version 17.1.2

## See the website
I want to visit this website in my navigator: [click here to visit this website](https://evarkitecta.github.io/angular-primeros-pasos/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Building dependencies to github pages

❌ To delete docs folder use: [del-cli](https://www.npmjs.com/package/del-cli).

- Install only as development dependency: `$ npm install del-cli --save-dev`
- It doesn't work with Windows. Write this in scripts to delete with a confirmation delete question or not, respectively:  
-->`"delete:docs": "rd /s docs"`  or -->`"delete:docs": "rd /s /q docs"`,

🔁 To copy files from a directory use: [copyfiles](https://www.npmjs.com/package/copyfiles).

See the scripts code from file `package.json` in this repository


