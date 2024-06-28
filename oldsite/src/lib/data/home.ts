import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'jordan\'s coffee shop';

export const name = 'Jordan';

export const lastName = 'Krishnayah';

export const description =
	'Hey! I\'m Jordan, a high school senior from Queens, NY. I\'m a maker at heart, and you\'ll find me tinkering around with software, guitars, and editing software. ';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/jordankrishnayah'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'riadh_adrani@hotmail.fr'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
