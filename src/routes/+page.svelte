<script>
    import { onMount } from 'svelte';
    import { fly, fade } from "svelte/transition";
  
    let sites = [
        'Wix',
        'Weebly',
        'Squarespace',
        'Wordpress',
    ];
  
    let i = -1;

    onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= sites.length;
		}, 4500);

		return () => {
			clearInterval(interval);
		};
	});
  </script>

<div class="page">
    <!-- Header -->
    <div class="header">
        <h1>
            <span class="accent-color">&#123;</span>
            <span>Court's Custom Sites</span>
            <span class="accent-color">&#125;</span>
        </h1>
    </div>

    <div class="main">
        <!-- Section 1 -->
        <div class="column">
            <i class="fa-solid fa-briefcase" />
            <h2>Do you freelance or own a small business in Vermont?</h2>
        </div>

        <!-- Section 2 -->
        <div class="column">

            <i class="fa-solid fa-palette" />
            <h2>Do you crave a more custom style or functionality for your</h2>

            <!-- alternative transitions: typewriter per https://learn.svelte.dev/tutorial/key-blocks -->
            {#key i}
                    <h2>
                        <h2 in:fade>
                            {sites[i] || sites[3]}
                        </h2>
                    </h2>
            {/key}

            <h2>website?</h2>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <h2><a class="accent-color" href="mailto:fay.courtney@gmail.com">Let's chat!</a></h2>
    </div>
</div>

<style>
    /* css reset */
    :global(body) { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .page {
        /* font */
        color: #FFEDF0;
        font-family: 'Goudy Bookletter 1911', serif;

        /* page layout */
        display: flex;
        flex-direction: column;

        /* background color */
        background-color: #5F0F40;
        /* other colors */
        /* #9A031E - maroon */
        /* #E36414 - dark orange */
        /* #0F4C5C - turquoise */
    }

    .header {
        /* layout */
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 25vh;

        /* font */
        font-family: 'Viaoda Libre', serif;
        font-size: 3rem;
    }

    .main {
        /* layout */
        display: flex;
        align-items: center;
        justify-content: space-around;
        min-height: 55vh;

        /* font */
        font-size: 1.4rem;
    }

    .column {
        text-align: center;
        min-width: 33vw;
        max-width: 23vw;
    }

    .footer {
        /* layout */
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 20vh;

        /* font */
        font-size: 2rem;
    }

    .accent-color {
        color: #FB8B24;
    }
</style>
