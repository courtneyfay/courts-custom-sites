<script>
    import { onMount } from 'svelte'
    import { fade } from "svelte/transition"
    // component imports
    import NavBar from '$lib/components/NavBar.svelte'
    import CTAButton from '$lib/components/CTAButton.svelte'
    import Hero from '$lib/components/Hero.svelte'
    import About from '$lib/components/About.svelte'
    import Services from '$lib/components/Services.svelte'
  
    const year = new Date().getFullYear()
    let sites = [
        'Wix',
        'Weebly',
        'Squarespace',
        'WordPress',
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
    <About />
    <Services />
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
        color: #48090F;
        font-family: 'Goudy Bookletter 1911', serif;

        /* page layout */
        display: flex;
        flex-direction: column;

        background-color: #FFF9EB;
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
        .faq {
            /* font */
            font-size: 2.5rem;
        }
        .right-justified {
            /* layout */
            padding-top: 10%;
        }
        .social {
            /* layout */
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

</style>
