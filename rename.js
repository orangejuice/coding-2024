import fs from "fs"
import path from "path"

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

function convertFilenamesInDir(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}:`, err)
      return
    }

    files.forEach(file => {
      const fullPath = path.join(dir, file)
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats for file ${fullPath}:`, err)
          return
        }

        if (stats.isDirectory()) {
          convertFilenamesInDir(fullPath)
        } else if (stats.isFile() && path.extname(fullPath) === ".js") {
          const dirName = path.dirname(fullPath)
          if (dirName.includes("node_modules")) return
          const baseName = path.basename(fullPath)
          const kebabCaseName = camelToKebab(baseName)

          if (baseName !== kebabCaseName) {
            const newFullPath = path.join(dirName, kebabCaseName)
            console.log(fullPath, "->", newFullPath)
            fs.rename(fullPath, newFullPath, err => {
              if (err) {
                console.error(`Error renaming file ${fullPath} to ${newFullPath}:`, err)
              } else {
                console.log(`Renamed ${fullPath} to ${newFullPath}`)
              }
            })
          }
        }
      })
    })
  })
}

convertFilenamesInDir(".")
