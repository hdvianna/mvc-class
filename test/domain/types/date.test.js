import dateModule from '../../../src/domain/types/date';
import chance from 'chance';

test('Given any string when creating a date then the result contains a property isValid', () => {
    let date = dateModule(chance().word());
    expect(date).toHaveProperty("isValid");
});

test('Given an invalid date string when creating a date then the result contains a property isValid equals to false', () => {
    let date = dateModule(chance().word());
    expect(date).toHaveProperty("isValid", false);
});

test('Given a valid date string when creating a date then the result contains a property isValid equals to true', () => {
    let date = dateModule(chance().date({string: true}));
    expect(date).toHaveProperty("isValid", true);
});

test('Given a valid date string when creating a date then the result contains a property date', () => {
    let date = dateModule(chance().date({string: true}));
    expect(date).toHaveProperty("value");
});

test('Given a valid date string when creating a date then the result contains a property date with the date equals to the base date', () => {
    let dateString = chance().date({string: true});
    let date = dateModule(dateString);
    let expectedDate = new Date(dateString);
    expect(date).toHaveProperty("value", expectedDate);
});

test('Given any string when creating a date then the result contains a property isEmpty', () => {
    let date = dateModule(chance().word());
    expect(date).toHaveProperty("isEmpty");
});

test('Given any string when creating a date then the result contains a property isEmpty with false', () => {
    let date = dateModule(chance().word());
    expect(date).toHaveProperty("isEmpty", false);
});

test('Given undefined when creating a date then the result contains a property isEmpty with true', () => {
    let date = dateModule(undefined);
    expect(date).toHaveProperty("isEmpty", true);
});

test('Given empty string when creating a date then the result contains a property isEmpty with true', () => {
    let date = dateModule("");
    expect(date).toHaveProperty("isEmpty", true);
});

test('Given null when creating a date then the result contains a property isEmpty with true', () => {
    let date = dateModule(null);
    expect(date).toHaveProperty("isEmpty", true);
});

test('Given 0 as string when creating a date then the result contains a property isEmpty with false', () => {
    let date = dateModule("0");
    expect(date).toHaveProperty("isEmpty", false);
});

test('Given space as string when creating a date then the result contains a property isEmpty with true', () => {
    let date = dateModule(" ");
    expect(date).toHaveProperty("isEmpty", true);
});