import { defineNuxtModule } from '@nuxt/kit'
import { join } from 'pathe'

export default defineNuxtModule({
	meta: {
		compatibility: {
			nuxt: '^3.0.0'
		}
	},
	setup(options, nuxt) {
		nuxt.hook('autoImports:dirs', dirs => {
			dirs.push(join(nuxt.options.rootDir, 'store'))
		})
	}
})
