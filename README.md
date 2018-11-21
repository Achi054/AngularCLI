# AngularCLI
## What is AngularCLI
Command Line Interface that is easy to build application with best practices rite out of the box.

## Setting up angular CLI
Pre-requisites <br/>
node verison 8.x or higher <br/>
<b>node -v</b><br/>
npm version 5.x or higher<br/>
<b>npm -v</b><br/>
Install angualr CLI <br/>
<b>npm install -g @angular/cli</b><br/>
Verify using<br/>
<b>ng -v</b>

## AngularCLI commands
- Create New angularjs app <br/>
<b>ng new app-name</b> 
- Create new angularjs app to show all the files but not create them<br/>
<b>ng new app-name --dry-run or ng new app-name -d</b>
- Create new angularjs app with skipping install of npm modules<br/>
<b>ng new app-name --skip-install</b>
- Help to know all the app creation options<br/>
<b>ng new --help</b>
- Create new application with adding a prefix(default name for the app.component selector)<br/>
<b>ng new app-name --prefix ang --skip-install or ng new app-name -p ang --skip-install</b>
- Create new application with out having tests<br/>
<b>ng new app-name --skip-tests -d</b>
- Create new application with default style to be sass/less<br/>
<b>ng new app-name --style scss or ng new app-name --style less</b>
- Create new application with routing module<br/>
<b>ng new app-name --routing --skip-install</b>
<br/><br/>
- Angularjs component documentation <br/>
<b>ng doc component</b>
- Angularjs help <br/>
<b>ng --help</b>
- Angularjs linting<br/>
<b>ng lint</b>
- Angularjs linting with stylish error details<br/>
<b>ng lint app-name --format stylish</b>
- Angularjs linting fix the lint issue<br/>
<b>ng lint app-name --fix</b>
- Angularjs unit tests<br/>
<b>ng test</b>
- Angularjs end-to-end testing<br/>
<b>ng e2e</b>
- Angulajs build<br/>
<b>ng build</b>
- Angularjs server application<br/>
<b>ng server (defaulty runs in port 4200)</b>
- Angularjs run application with browser<br/>
<b>ng server -o</b>
- Angularjs install all the dependencies<br/>
<b>npm install --save-dev</b>

# Blueprints
Angular CLI uses blueprints to generate code.
They define templates for Components, Services, NgModules etc.<br/>
Syntax: <b>ng generate \<blueprint\> \<options\></b><br/>
Snippets:
- Create component <br/>
<b>ng generate component customer or ng g c customer</b><br/>
- Create component without its own folder<br/>
<b>ng generate component customer --flat or ng g c customer --flat</b><br/>
- Create service <br/>
<b>ng generate service customer-service</b><br/>
- Create class<br/>
<b>ng generate class customer</b><br/><br/>
- Create directive<br/>
<b>ng generate directive customer-details or ng g d customer-details</b><br/>
this would create a directive in the root folder.
- Create directive within its folder<br/>
<b>ng generate directive customer-detailsor --flat false or ng g d customer-details --flat false</b>
<br/><br/>
- Create service <br/>
<b>ng generate service customer-data or ng g s customer-data</b><br/>
this would create a directive in the root folder.
- Create service with its folder<br/>
<b>ng generate service customer-data --flat false or ng g s customer-data --flate false</b><br/>
this would create a directive in the root folder.
<br/><br/>
- Create typescript class<br/>
<b>ng generate class models/customer or ng g cl models/customer</b>
- Create typescript interface<br/>
<b>ng generate interface models/person or ng g i models/person</b>
- Create typescript enum<br/>
<b>ng generate enum models/gender or ng g e models/gender</b>
- Create typescript pipes<br/>
<b>ng generate pipes shared/init-caps.pipe or ng g p shared/init-caps.pipe</b>
<br/><br/>
- Create new module<br/>
<b>ng generate module login or ng g m login</b>
- Create new module without spec<br/>
<b>ng generate module login --spec false or ng g m login --spec false</b>
- Create new module with reference to another module<br/>
<b>ng generate module login --module app.module or ng g m login -m app.module</b>
<br/><br/>
- Create app with routing module<br/>
<b>ng new \<app-name\> --routing</b>
- Create app with routing and register in a specific module <br/>
<b>ng generate module \<module-name\> --routing --module \<module-name-to-reference\> or ng g m \<module-name\> --routing -m \<module-name-to-reference\></b>
<br/><br/>
## Building and serving
- Build angular app<br/>
<b>ng build or ng b</b>
- Build angular app for PROD<br/>
<b>ng build --prod or ng b -prod</b>
- Build with stats<br/>
Install webpack analyzer
<b>npm install webpack-bundle-analyzer --save-dev</b>
<br/><b>ng build --stat-json or ng b --stats-json</b><br/>
Include the line '"stats": "npx webpack-bundle-analyzer dist/angular-routing/stats.json"' in the scripts section<br/>
<b>npm run stats</b>
<br/><br/>
- Serve angular app<br/>
<b>ng serve</b>
- Serve angular app on a different port<br/>
<b>ng serve -o --port 8081</b>
- Serve angular app in prod environment<br/>
<b>ng serve -o --prod</b><br/><br/>

## Adding new angular packages
- Add angular-material<br/>
<b>ng add @angular/material</b>
- Creating angular nav bar with angular-material<br/>
<b>ng g @angular/material:material-nav --name nav</b>
- Creating angular dashboard with angular-material<br/>
<b>ng g @angular/material:material-dashboard --name dashboard</b>
- Creating angular table with angular-material<br/>
<b>ng g @angular/material:material-table --name customer-list</b>

