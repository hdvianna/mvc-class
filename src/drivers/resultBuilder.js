export default (function () {
    const result = {
        required: [],
        invalid: [],
        success: false
    };
    return {
        addRequired(field) {
            result.required.push(field)
            return this;
        },
        addInvalid() {
            result.invalid.push(field);
            return this;
        },
        build(success) {
            result.success = success;
            return result;
        }
    }
});