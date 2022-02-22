import { defineNuxtModule } from '@nuxt/kit'
import { join } from 'pathe'

export default defineNuxtModule({
	setup(options, nuxt) {
		nuxt.hook('autoImports:dirs', dirs => {
			dirs.push(join(nuxt.options.rootDir, 'store'))
		})
	}
})
