module.exports = (code) => {
    if (typeof(code) === "string" || typeof(code) === "number") {
        return `<div class="code-line">${code}</div>` 
    }
    throw new TypeError("Please pass either a string or number value")
}