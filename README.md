[![Test is](https://github.com/kristiania-pg6301-2022/pg6301-innlevering-ssovesen/actions/workflows/test.yml/badge.svg)](https://github.com/kristiania-pg6301-2022/pg6301-innlevering-ssovesen/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/kristiania-pg6301-2022/pg6301-innlevering-ssovesen/badge.svg?branch=main)](https://coveralls.io/github/kristiania-pg6301-2022/pg6301-innlevering-ssovesen?branch=main)

### Innlevering med tilbakemelding: React og express på Heroku

av Sigurd Ovesen og Ørjan Skotnes

Applikasjonen skal vise at dere behersker:

* Parcel
* React
* React Router
* Jest
* Github Actions
* Coveralls
* Express
* Heroku

# Oppsummert:

* [x] Få en Parcel til å bygge en React applikasjon
* [x] Få React Router til å navigere rundt i applikasjonen
* [x] Få React til å hente og lagre informasjon til et API
* [x] Få Github Actions til å kjøre Jest-testene og publisere coverage til Coveralls

* [x] Få Heroku til å publisere websidene
Express-server skal ha følgende API:


## Todo applikasjon
Vi valgte å gjøre det litt annerledes ved å lage en todo-applikasjon. Hvor man tar i bruk CRUD for å lage, slette, lese og oppdatere
gjøremål.

I denne oppgaven har vi tatt i bruk controllere hvor der det gjøres endringer opp mot "databasen" og knyttet disse controllerene til rutene vi har laget.

Selve testene vet vi kan forbedres, men tror nok behovet for en ekstra forelesning om jest testing på client og serverside er nødvendig for å få dette på plass.

https://pg6301-todo.herokuapp.com/   <-- Applikasjonen deployed på Heroku


# Kommentarer: 

Vi ønsker tilbakemelding på hvordan vi har lagt opp testing, med presets og dependcies for hele prosjektet.
Har vi gjort det på en god nok måte eller kunne det blitt gjort annereledes?
Vi ønsker også en tilbakemelding på feilhåndtering på client og serverside.
