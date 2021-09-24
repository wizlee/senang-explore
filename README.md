# SenangExplore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

1. First generate Senang APIs Angular client by using swagger-codegen
  - Example: `java -jar swagger-codegen-cli.jar generate -i swaggerbigPayTest.json -l typescript-angular -o senang-explore/projects/senang-swagger-client/src --additional-properties ngVersion=12.2.7`
2. Build the 'senang-swagger-client' Angular library by running `ng build senang-swagger-client`
3. `ng build` or `ng serve` as usual
- references:
  - https://medium.com/sohoffice/the-api-first-strategy-use-swagger-to-generate-api-client-as-an-angular-library-66964ea43587
  ```ts
  import {ApiModule} from 'foo-swagger-client';
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      ...
      ApiModule.forRoot(IdentityService.getApiConfiguration),
      ...
  })
  export class AppModule {
  }
  ```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
