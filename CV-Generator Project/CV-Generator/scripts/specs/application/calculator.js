
/*globals describe, it, require, before, beforeEach, global, $*/
"use strict";
//var chai = require("chai");
//var sinon = require("sinon");
//var sinonChai = require("sinon-chai");
//var expect = chai.expect;
//chai.use(sinonChai);

var jq = require['jquery'];
var jsdom = require['jsdom'];

//import info  from '../../Model/personal-information.js';

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

    describe('calculator', function () {
        var Person = function () {
            var person = Object.create.cvInfo({
                firstName: CONSTANTS.VALID.firstName,
                middleName:CONSTANTS.VALID.middleName,
                lastName:CONSTANTS.VALID.lastName,
                email:CONSTANTS.VALID.email,
                city:CONSTANTS.VALID.city,
                dateOfBirth:CONSTANTS.VALID.dateOfBirth,
                age:CONSTANTS.VALID.age,
                gender:CONSTANTS.VALID.gender,
                phoneNumber:CONSTANTS.VALID.phoneNumber,
                country:CONSTANTS.VALID.country
            });

           
            
            return person;
        }

        cvInfo.firstName = 'John';
        console.log(cvInfo.firstName);

        
        it('adds', function () {
            expect(1 + 1).to.equal(2);
        });

        // SinonJS
        it('addsAgain', function () {
            expect(2 + 2).to.have.been.equal(4);
        });

        
        it('1. Expect person to be a function.', function () {
            expect(cvInfo).to.be.a('function');
        });

        it('2. Expect first name is valid', function () {
            var fname = 'John';
            cvInfo.firstName = 'John';
            expect(cvInfo.firstName).to.have.been.an.equal(fname);
        })
    });
})

