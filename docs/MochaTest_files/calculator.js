
/*globals describe, it, require, before, beforeEach, global, $*/
"use strict";
//var chai = require("chai");
//var sinon = require("sinon");
//var sinonChai = require("sinon-chai");
//var expect = chai.expect;
//chai.use(sinonChai);
//import info  from '../../Model/personal-information.js';

var jq = require['jquery'];
var jsdom = require['jsdom'];

var expect = chai.expect,
    cvInfo = info.personalInformation;

describe('Test CV', function () {
    var CONSTANTS = {
        CONSTS: {
            MIN_LENGTH_NAME: 3,
            MAX_LENGTH_NAME: 10,
            MIN_LENGTH_PHONE: 10,
            MAX_LENGTH_PHONE: 12,
            MIN_LENGTH_ADDRESS: 10,
            MAX_LENGTH_ADDRESS: 50
        },
        VALID: {

            firstName: 'John',
            middleName: 'Bon',
            lastName: 'Snow',
            email: 'abv@abv.bg',
            city: 'Sofia',
            dateOfBirth: '01.01.2015',
            age: '25',
            gender: 'male',
            phoneNumber: '+359123456789',
            country: 'Bulgaria',
            nationality: 'bulgarian',
            socialMedia: 'www.telerikakademy.com'
        },
        INVALID: {
            firstName: 'Pesho',
            middleName: 'Bor',
            lastName: 'Peshev',
            email: 'mail@abv.bg',
            city: 'Varna',
            dateOfBirth: '01.01.2016',
            age: '25',
            gender: 'female',
            phoneNumber: '+359123456780',
            country: 'UK',
            nationality: 'bulgarian',
            socialMedia: 'www.telerikakademy.bg'
        }
    }

    describe('Test', function () {
        var $,
        formElem = document.forms[0],
        email = CONSTANTS.VALID.email,
        animSpan = document.getElementById('25');

        var Person = function () {
            var person = Object.create.cvInfo({
                firstName: CONSTANTS.VALID.firstName,
                middleName: CONSTANTS.VALID.middleName,
                lastName: CONSTANTS.VALID.lastName,
                email: CONSTANTS.VALID.email,
                city: CONSTANTS.VALID.city,
                dateOfBirth: CONSTANTS.VALID.dateOfBirth,
                age: CONSTANTS.VALID.age,
                gender: CONSTANTS.VALID.gender,
                phoneNumber: CONSTANTS.VALID.phoneNumber,
                country: CONSTANTS.VALID.country
            });



            return person;
        }

        before(function () {
            $ = require['jquery']
        })

        it('1. Expect person to be a function.', function () {
            expect(cvInfo).to.be.a('function');
        });

        it('2. Expect first name is valid', function () {
            var fname = 'John';
            cvInfo.firstName = 'John';
            expect(cvInfo.firstName).to.have.been.an.equal(fname);
        })


        it('3. Expect has document', function () {
            var div = document.createElement('div')
            expect(div.nodeName).eql('DIV')
        })

        it('4.Form exists in the DOM', function () {
            expect(formElem).to.not.equal(null);
        });

        //it('5.Input field should be set to type email', function () {
        //    expect(email).to.equal('abv@abv.bg');
        //});

        //it('6.Signup button has the right text', function () {
        //    expect(animSpan.innerHTML).to.equal('25%');
        //});

    })

    describe('DOM tests - Signup form', function () {

    });


    // -------------------------------------------------------------------------------


    var myapi = {
        get: function (callback) {
            var xhr = new XMLHttpRequest();

            // xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts/1', true);
            xhr.open('GET', 'http://http://localhost:25583/Mocha/Index', true);


            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        callback(null, JSON.parse(xhr.responseText));
                    }
                    else {
                        callback(xhr.status);
                    }
                }
            };

            xhr.send();
        },

        post: function (data, callback) {
            var xhr = new XMLHttpRequest();
            //xhr.open('POST', 'http://jsonplaceholder.typicode.com/posts', true);
            xhr.open('POST', 'http://http://localhost:25583/Mocha/Index', true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    callback();
                }
            };

            xhr.send(JSON.stringify(data));
        }
    };


    chai.should();

    describe('MyAPI', function () {
        beforeEach(function () {
            this.xhr = sinon.useFakeXMLHttpRequest();

            this.requests = [];
            this.xhr.onCreate = function (xhr) {
                this.requests.push(xhr);
            }.bind(this);
        });

        afterEach(function () {
            this.xhr.restore();
        });


        //Tests etc. go here
        it('1.should parse fetched data as JSON', function (done) {
            var data = { foo: 'bar' };
            var dataJson = JSON.stringify(data);

            myapi.get(function (err, result) {
                result.should.deep.equal(data);
                done();
            });

            this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
        });

        it('2.should send given data as JSON body', function () {
            var data = { hello: 'world' };
            var dataJson = JSON.stringify(data);

            myapi.post(data, function () { });

            this.requests[0].requestBody.should.equal(dataJson);
        });
    });
})

