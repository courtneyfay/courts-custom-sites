<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import { onMount } from 'svelte'
    import { fade } from "svelte/transition"
  
    const year = new Date().getFullYear()
    let sites = [
        'Wix',
        'Weebly',
        'Squarespace',
        'Wordpress',
    ]
  
    let i = -1

    onMount(() => {
		const interval = setInterval(() => {
			i += 1
			i %= sites.length
		}, 1500);

		return () => {
			clearInterval(interval)
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

    <!-- Client section -->
    <div class="client">
        <!-- Local -->
        <div class="definition">
            <i class="fa-solid fa-briefcase icon" />
            <h2>
                Do you freelance <br />
                or own a small business <br />
                in Vermont?
            </h2>
        </div>

        <!-- Template website -->
        <div class="definition">
            <i class="fa-solid fa-copy icon" />
            <h2>
                Do you need a
                {#key i}
                    <div in:fade>
                        {sites[i] || sites[3]}
                    </div>
                {/key}
                website?
            </h2>
        </div>

        <!-- Custom website -->
        <div class="definition">
            <i class="fa-solid fa-palette icon" />
            <h2>
                Do you crave <br />
                customization <br />
                of your website?
            </h2>

            <!-- todo: animation -->

            <!-- todo: sound effect -->

            <!-- todo: something 3D -->
        </div>
    </div>

    <!-- About section -->
    <div class="about">
        <!-- Section 1 -->
        <div class="column">
            <h2>Hey there! I'm Court.</h2>
            <p>I've been working in tech for 8+ years, helping build enterprise websites for companies like IHS Markit, NextHealth Technologies and Wagmo. Feel free to check out my 
                <a class="accent-color" target="_blank" href="https://www.linkedin.com/in/courtneynoyes/">LinkedIn profile</a>
                for details.
            </p>
            <p>Recently, I've started helping local clients -- like a UX designer and a non-profit arts organization -- get their websites spun up.</p>
            <p>In my free time, I practice yoga, sing in a choir, craft, cook, play outside in the mountains, and have recently been getting into gardening.</p>
        </div>
    
        <!-- Section 2 -->
        <div class="column">
            <img class="headshot" src="/guitar-headshot.jpg" alt="Court playing the guitar"/>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <h2>
            <a class="accent-color" target="_blank" href="https://calendly.com/courts-custom-sites/">Let's chat!</a>
        </h2>
        <div class="social">
            <a target="_blank" href="https://www.linkedin.com/in/courtneynoyes/">
                <i class="fa-brands fa-linkedin" />
            </a>
            <!-- calc current year -->
            <p>© { year } Court's Custom Sites. Website by Courtney Noyes.</p>
        </div>
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

        /* background color */
        background-color: #5F0F40; 
        /* colors */
        /* #5F0F40 - deep purple */
        /* #9A031E - maroon */
        /* #E36414 - dark orange */
        /* #0F4C5C - turquoise */
        /* #FB8B24 - light yellow */
    }

    .header {
        /* layout */
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        min-height: 30vh;

        /* font */
        font-family: 'Viaoda Libre', serif;
        font-size: 1.75rem;
    }

    .accent-color {
        color: #FB8B24;
    }

    .logo {
        margin: 0;
    }

    .about {
        /* internal layout */
        display: flex;
        flex-direction: column;
        align-items: center;

        /* external layout */
        padding: 14% 0;

        /* font */
        font-size: 1rem;
    }

    .client {
        /* layout */
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 60vh;

        /* colors */
        background-color: white;
        color: #5F0F40;
    }

    .definition {
        /* layout */
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 3% 0;
        min-width: 500px;
        min-height: 500px;
        border-radius: 50%;

        /* style */
        background-color: #E36414;

        /* font */
        font-size: 1.5rem;
        text-align: center;
    }

    .icon {
        color: white;
        font-size: 4rem;
    }

    .column {
        text-align: center;
        max-width: 80vw;
    }

    .about {
        /* layout */
        min-height: 90vh;

        /* colors */
        background-color: #0F4C5C;

    }
    .about p {
        /* font */
        font-family: 'Hedvig Letters Sans', sans-serif;
    }

    .headshot {
        width: 75%;
    }

    .footer {
        /* layout */
        text-align: center;
        margin: 0 10%;

        /* font */
        font-size: 2rem;
    }

    .social {
        /* font */
        font-size: 1.5rem;
    }
    .social a {
        color: white;
    }

    /* styles for tablets, desktops, laptops and larger screens */
    @media (min-width: 768px) {
        .header {
            /* layout */
            max-height: 25vh;

            /* font */
            font-size: 3rem;
        }

        .help, .about {
            /* layout */
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            max-height: 75vh;
            padding: 0;

            /* font */
            font-size: 1.4rem;
        }

        .column {
            /* layout */
            min-width: 33vw;
            max-width: 23vw;
        }

        .social {
            /* layout */
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

</style>
