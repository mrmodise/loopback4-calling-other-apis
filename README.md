# Calling Other APIs
This is a demo project that illustrates calling APIs from within Loopback 4. Unlike most demos you have seen online this
 demo project covers invoking an API that is protected (requires username and password).
 
 The project has 3 controllers that map to 5 end points, namely:
 
 1) ```/add/{intA}/{intB}``` unsecure SOAP endpoint
 2) ```/api/people/{personId}``` unsecure REST endpoint
 3) ```/api/people``` unsecure REST endpoint
 4) ```/api/authenticate``` secure REST endpoint (username: user and password: user)
 5) ```/ping``` unsecure REST endpoint
 
## Prerequisites
Install the following:

* NodeJS vlatest (https://nodejs.org/en/download/)
* Loopback 4 (https://v4.loopback.io/getting-started.html)
* Redis (https://redis.io/download)

## Setup
Download project:
```
$ git clone https://github.com/mrmodise/loopback4-calling-other-apis.git
```


Install the dependencies:

```
$ cd loopback4-calling-other-apis
$ npm install 
```

Start the dev server:

```
$ npm start
```

## Unit tests

To execute tests:
```
$ npm run test
```

## Performance
Redis has been used to cache requests for data retrieved on endpoint (GET) ``/api/people/{personId}``. To remove cached results
load endpoint (POST) ``/api/people/{personId}``

## License

```
The MIT License (MIT)

Copyright (c) 2019 MP Mod

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
 

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
