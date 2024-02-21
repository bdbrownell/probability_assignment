# Probability of K-sided die results

## Description

This repository contains a simple NodeJS program that calculates the probabilities of rolling a K-sided die and having it land on K for a series of rolls.

## Installation

### Requirements

- NodeJS LTS (v20.11.1)
- npm (included with NodeJS)

### Setup

after cloning the repository, run the following command

```console
npm install
```

## Usage

run the basic program using the following command

```console
npm run basic
```

for API endpoint solution, a web server can be started with

```console
npm start
```

this will start a web server using Express that will listen on port 3000.

- GET request will return the array of probabilities
- including a header 'k' on the request will return a single probability for the K value provided.

example request using curl

```console
curl --header "k: 10" localhost:3000

0.190000
```

the jasmine library is used for unit tests and can be ran using

```console
npm test
```
