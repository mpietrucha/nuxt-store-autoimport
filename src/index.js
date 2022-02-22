import { defineNuxtModule } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
	setup(options, nuxt) {
		nuxt.hook('autoImports:dirs', dirs => {
			dirs.push(resolve(__dirname, './../store'))
		})
	}
})
