import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consulta https://kit.svelte.dev/docs/integrations#preprocessors
	// para más información acerca de los preprocesadores
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto solo soporta algunos entornos, consulta https://kit.svelte.dev/docs/adapter-auto para ver una lista.
		// Si tu entorno no está soportado o has decidido usar un entorno específico, cambia el adaptador.
		// Consulta https://kit.svelte.dev/docs/adapters para más información acerca de los adaptadores.
		adapter: adapter()
	}
};

export default config;
