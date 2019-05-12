const fs = require('fs')
const path = require('path')

module.exports = {
  getJsonFile: filePath => {
    // 读取指定json文件
    const json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8')
    // 解析并返回
    return JSON.parse(json)
  }
  // eslint-disable-next-line eol-last
}
