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
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'start/introduction' },
						{ label: 'Rules', slug: 'start/rules' },
						{ label: 'Joining', slug: 'start/joining' },
					],
				},
				{
					label: 'Minigames',
					items: [
						{ label: 'Overview', slug: 'minigames/overview' },
						{ label: 'Party System', slug: 'minigames/party-system' },
						{
							label: 'Guides',
							collapsed: true,
							autogenerate: { directory: 'minigames/Guides' },
						},
					],
				},
				{
					label: 'Survival',
					items: [
						{ label: 'Overview', slug: 'survival/overview' },
						{ label: 'Custom Additions', slug: 'survival/server-additions' },
						{ label: 'Polydex (Recipe Viewer)', slug: 'survival/polydex' },
						{
							label: 'Claiming',
							autogenerate: { directory: 'survival/Claiming' },
						},
						{
							label: 'Guides',
							collapsed: true,
							autogenerate: { directory: 'survival/Guides' },
						},
					],
				},
				{
					label: 'Modding',
					autogenerate: { directory: 'modding' },
				},
			],
		}),
	],
	redirects: {
		"/discord": "https://discord.gg/YXYtac2y2D",
		"/facebook": "https://www.facebook.com/qutmc/",
		"/instagram": "https://www.instagram.com/qutminecraft/",
		"/twitch": "https://www.twitch.tv/qutminecraft",
		"/modrinth": "https://modrinth.com/user/qutminecraftclub",
		"/github": "https://github.com/QUT-MC-Club"
	}
});
