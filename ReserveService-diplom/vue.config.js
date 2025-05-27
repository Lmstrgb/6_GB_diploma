// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   publicPath: '/6_GB_diploma/',
//   transpileDependencies: true
// })

//Этот был рабочий если адрес нужен https://lmstrgb.github.io/6_GB_diploma/
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/6_GB_diploma/'
//     : '/',
//   transpileDependencies: true
// })

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/6_GB_diploma/ReserveService/',  // Фиксированный путь
  outputDir: 'dist/ReserveService',             // Папка для сборки
  transpileDependencies: true
})