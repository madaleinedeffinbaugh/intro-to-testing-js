// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be defined as a function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return \'Hello, Jane!\' when passed \'Jane\'', function () {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return \'Hello, Alex!\' when passed \'Alex\'', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return \'Hello, Pat!\' when passed \'Pat\'', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should display Hello World when called without parameters', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should display Hello World when called with true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should display Hello World when called with false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should display Hello World when called with null', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should display Hello World when called with \"\"', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should display Hello World when called with a number', function () {
        expect(sayHello(56)).toBe("Hello, World!");
    });
    it('should display Hello World when called with a number as a string', function () {
        expect(sayHello("56")).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be defined as a function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should always return a boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed \'5\'', function () {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when passed 8', function() {
        expect(isFive(8)).toBe(false);
    });
    it('should return false when passed 35', function() {
        expect(isFive(35)).toBe(false);
    });
});

describe('isEven', function () {
    it("should be defined as a function", function () {
        expect(typeof isEven).toBe("function");
    });
    it('should always return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when called with 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when called with -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with \"banana\"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when called with \'8\'', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when executed with Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed with a boolean', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when executed with a boolean', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when executed without an argument', function () {
        expect(isEven()).toBe(false);
    });
    it('should return false when executed with null', function () {
        expect(isEven(null)).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be defined as a function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it("should always return a boolean", function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it("return true when called with \'a\'", function () {
        expect(isVowel("a")).toBe(true);
    });
    it("return true when called with \'A\'", function () {
        expect(isVowel("A")).toBe(true);
    });
    it("return true when called with \'y\'", function () {
        expect(isVowel("y")).toBe(true);
    });
    it("return false when called with 4", function () {
        expect(isVowel(4)).toBe(false);
    });
    it("return false when called with false", function () {
        expect(isVowel(false)).toBe(false);
    });
    it("return false when called with true", function () {
        expect(isVowel(true)).toBe(false);
    });
    it("return false when called with \'banana\'", function () {
        expect(isVowel("banana")).toBe(false);
    });
    it("return false when called without an argument", function () {
        expect(isVowel()).toBe(false);
    });
    it("return false when called with \'g\'", function() {
        expect(isVowel('g')).toBe(false);
    });
});

describe('add', function() {
   it('should be defined as a function', function() {
       expect(typeof add).toBe('function');
   });
   it('should return 5 when called with 2 and 3', function() {
       expect(add(2,3)).toBe(5);
   });
    it('should return -12 when called with -3 and -9', function() {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return 11 when called with \'5\' and 6', function() {
        expect(add("5",6)).toBe(11);
    });
    it('should return 6 when called with \'-4\' and \'10\'', function() {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when called with \'banana\' and \'split\'', function() {
        expect(add("banana", "split")).toBe("NaN");
    });
    it('should return NaN when called with 2 and \'apples\'', function() {
        expect(add(2, "apples")).toBe("NaN");
    });
    it('should return NaN when called without an argument', function() {
        expect(add()).toBe("NaN");
    });
});