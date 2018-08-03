import React from 'react';
import {assert} from 'chai';

import { romanToArabic } from './RomanToArabic';

describe('Roman numbers', () => {
	it('should return 1 for I', () => {
		assert.equal(romanToArabic('I'), 1);
    });
    
    it("should return 1234 MCCXXXIV", function() {
        assert.equal(romanToArabic('MCCXXXIV'), 1234);
    });
});