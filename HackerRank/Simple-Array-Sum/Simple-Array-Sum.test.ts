import { test,expect } from "@jest/globals";
import simpleArraySum from "./Simple-Array-Sum";

test('Simple Array Sum', ()=>{
    expect(simpleArraySum([1,2,3,4,10,11])).toBe(31);
    expect(simpleArraySum([338, 65, 713, 595, 428, 610, 728, 573, 871, 868])).toBe(5789);
})