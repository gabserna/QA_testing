describe("MathUtils", () => {
  let mathUtils;

  beforeEach(() => {
    mathUtils = new MathUtils();
  });

  describe("add", () => {
    it("should add 2 numbers", () => {
      expect(mathUtils.add(1, 2)).toEqual(3);
    });
    it("should add negative numbers", () => {
      expect(mathUtils.add(-1, -2)).toBe(-3);
    });
    it("should add negative and positive numbers", () => {
      expect(mathUtils.add(-1, 3)).toBe(2);
      expect(mathUtils.add(2, -2)).toBe(0);
    });
    it("should add large numbers", () => {
      expect(mathUtils.add(100000000, 300000000)).toBe(400000000);
    });
    it("should add non-integer numbers", () => {
      expect(mathUtils.add(1.5, 2.5)).toBe(4);
    });
    it("should handle strings", () => {
      expect(mathUtils.add("not", "numbers")).toBe("notnumbers");
    });
  });
  describe("subtract", () => {
    it("should subtract 2 numbers", () => {
      expect(mathUtils.subtract(2, 1)).toBe(1);
    });
    it("should throw an error with non-numbers", () => {
      expect(() => {
        mathUtils.subtract("not", "numbers");
      }).toThrow(new Error("Either not or numbers is not a number"));
      expect(() => {
        mathUtils.subtract(null, 1);
      }).toThrow();
      expect(() => {
        mathUtils.subtract(1, false);
      }).toThrow();
      expect(() => {
        mathUtils.subtract({ a: 1 }, false);
      }).toThrow();
    });
  });
  describe("average", () => {
    it("should average 2 numbers", () => {
      expect(mathUtils.average(1, 3)).toBe(2);
    });
    it("should average the same number", () => {
      expect(
        mathUtils.average(8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8)
      ).toBe(8);
    });
    it("should average decimal numbers", () => {
      expect(mathUtils.average(-0.1, 0, 0.1)).toBe(0);
      expect(mathUtils.average(0.1, 0.2)).toBeCloseTo(0.15);
    });
    it("should throw an error with non-numbers", () => {
      expect(() => {
        mathUtils.average("not", "numbers");
      }).toThrow();
      expect(() => {
        mathUtils.average(null, 1);
      }).toThrow();
      expect(() => {
        mathUtils.average(1, false);
      }).toThrow();
      expect(() => {
        mathUtils.average({ a: 1 }, false);
      }).toThrow();
    });
  });
});
