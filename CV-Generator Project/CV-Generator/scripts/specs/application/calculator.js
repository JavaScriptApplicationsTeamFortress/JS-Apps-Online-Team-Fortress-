/*globals describe, it, require, before, beforeEach, global, $*/
"use strict";
//var chai = require("chai");
//var sinon = require("sinon");
//var sinonChai = require("sinon-chai");
//var expect = chai.expect;
//chai.use(sinonChai);

var jq = require('jquery');

var expect = chai.expect,
    objectModel = ("~/Scripts/Model/personal-information.js");

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

    describe('calculator', function () {
        var Person = function () {
            var person = Object.create.objectModel(
                    CONSTANTS.VALID.firstName,
                    CONSTANTS.VALID.middleName,
                    CONSTANTS.VALID.lastName,
                    CONSTANTS.VALID.email,
                    CONSTANTS.VALID.city,
                    CONSTANTS.VALID.dateOfBirth,
                    CONSTANTS.VALID.age,
                    CONSTANTS.VALID.gender,
                    CONSTANTS.VALID.phoneNumber,
                    CONSTANTS.VALID.country,
                    CONSTANTS.VALID.SocialMedia);

           
            
            return person;
        }

       // console.log(Person.PersonalInformation.firstName);

        // ChaiJS
        it('adds', function () {
            expect(1 + 1).to.equal(2);
        });

        // SinonJS
        it('addsAgain', function () {
            expect(2 + 2).to.have.been.equal(4);
        });

        // SinonJS
        it('1. Expect person to be a function.', function () {
            expect(Person).to.have.been.a('function');
        });

        it('2. Expect first name is valid', function () {
            var fname = 'John';
            console.log(Person.firstName);
            expect(Person.firstName).to.have.been.an.equal(fname);
        })
    });
})

