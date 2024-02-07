<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import { onMount } from 'svelte'
    import { fade } from "svelte/transition"
    // component imports
    import NavBar from '$lib/components/NavBar.svelte'
    import CTAButton from '$lib/components/CTAButton.svelte'
    import Hero from '$lib/components/Hero.svelte'
  
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

<NavBar />
<div class="page">
    <Hero />
    
    <!-- Client section -->
    <div class="client">
        <div class="definition definition-1">
            <i class="fa-solid fa-palette icon" />
            <h2>
                Are you a <br />
                designer <br />
                or creative? <br />
            </h2>
        </div>
        <div class="definition definition-2">
            <i class="fa-solid fa-wand-sparkles icon" />
            <h2>
                Do you value <br/>
                bespoke marketing?
            </h2>
        </div>
        <div class="definition definition-3">
            <i class="fa-solid fa-cube icon" />
            <h2>
                Do you crave animations, <br />
                sound effects, <br />
                or 3D on your site?
            </h2>
        </div>
    </div>

    <!-- FAQ section -->
    <div class="faq">
        <h2>I'm happy to help you build out your
            <span class="centered">
                {#key i}
                    <div in:fade>
                        {sites[i] || sites[3]}
                    </div>
                {/key}
            </span>
            site, but if you need something custom or a little 
            <p class="weird">
                w
                <span class="spin-to-the-left">e</span>
                <span class="spin-upside-down">i</span>
                <span class="spin-to-the-right">r</span>
                <span class="slide-down">d,</span>
            </p>
            <span class="right-justified">I would <span class="italic">love</span> to help you build that.</span>
        </h2>
    </div>

    <!-- About section -->
    <div class="about">
        <!-- Section 1 -->
        <div class="column">
            <h2>Hello beautiful people! I'm Court.</h2>
            <p>I've been working in tech for 8+ years, helping build enterprise websites for companies like IHS Markit, NextHealth Technologies and Wagmo. Feel free to check out my 
                <a class="accent-color" target="_blank" href="https://www.linkedin.com/in/courtneynoyes/">LinkedIn profile</a>
                for details.
            </p>
            <p>Now I'm helping local clients -- like a UX designer and a non-profit arts organization -- get their websites spun up.</p>
            <p>In my free time, I practice yoga, sing in a choir, craft, cook, play outside in the mountains, and have recently been getting into gardening.</p>
        </div>
    
        <!-- Section 2 -->
        <div class="column">
            <img class="headshot" src="/guitar-headshot.jpg" alt="Court playing the guitar"/>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <CTAButton />
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

        background-color: #FFF9EB;
    }

    .accent-color {
        color: #FB8B24;
    }

    .client {
        /* layout */
        display: flex;
        flex-direction: column;
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
        margin: 4% 0;

        /* style */
        background-image: radial-gradient(
            farthest-corner,
            #E36414, #5F0F40
        );
        /* background-color: #E36414; */
        min-width: 300px;
        min-height: 300px;
        border-radius: 50%;

        /* font */
        font-size: 1rem;
        text-align: center;
    }
    .icon {
        color: white;
        font-size: 2rem;
    }

    .faq {
        /* layout */
        padding: 5% 10%;
        min-height: 50vh;

        /* styles */
        background-color: #9A031E;

        /* font */
        font-size: 1.5rem;
    }
    .weird {
        /* font */
        text-align: center;
        font-size: 4rem;
        letter-spacing: 5px;
    }
    .spin-to-the-left {
        display: inline-block;
        transform: translateY(25%) rotateZ(310deg);
    }
    .spin-upside-down {
        display: inline-block;
        transform: translateY(50%) rotateZ(180deg);
    }
    .spin-to-the-right {
        display: inline-block;
        transform: translateY(75%) rotateZ(70deg);
    }
    .slide-down {
        display: inline-block;
        transform: translateY(100%);
    }
    .centered {
        text-align: center;
    }
    .right-justified {
        display: block;
        text-align: right;
        padding-top: 15%;
    }
    .italic {
        font-style: italic;
    }

    .about {
        /* internal layout */
        display: flex;
        flex-direction: column;
        align-items: center;
        
        /* external layout */
        min-height: 90vh;
        padding: 14% 0;

        /* colors */
        background-color: #0F4C5C;

        /* font */
        font-size: 1rem;
    }
    .about p {
        /* font */
        font-family: 'Hedvig Letters Sans', sans-serif;
    }
    .column {
        text-align: center;
        max-width: 80vw;
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
        .client {
            /* layout */
            position: relative;
            min-height: 175vh;
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
        .definition-1 {
            position: absolute;
            left: 15%;
            top: 3%;
        }
        .definition-2 {
            position: absolute;
            right: 10%;
            top: 30%;
        }
        .definition-3 {
            position: absolute;
            left: 22.5%;
            bottom: 5%;
        }
        .icon {
            font-size: 4rem;
        }

        .faq {
            /* font */
            font-size: 2.5rem;
        }
        .right-justified {
            /* layout */
            padding-top: 10%;
        }

        .client, .about {
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
