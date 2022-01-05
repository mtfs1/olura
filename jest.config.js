module.exports = {
    roots: ["<rootDir>/test"],
    coverageDirectory: "coverage",
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest"
    },
}