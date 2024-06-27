<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>
<div
	class="col flex-col-reverse self-center flex-1 md:flex-row md:self-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName},</MainTitle>
		<p class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>


	
	
	
	<img src="https://avatars.githubusercontent.com/u/139855911?v=4" alt="hero" class="w-200px h-200px md:w-300px md:h-300px rounded-lg" />
</div>

<a href="/photography">
	<h1 class="my-10">My photography</h1>
	
	<div class="row flex-1 justify-center items-center p-y-0px p-x-10px">
		<div class="rotate-5">
			<img src="https://res.cloudinary.com/krishnayahphotography/image/upload/DSCF9936_uckj5t" alt="hero" class="w-auto h-200px md:h-300px rounded-lg" />
		</div>	
		<div class="w-5">
	
		</div>
		<div class="-rotate-3" >
			<img src="https://res.cloudinary.com/krishnayahphotography/image/upload/DSCF9985_cu4qyr" alt="hero" class="w-200px h-auto md:w-300px md:h-300px rounded-lg" />
		</div>	
	
		<div class="w-5"/>
	
		<div class="rotate-5">
			<img src="https://res.cloudinary.com/krishnayahphotography/image/upload/v1719295624/42830031_usxjcx.jpg" alt="hero" class="w-auto h-200px md:h-300px rounded-lg" />
		</div>
	</div>
</a>
