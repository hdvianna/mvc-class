export default (function () {
    const result = {
        required: [],
        invalid: [],
        violations: [],
        success: false
    };
    return {
        addRequired(field) {
            result.required.push(field)
            return this;
        },
        addInvalid(field) {
            result.invalid.push(field);
            return this;
        },
        addViolation(violation) {
            result.violations.push(violation);
            return this;
        },
        success() {
            return result.required.length === 0 && result.invalid.length === 0 && result.violations.length === 0
        },
        async build() {
            result.success = this.success();
            return result;
        }
    }
});