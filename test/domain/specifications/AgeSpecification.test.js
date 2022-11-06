import AgeSpecification from "../../../src/domain/specifications/AgeSpecification";

test('Given the base date 2020-07-01 and the birthdate 2010-07-01 when calculating age then the calculated age is equal to 10', () => {
    const ageSpecification = new AgeSpecification(new Date("2020-07-01"));
    const actualAge = ageSpecification.calculateAge(new Date("2010-07-01"));
    expect(actualAge).toBe(10);
});

test('Given the base date 2020-07-01 and the birthdate 2010-07-02 when calculating age then the calculated age is lower than 10', () => {
    const ageSpecification = new AgeSpecification(new Date("2020-07-01"));
    const actualAge = ageSpecification.calculateAge(new Date("2010-07-02"));
    expect(actualAge).toBeLessThan(10);
});

test('Given the base date 2020-07-01 and the birthdate 2010-06-01 when calculating age then the calculated age is greater than 10', () => {
    const ageSpecification = new AgeSpecification(new Date("2020-07-01"));
    const actualAge = ageSpecification.calculateAge(new Date("2010-06-30"));
    expect(actualAge).toBeGreaterThan(10);
});