// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/bootstrap.min.css', '~/assets/css/styles.css'],
  devtools: { enabled: true },
	// postcss: {
	// 	plugins: {
	// 		tailwindcss: {},
	// 		autoprefixer: {},
	// 	},
	// },
	typescript: {
		strict: true,
	},
})
