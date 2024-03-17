import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), preact()],
	devToolbar: { enabled: false },
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'ca'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
