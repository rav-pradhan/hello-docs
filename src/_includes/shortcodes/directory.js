module.exports = (tree) => {
    let output = []
    const branches = tree.split("\n")
    branches.forEach((branch, i) => {
        // check if string is just whitespace
        if (isNotAnEmptyString(branch)) {
            if (branch.match(/^[^\s]+(\s+[^\s]+)*$/) === null) {
                output.push(`├─ ${branch.trim().split("- ")[1]}`)
            } else {
                output.push(`${branch.split("- ")[1]}`)
            }
        }

    })
    return output.join("\n")
}

function isNotAnEmptyString(string) {
    return string.match(/^\s*$/) === null
}