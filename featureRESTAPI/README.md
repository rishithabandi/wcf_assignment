# FeatureApp REST service

A web application that allows the user to manage "feature requests".

A "feature request" is a request for a new feature that will be added onto an existing piece of software. Assume that the user is an employee at WCF who would be entering this information after having some correspondence with a client that is requesting the feature. The necessary fields are:

- Title: A short, descriptive name of the feature request.
- Description: A long description of the feature request.
- Client: A selection list of clients (use "Client A", "Client B", "Client C")
- Client Priority: The feature's priority number according to the client (1...n). Client Priority numbers should not repeat for the given client, so if a priority is set on a new feature as "1", then all other feature requests for that client should be adjusted.
- Target Date: The date that the client is hoping to have the feature.
- Product Area: A selection list of product areas (use 'Policies', 'Billing', 'Claims', 'Reports')

This project uses following packages: 
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/reference/htmlsingle/#using-boot-devtools)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/reference/htmlsingle/#boot-features-developing-web-applications)
* [Spring Boot Actuator](https://docs.spring.io/spring-boot/docs/2.3.4.RELEASE/reference/htmlsingle/#production-ready)

## Build
Run  `mvn clean package`   to build the project. 
 

## Development server

Run `java -jar target\featureREST-0.0.1-SNAPSHOT.jar` for a dev server. 

##Test URL
* [Get ALL features API -- http://localhost:8090/features/](http://localhost:8090/features/)

