// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'QUT MC Club',
			social: {
				discord: 'https://github.com/withastro/starlight',
				github: 'https://github.com/withastro/starlight',
			},
			components: {
				Hero: './src/components/Hero.astro',
			},
			expressiveCode: {
				styleOverrides: { borderRadius: '0.5rem' },
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	redirects: {
		"/discord": "https://discord.gg/YXYtac2y2D",
		"/facebook": "https://www.facebook.com/qutmc/",
		"/instagram": "https://www.instagram.com/qutminecraft/",
		"/twitch": "https://discord.gg/YXYtac2y2D",
		"/modrinth": "https://discord.gg/YXYtac2y2D",
		"/github": "https://discord.gg/YXYtac2y2D"
	}
});
