/*
 * Rules for js/balanced-brackets.js
 */
describe('Balanced Brackets', function () {

    //isBracket
    it('"{" is a bracket', function () {
            expect(balancedBrackets.isBracket('{')).toBe(true);
    });
    it('"a" is not a bracket', function () {
        expect(balancedBrackets.isBracket('a')).toBe(false);
    });

    //isOpeningBracket
    it('"{" is an opening bracket', function () {
        expect(balancedBrackets.isOpeningBracket('{')).toBe(true);
    });
    it('"}" is not an opening bracket', function () {
        expect(balancedBrackets.isOpeningBracket('}')).toBe(false);
    });

    //isBalanced()
    it('empty string should balance',function(){
        expect(balancedBrackets.isBalanced('')).toBe(true);
    });

    it('\"()[]{}(([])){[()][]}\" should balance',function(){
        expect(balancedBrackets.isBalanced('()[]{}(([])){[()][]}')).toBe(true);
    });

    // not balanced
    it('\"())[]{}\" should not balance',function(){
        expect(balancedBrackets.isBalanced('())[]{}')).toBe(false);
    });

});