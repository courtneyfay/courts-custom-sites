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
        <div class="definition definition-1">
            <i class="fa-solid fa-briefcase icon" />
            <h2>
                Do you freelance <br />
                or own a small business <br />
                in Vermont?
            </h2>
        </div>

        <!-- Template website -->
        <div class="definition definition-2">
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
        <div class="definition definition-3">
            <i class="fa-solid fa-palette icon" />
            <h2>
                Do you crave <br />
                customization <br />
                of your website?
            </h2>
        </div>
    </div>

    <!-- FAQ section -->
    <div class="faq">
        <h2>I'm happy to help you build out your template site, but if you need something custom or a little 
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
            <a class="accent-color bouncing-text" target="_blank" href="https://calendly.com/courts-custom-sites/">
                <span class="one">L</span>
                <span class="two">e</span>
                <span class="three">t</span>
                <span class="four">'</span>
                <span class="five">s</span>
                <span>&nbsp;</span>
                <span class="six">c</span>
                <span class="seven">h</span>
                <span class="eight">a</span>
                <span class="nine">t</span>
                <span class="ten">!</span>
            </a>
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
        background-color: #E36414;
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

    /* animated CTA link */
    .bouncing-text {
        display: flex;
        justify-content: center;
        text-decoration: none;
        /* find a way to make this look like a button without underline */
    }

    @keyframes bounce {
        0%   { transform: translateY(0); }
        10%  { transform: translateY(0); }
        30%  { transform: translateY(-10px);}
        50%  { transform: translateY(0); }
        58%  { transform: translateY(-1px); } 
        65%  { transform: translateY(0);}
        100% { transform: translateY(0);}
    }

    .bouncing-text:hover .one  {
        animation: bounce 1s ease;
    }
    .bouncing-text:hover .two {
        animation: bounce 1s ease .1s;
    }
    .bouncing-text:hover .three {
        animation: bounce 1s ease .2s;
    }
    .bouncing-text:hover .four {
        animation: bounce 1s ease .3s;
    }
    .bouncing-text:hover .five {
        animation: bounce 1s ease .4s;
    }
    .bouncing-text:hover .six {
        animation: bounce 1s ease .5s;
    }
    .bouncing-text:hover .seven {
        animation: bounce 1s ease .6s;
    }
    .bouncing-text:hover .eight {
        animation: bounce 1s ease .7s;
    }
    .bouncing-text:hover .nine {
        animation: bounce 1s ease .8s;
    }
    .bouncing-text:hover .ten {
        animation: bounce 1s ease .9s;
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
