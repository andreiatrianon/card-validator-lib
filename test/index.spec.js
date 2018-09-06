const cardValidator = require('../index');
const chai = require('chai');
const expect = chai.expect;

describe("cardValidator - valid a Credit Card number:", function() {
  describe("> Should throw an Error:", function() {
    describe("when the card number is empty", function() {
      it("should throw a Error message: 'The card number is empty, insert a card number'", () => {
        expect(() => cardValidator('')).to.throw(Error, 'The card number is empty, insert a card number');
      });
    });
    describe("when the card number contains quote, a text or special character", function() {
      it("should throw a Error message: 'The card number has a text or special character, insert only numbers'", () => {
        expect(() => cardValidator('ABCDEFG')).to.throw(Error, 'The card number contains quotes, a text or special character, insert only numbers without quotes');
        expect(() => cardValidator('12A3456')).to.throw(Error, 'The card number contains quotes, a text or special character, insert only numbers without quotes');
        expect(() => cardValidator('12?/3456')).to.throw(Error, 'The card number contains quotes, a text or special character, insert only numbers without quotes');
        expect(() => cardValidator('-123456')).to.throw(Error, 'The card number contains quotes, a text or special character, insert only numbers without quotes');
        expect(() => cardValidator('36490102462661')).to.throw(Error, 'The card number contains quotes, a text or special character, insert only numbers without quotes');
        expect(() => cardValidator('3649010 2462661')).to.throw(Error, 'The card number contains quotes, a text or special character, insert only numbers without quotes');
        expect(() => cardValidator('2')).to.throw(Error, 'The card number contains quotes, a text or special character, insert only numbers without quotes');
      });
    });
    describe("when the card number is float", function() {
      it("should throw a Error message: 'The card number is float, insert only integer numbers'", () => {
        expect(() => cardValidator(20.6)).to.throw(Error, 'The card number is float, insert only integer numbers');
        expect(() => cardValidator(2002.88)).to.throw(Error, 'The card number is float, insert only integer numbers');
      });
    });
    describe("when the card number has only one digit", function() {
      it("should throw a Error message: 'The card number has only one digit, insert a number greater than one digit'", () => {
        expect(() => cardValidator(2)).to.throw(Error, 'The card number has only one digit, insert a number greater than one digit');
      });
    });
  });
  describe("> Should return true:", function() {
    describe("when the card number is 36490102462661", function() {
      it("should return true", () => {
        expect(cardValidator(36490102462661)).to.deep.equal(true);
      });
    });
    describe("when the card number is 545301000006167", function() {
      it("should return true", () => {
        expect(cardValidator(545301000006167)).to.deep.equal(true);
      });
    });
    describe("when the card number is 4083952015263", function() {
      it("should return true", () => {
        expect(cardValidator(4083952015263)).to.deep.equal(true);
      });
    });
  });
  describe("> Should return false:", function() {
    describe("when the card number is 36490102462660", function() {
      it("should return false", () => {
        expect(cardValidator(36490102462660)).to.deep.equal(false);
      });
    });
    describe("when the card number is 545301000006160", function() {
      it("should return false", () => {
        expect(cardValidator(545301000006160)).to.deep.equal(false);
      });
    });
    describe("when the card number is 4083952015260", function() {
      it("should return false", () => {
        expect(cardValidator(4083952015260)).to.deep.equal(false);
      });
    });
  });
});