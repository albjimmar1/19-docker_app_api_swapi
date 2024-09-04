# API functionality

API for querying Star Wars character and planet data.<br>

# Technologies

Java 17<br>
Spring<br>
JUnit<br>
Mockito<br>
JaCoCo<br>
Maven<br>

# Installation

```sh
cd swapi
```
```sh
mvn clean install
```

# Application execution
```sh
mvnw spring-boot:run
```

# Test execution

```sh
mvn test
```

# Documentation

Get all characters or planets<br>
```sh
http GET http://localhost:8080/swapi/v1/people/
http GET http://localhost:8080/v1/planets/
```
Filter by name<br>
```sh
http GET http://localhost:8080/swapi/v1/people/?byName=sky
http GET http://localhost:8080/swapi/v1/planets/?byName=too
```
Pagination<br>
```sh
http GET http://localhost:8080/swapi/v1/people/?limit=15&offset=0
http GET http://localhost:8080/swapi/v1/planets/?limit=15&offset=0
```
Sort ascending and descending by name<br>
```sh
http GET http://localhost:8080/swapi/v1/people/?sortByName=ASC
http GET http://localhost:8080/swapi/v1/people/?sortByName=DESC
http GET http://localhost:8080/swapi/v1/planets/?sortByName=ASC
http GET http://localhost:8080/swapi/v1/planets/?sortByName=DESC
```
Sort ascending and descending by creation date<br>
```sh
http GET http://localhost:8080/swapi/v1/people/?sortByCreated=ASC
http GET http://localhost:8080/swapi/v1/people/?sortByCreated=DESC
http GET http://localhost:8080/swapi/v1/planets/?sortByCreated=ASC
http GET http://localhost:8080/swapi/v1/planets/?sortByCreated=DESC
```