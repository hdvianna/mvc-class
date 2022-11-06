import MinimuAgeSpecification from "../../../src/domain/specifications/MinimuAgeSpecification";
import Driver from "../../../src/domain/entities/Driver";
import dateModule from "../../../src/domain/types/date";
import chance from 'chance';

test('Given the base date 2022-11-01 and minium age 18 and the birthdate 2004-11-01 then birthdate is valid', () => {
    const minimuAgeSpecification = new MinimuAgeSpecification(new Date("2022-11-01"), 18);
    const driver = new Driver(chance().name(), dateModule("2004-11-01"), chance().integer());
    const isSpecifiedBy = minimuAgeSpecification.isSpecifiedBy(driver);
    expect(isSpecifiedBy).toBe(true);
});

test('Given the base date 2022-11-01 and minium age 18 and the birthdate 2004-11-02 then birthdate is valid', () => {
    const minimuAgeSpecification = new MinimuAgeSpecification(new Date("2022-11-01"), 18);
    const driver = new Driver(chance().name(), dateModule("2004-11-02"), chance().integer());
    const isSpecifiedBy = minimuAgeSpecification.isSpecifiedBy(driver);
    expect(isSpecifiedBy).toBe(false);
});

test('Given the base date 2022-11-01 and minium age 18 and the birthdate 2004-10-31 then birthdate is valid', () => {
    const minimuAgeSpecification = new MinimuAgeSpecification(new Date("2022-11-01"), 18);
    const driver = new Driver(chance().name(), dateModule("2004-10-31"), chance().integer());
    const isSpecifiedBy = minimuAgeSpecification.isSpecifiedBy(driver);
    expect(isSpecifiedBy).toBe(true);
});