# Angular 4 Listing App with Django

A test Angular 4 user interface, served using the Django web framework. Backend listing data is pulled from a Django REST API and displayed in app. Through the UI listings can be created, modified, and deleted.

## Using the Django web server

This project's requirements as listed in its current `requirements.txt` file is:

```
Django==1.11.3
djangorestframework==3.6.3
pytz==2017.2
```

### Running the API server

To run the django server run the following commands

`$ pip install -r requirements.txt`
`$ ./manage.py migrate`
`$ ./manage.py runserver`

Navigate to http://localhost:8000 to view the app.

## Working with the Angular 4 UI project

This UI uses Angular 4 generated using [angular-cli](https://github.com/angular/angular-cli).
### Development server

Run `npm start` for a development server using `http://localhost:8000/` as a backend proxy. To view backend data have the Django listing-server turned on and pointing to port 8000. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

### Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
