<script>
	import Gallery from '$lib/components/Gallery.svelte';
    import Card from '$lib/components/Card/Card.svelte'
    import CardTitle from '$lib/components/Card/CardTitle.svelte';

    function handleClick(e) {
		// e.target is the image that was clicked
        console.log('Clicked on', e.target.src);
	}

    // get all images from cloudinary
    import { onMount } from 'svelte';

    let images = [];

    onMount(async () => {
        const response = await fetch('https://res.cloudinary.com/krishnayahphotography/image/list/portfolio.json');
        const data = await response.json();
        console.log(data)
        // url format https://res.cloudinary.com/krishnayahphotography/image/upload/${id}
        images = data.resources.map(resource => {
            const imageUrl = 'https://res.cloudinary.com/krishnayahphotography/image/upload/' + resource.public_id;
            const caption = resource.context && resource.context.custom && resource.context.custom.caption;
            const description = resource.context && resource.context.custom && resource.context.custom.alt;
            return { url: imageUrl, caption, description };
        });
        console.log(images);

    });




</script>


<Gallery>
    {#each images as image}
<img src={image.url} alt={image.description} title={image.caption}/>
{image.caption}    
{/each}
</Gallery>
