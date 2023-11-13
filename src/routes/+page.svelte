<script>
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import { onMount } from 'svelte';
    import { fade } from "svelte/transition";
  
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
        <h1 class="logo">
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
        <h2><a class="accent-color" target="_blank" href="https://calendly.com/courts-custom-sites/">Let's chat!</a></h2>
    </div>
</div>

<style>
    /* css reset */
    :global(body) { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* styles for mobile screens */
    .page {
        /* font */
        color: #FFEDF0;
        font-family: 'Goudy Bookletter 1911', serif;

        /* page layout */
        display: flex;
        flex-direction: column;
        max-height: 100vh;

        /* background color */
        background-color: #5F0F40; /* #5F0F40 - deep purple */
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
        text-align: center;
        min-height: 27vh;

        /* font */
        font-family: 'Viaoda Libre', serif;
        font-size: 1.75rem;
    }

    .logo {
        margin: 0;
    }

    .main {
        /* layout */
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 53vh;

        /* font */
        font-size: 1rem;
    }

    .column {
        text-align: center;
        max-width: 80vw;
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

    /* styles for tablets, desktops, laptops and larger screens */
    @media (min-width: 768px) {
        .header {
            /* layout */
            max-height: 25vh;

            /* font */
            font-size: 3rem;
        }

        .main {
            /* layout */
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            max-height: 55vh;

            /* font */
            font-size: 1.4rem;
        }

        .column {
            /* layout */
            min-width: 33vw;
            max-width: 23vw;
        }

        .footer {
            /* layout */
            max-height: 20vh;
        }
    }

</style>
