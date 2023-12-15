const fs = require('fs')

const packageJsonPath = "package.json"
const packageJsonFile = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

for(const dependency in packageJsonFile.dependencies){
    packageJsonFile.dependencies[dependency] = "latest"
}
const packageJsonFileModified = JSON.stringify(packageJsonFile)
fs.writeFileSync(packageJsonPath, packageJsonFileModified, 'utf-8')