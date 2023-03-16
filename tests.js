// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
    it('should be defined as a function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return \'Hello, Jane!\' when passed \'Jane\'', function() {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return \'Hello, Alex!\' when passed \'Alex\'', function() {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return \'Hello, Pat!\' when passed \'Pat\'', function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should display Hello World when called without parameters', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should display Hello World when called with true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should display Hello World when called with false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should display Hello World when called with null', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should display Hello World when called with \"\"', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should display Hello World when called with a number', function() {
        expect(sayHello(56)).toBe("Hello, World!");
    });
    it('should display Hello World when called with a number as a string', function() {
        expect(sayHello("56")).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be defined as a function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should always return a boolean', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed \'5\'', function() {
        expect(isFive("5")).toBe(true);
    });
});