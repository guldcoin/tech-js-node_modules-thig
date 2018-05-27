/* global describe:false it:false before:false */
const assert = require('chai').assert
const thig = require('./thig.js')
const o2c = require('object-to-class')
const ThigClass = o2c(Object.assign({}, thig), 'ThigClass')
const myObj = Object.assign({}, thig)
const myObj2 = new ThigClass()
const global = require('window-or-global')

describe('thig literal', function () {
  it('thig returns undefined with no match', function () {
    assert.equal(myObj.thig('news'), undefined)
  })
  it('thig returns global if not on this', function () {
    global.news = 'good'
    assert.equal(myObj.thig('news'), 'good')
  })
  it('thisg sets then returns this.key if not available', function () {
    assert.equal(myObj.thisg('news'), 'good')
    assert.exists(myObj.news)
    assert.equal(myObj.news, 'good')
  })
  it('thig returns this.key if available', function () {
    myObj.news = 'better'
    assert.equal(myObj.thig('news'), 'better')
  })
})

describe('thig class', function () {
  before(() => {
    delete global.news
  })
  it('thig returns undefined with no match', function () {
    assert.equal(myObj2.thig('news'), undefined)
  })
  it('thig returns global if not on this', function () {
    global.news = 'good'
    assert.equal(myObj2.thig('news'), 'good')
  })
  it('thisg sets then returns this.key if not available', function () {
    assert.equal(myObj2.thisg('news'), 'good')
    assert.exists(myObj2.news)
    assert.equal(myObj2.news, 'good')
  })
  it('thig returns this.key if available', function () {
    myObj2.news = 'better'
    assert.equal(myObj2.thig('news'), 'better')
  })
})

describe('thig bootstrap module', function () {
  var obj = Object.assign({}, thig)
  it('thig returns module version if no others', function () {
    var readFile = obj.thig('readFile', 'fs')
    assert.exists(readFile)
    assert.equal(typeof readFile, 'function')
    assert.notExists(obj.readFile)
  })
  it('thisg returns undefined with no match', function () {
    var readFile = obj.thisg('readFile', 'fs')
    assert.exists(readFile)
    assert.equal(typeof readFile, 'function')
    assert.exists(obj.readFile)
    assert.equal(typeof obj.readFile, 'function')
  })
})
