exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    imageType: Joi.string()
      .default("svg")
      .description("Type of PlantUML image returned from Web Server."),
    server: Joi.string()
      .default("https://www.plantuml.com/plantuml")
      .description("PlantUML server to generate UML diagrams on-the-fly."),
  })
}