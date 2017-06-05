/**
 * Created by Logos on 2017-06-05.
 */
'use strict'

const user = require('../User.js')
const expect = require('chai').expect

describe('User ', () => {
    describe('"getName"', () => {
        it('should export a function', () => {
            expect(user.getName).to.be.a('function')
        })
    })
})