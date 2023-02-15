import {expect, test} from '@jest/globals';
import twoSum from './0001-Two-SumJS';

test("0001-Two-SumTS", ()=>{
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
})