const fs = require("fs")
const remark = require("remark")
const remarkPlantUML = require("../dist/index")

test("基础测试", () => {
  const raw = remark().parse(`
  \`\`\`plantuml
  @startuml
  A -> B: Hello / 你好'
  @enduml
  \`\`\`
  `)
  const example = JSON.parse(fs.readFileSync("./tests/examples/test.data.0.json"))
  const result = JSON.parse(JSON.stringify(remarkPlantUML({ markdownAST: raw }, { imageType: "svg" })))
  expect(result).toStrictEqual(example)
})

test("测试配置选项能否正常工作", () => {
  const raw = remark().parse(`
  \`\`\`plantuml
  @startuml
  A -> B: Hello / 你好'
  @enduml
  \`\`\`
  `)
  const example = JSON.parse(fs.readFileSync("./tests/examples/test.data.3.json"))
  const result = JSON.parse(JSON.stringify(remarkPlantUML({ markdownAST: raw }, { imageType: "png" })))
  expect(result).toStrictEqual(example)
})

test("测试默认配置选项", () => {
  const raw = remark().parse(`
  \`\`\`plantuml
  @startuml
  A -> B: Hello / 你好'
  @enduml
  \`\`\`
  `)
  const example = JSON.parse(fs.readFileSync("./tests/examples/test.data.0.json"))
  const result = JSON.parse(JSON.stringify(remarkPlantUML({ markdownAST: raw })))
  expect(result).toStrictEqual(example)
})
