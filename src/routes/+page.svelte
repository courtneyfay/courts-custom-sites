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
        <div class="hero">
            <h2>
                Let's make the web more
                <div class="centered">
                    <span class="flap-wrapper">
                        <span class="flap" data-text="F">F</span>
                        <span class="flap" data-text="U">U</span>
                        <span class="flap" data-text="N">N</span>
                    </span>
                    and
                    <svg width="301" height="67" viewBox="0 0 301 67" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
                        <path class="mask" id="mask-P" d="M0.7 56.4C0.233333 49.5333 0 40.2667 0 28.6C0 16.8667 0.166667 9.26666 0.5 5.8C0.833334 3.66667 2.3 2.26666 4.9 1.6C7.5 0.866667 10.9333 0.5 15.2 0.5C21.4667 0.5 26.7333 1.86667 31 4.6C35.3333 7.26667 37.5 11.2333 37.5 16.5C37.5 20.8333 36.9 24.4667 35.7 27.4C34.5 30.2667 33 32.4 31.2 33.8C28.2667 36.0667 23.9333 37.2 18.2 37.2C15.7333 37.2 12.5 36.8667 8.5 36.2C8.83333 49.5333 8.96667 57.9333 8.9 61.4C8.83333 64.8667 7.66667 66.6 5.4 66.6C3.93333 66.6 3 66.3333 2.6 65.8C2.2 65.2667 1.93333 64.9 1.8 64.7C1.66667 64.4333 1.53333 64.0667 1.4 63.6C1.26667 63.1333 1.16667 62.7667 1.1 62.5C1.03333 62.1667 0.966667 61.7 0.900001 61.1C0.900001 60.5 0.866667 60.0333 0.8 59.7C0.733334 58.7 0.7 57.6 0.7 56.4ZM29.2 16.8C29.2 14.0667 27.7333 11.9333 24.8 10.4C21.8667 8.8 18.7333 8 15.4 8C12.0667 8 9.73333 8.3 8.4 8.9C8.13333 12.8333 8 16.4667 8 19.8C8 23.0667 8.13333 26.0333 8.4 28.7C10.2 28.9 11.4333 29.0667 12.1 29.2C13.8333 29.4 15.3 29.5 16.5 29.5C17.7667 29.5 18.6 29.5 19 29.5C19.4667 29.4333 20.3 29.3333 21.5 29.2C22.7667 29 23.6667 28.7 24.2 28.3C24.7333 27.9 25.4 27.3667 26.2 26.7C27 26.0333 27.5667 25.2667 27.9 24.4C28.7667 22 29.2 19.4667 29.2 16.8Z" fill="white"/>
                        <path class="mask" id="mask-L" d="M45.8445 52.7L45.9445 44.9L46.8445 3.1C46.8445 2.3 47.2779 1.66667 48.1445 1.2C49.0112 0.733332 50.1112 0.5 51.4445 0.5C54.6445 0.5 56.2445 1.63333 56.2445 3.9C56.2445 4.63333 55.8445 10.2333 55.0445 20.7C54.3112 31.1667 53.9445 37.4333 53.9445 39.5C53.9445 39.5 53.9445 43.0333 53.9445 50.1C53.9445 55.1 54.2779 57.8333 54.9445 58.3C55.9445 58.6333 57.1112 58.8 58.4445 58.8L72.8445 57.8C75.9779 57.8 77.5445 58.9333 77.5445 61.2C77.5445 63 76.6779 64.3333 74.9445 65.2C73.2779 66 71.6112 66.4667 69.9445 66.6C68.2779 66.6667 66.2445 66.7 63.8445 66.7C53.3779 66.7 47.7112 66.3667 46.8445 65.7C46.3779 65.3 46.1112 63.8 46.0445 61.2C45.9779 58.5333 45.9112 56.6667 45.8445 55.6C45.8445 54.5333 45.8445 53.5667 45.8445 52.7Z" fill="white"/>
                        <path class="mask" id="mask-A" d="M106.252 0.700012C107.918 0.700012 109.318 1.43335 110.452 2.90002C111.585 4.36668 113.052 7.40002 114.852 12C119.052 22.8667 123.152 39.9 127.152 63.1C127.218 63.3667 127.252 63.7667 127.252 64.3C127.252 64.7667 126.918 65.3 126.252 65.9C125.652 66.4334 124.752 66.7 123.552 66.7C122.418 66.7 121.452 66.4334 120.652 65.9C119.852 65.3 119.318 64.3667 119.052 63.1C118.785 61.7667 118.285 59.2 117.552 55.4C115.952 46.9334 114.885 42.5334 114.352 42.2C113.552 41.7333 110.885 41.2333 106.352 40.7C101.885 40.1667 98.9182 39.9 97.4516 39.9C95.9849 39.9 95.1182 40.0333 94.8516 40.3C93.6516 41.3667 92.0182 49.4667 89.9516 64.6C89.6849 65.8667 88.4182 66.5 86.1516 66.5C83.8849 66.5 82.7516 65.5334 82.7516 63.6C82.7516 58.8 84.5182 49.6334 88.0516 36.1C91.5849 22.5667 94.5182 13.6 96.8516 9.20002C99.7849 3.53335 102.918 0.700012 106.252 0.700012ZM105.852 11.8C104.852 11.8 103.118 14.7667 100.652 20.7C98.1849 26.5667 96.9516 30.2 96.9516 31.6C96.9516 31.9334 97.0182 32.1667 97.1516 32.3C97.6849 32.8333 99.7849 33.3 103.452 33.7C107.118 34.1 109.552 34.3 110.752 34.3C111.952 34.3 112.618 34.2334 112.752 34.1C112.885 33.9 112.952 33.3667 112.952 32.5C112.952 31.5667 112.052 27.9 110.252 21.5C108.452 15.0333 106.985 11.8 105.852 11.8Z" fill="white"/>
                        <path class="mask" id="mask-Y" d="M146.98 42.4L147.08 37.3C147.08 35.5667 146.513 33.8667 145.38 32.2C144.313 30.5333 141.68 25.7 137.48 17.7C133.28 9.7 131.18 5.2 131.18 4.2C131.18 3.13333 131.613 2.2 132.48 1.4C133.346 0.533334 134.18 0.0999985 134.98 0.0999985C135.846 0.0999985 136.846 0.866668 137.98 2.4C139.18 3.93333 141.48 7.96667 144.88 14.5C148.346 21.0333 150.346 24.6333 150.88 25.3C157.28 13.9667 162.413 5.96667 166.28 1.3C167.213 0.433332 167.946 0 168.48 0C169.08 0 169.513 0.0666692 169.78 0.200001C171.38 0.866667 172.18 1.76667 172.18 2.9C172.18 3.96667 171.913 4.9 171.38 5.7C170.846 6.5 169.38 8.6 166.98 12C163.446 16.9333 160.38 21.9333 157.78 27C155.246 32 153.98 35.0667 153.98 36.2V54.5L154.28 62.5C154.28 63.9667 153.88 65 153.08 65.6C152.28 66.1333 151.28 66.4 150.08 66.4C148.946 66.4 148.18 65.7667 147.78 64.5C147.38 63.2333 147.146 61.5667 147.08 59.5C147.013 57.4333 146.98 54.4 146.98 50.4V42.4Z" fill="white"/>
                        <path class="mask" id="mask-F" d="M194.418 1.8L205.518 1.59999C210.451 1.59999 212.918 2.89999 212.918 5.5C212.918 6.43333 212.785 7.09999 212.518 7.49999C212.251 7.83333 212.051 8.09999 211.918 8.3C211.785 8.49999 211.518 8.66666 211.118 8.8C210.318 9.06666 209.651 9.23333 209.118 9.29999C208.585 9.36666 208.218 9.39999 208.018 9.39999C207.285 9.53332 206.051 9.63332 204.318 9.69999C202.585 9.76666 200.051 9.79999 196.718 9.79999C193.451 9.79999 189.418 9.66666 184.618 9.39999V27.8H205.018C205.751 27.8 206.418 28.1333 207.018 28.8C207.685 29.4667 208.018 30.2 208.018 31C208.018 34.0667 206.718 35.6 204.118 35.6H184.618L185.018 61.8C185.018 65.2 183.851 66.9 181.518 66.9C179.251 66.9 177.918 65.3667 177.518 62.3C177.318 61.3 177.185 52.8333 177.118 36.9C177.118 20.9 177.051 11.7 176.918 9.29999C174.451 9.56666 173.218 8.16666 173.218 5.09999C173.218 4.29999 173.551 3.43333 174.218 2.49999C174.885 1.49999 175.451 0.96666 175.918 0.899994C176.451 0.833324 177.085 0.799988 177.818 0.799988C178.618 0.799988 180.518 0.933322 183.518 1.19999C187.651 1.59999 191.285 1.8 194.418 1.8Z" fill="white"/>
                        <path class="mask" id="mask-U" d="M254.218 1.6C255.151 0.533334 256.185 0 257.318 0C258.451 0 259.418 0.566666 260.218 1.7C261.351 7.5 261.918 14 261.918 21.2V28.8C261.918 34.5333 261.818 37.9333 261.618 39C261.418 40 261.218 41.1333 261.018 42.4C260.818 43.6667 260.618 44.6333 260.418 45.3C260.285 45.9667 260.051 46.8667 259.718 48C258.985 50.4667 257.951 52.6667 256.618 54.6C254.618 58.3333 251.985 61.2667 248.718 63.4C245.451 65.5333 242.118 66.6 238.718 66.6C235.385 66.6 231.918 65.1333 228.318 62.2C224.785 59.2667 221.885 55.6 219.618 51.2C216.151 44.4 214.418 36.5667 214.418 27.7C214.418 24.5667 214.885 17.1333 215.818 5.4C216.285 4.33333 216.985 3.4 217.918 2.6C218.918 1.73333 219.918 1.3 220.918 1.3C222.385 1.3 223.285 2.3 223.618 4.3C222.685 15.8333 222.218 23.1333 222.218 26.2C222.218 33.5333 223.651 40.0333 226.518 45.7C228.318 49.4333 230.518 52.5667 233.118 55.1C235.785 57.5667 238.385 58.8 240.918 58.8C245.118 58.8 248.718 55.5333 251.718 49C252.985 46.7333 253.685 43.1 253.818 38.1C253.818 36.7667 253.885 35.8333 254.018 35.3L254.218 22.1C254.218 15.9667 253.751 10.3667 252.818 5.3C252.818 3.9 253.285 2.66667 254.218 1.6Z" fill="white"/>
                        <path class="mask" id="mask-L2" d="M268.598 52.7L268.698 44.9L269.598 3.1C269.598 2.3 270.032 1.66667 270.898 1.2C271.765 0.733332 272.865 0.5 274.198 0.5C277.398 0.5 278.998 1.63333 278.998 3.9C278.998 4.63333 278.598 10.2333 277.798 20.7C277.065 31.1667 276.698 37.4333 276.698 39.5C276.698 39.5 276.698 43.0333 276.698 50.1C276.698 55.1 277.032 57.8333 277.698 58.3C278.698 58.6333 279.865 58.8 281.198 58.8L295.598 57.8C298.732 57.8 300.298 58.9333 300.298 61.2C300.298 63 299.432 64.3333 297.698 65.2C296.032 66 294.365 66.4667 292.698 66.6C291.032 66.6667 288.998 66.7 286.598 66.7C276.132 66.7 270.465 66.3667 269.598 65.7C269.132 65.3 268.865 63.8 268.798 61.2C268.732 58.5333 268.665 56.6667 268.598 55.6C268.598 54.5333 268.598 53.5667 268.598 52.7Z" fill="white"/>
                    </svg>
                </div>
                <div class="right-justify">together!</div>
            </h2>
        </div>
    </div>

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
            <h2>Hey there! I'm Court.</h2>
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
        <h2 class="bouncing-text-container">
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 60vh;

        /* font */
        font-family: 'Viaoda Libre', serif;
        font-size: 1.75rem;
    }

    .hero {
        padding-top: 3%;
        width: 95%;
        padding-left: 3%;
    }

    @keyframes flapLetter {
        80% {
            transform: scale(1.1, 1) skew(0deg, 5deg);
        }
        100% {
            transform: scale(1.1, 1) skew(0deg, 20deg);
        }
    }

    @keyframes flapShadow {
        80% {
            transform: rotateY(-10deg);
        }
        100% {
            transform: rotateY(-40deg);
        }
    }

    .flap-wrapper {
        color: #fff;
        font-family: sans-serif;
        font-weight: 700;
    }
    .flap {
        display: inline-block;
        position: relative;
        transform-style: preserve-3d;
        perspective: 500px;
        -webkit-font-smoothing: antialiased;
    }
    .flap::before, .flap::after {
        position: absolute;
        top: 0;
        left: -1px;
        transform-origin: left top;
        transition: all ease-out .3s;
        content: attr(data-text);
    }
    .flap::before {
        z-index: 1;
        color: rgba(0, 0, 0, .2);
        transform: scale(1.1, 1) skew(0deg, 20deg);
        animation: flapLetter 0.5s linear 0.75s;
    }
    .flap::after {
        z-index: 2;
        color: #5F0F40;
        text-shadow: -1px 0 1px #5F0F40, 1px 0 1px rgba(0, 0, 0, .8);
        transform: rotateY(-40deg);
        animation: flapShadow 0.5s linear 0.75s;
    }
    .flap:hover::before {
        transform: scale(1.1, 1) skew(0deg, 5deg);
    }
    .flap:hover::after {
        transform: rotateY(-10deg);
    }

    .right-justify {
        text-align: right;
        margin-right: 2%;
    }

    .mask {
        fill: none;
        stroke: #fff;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
    }

    @keyframes fillIn {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes erase {
        to {
            stroke-dashoffset: 1000;
            stroke-opacity: 0;
        }
    }

    #mask-P {
        animation: fillIn 5s linear 0.1s forwards;
    }
    #mask-L {
        animation: fillIn 5s linear 0.2s forwards;
    }
    #mask-A {
        animation: fillIn 5s linear 0.3s forwards;
    }
    #mask-Y {
        animation: fillIn 5s linear 0.4s forwards;
    }
    #mask-F {
        animation: fillIn 5s linear 0.5s forwards;
    }
    #mask-U {
        animation: fillIn 5s linear 0.6s forwards;
    }
    #mask-L2 {
        animation: fillIn 5s linear 0.7s forwards;
    }

    #mask-P:hover {
        animation: erase 2s ease reverse;
    }
    #mask-L:hover {
        animation: erase 2s ease reverse;
    }
    #mask-A:hover {
        animation: erase 2s ease reverse;
    }
    #mask-Y:hover {
        animation: erase 2s ease reverse;
    }
    #mask-F:hover {
        animation: erase 2s ease reverse;
    }
    #mask-U:hover {
        animation: erase 2s ease reverse;
    }
    #mask-L2:hover {
        animation: erase 2s ease reverse;
    }

    .accent-color {
        color: #FB8B24;
    }

    .logo {
        margin: 0;
        text-align: center;
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

     /* animated CTA link */
    .bouncing-text-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bouncing-text {
        display: flex;
        justify-content: center;
        text-decoration: none;
        border: 3px solid #E36414;
        border-radius: 5px;
        padding: 20px 40px;
    }

    @keyframes pulse-shadow
    {
        0% {
            box-shadow: 0 0 0 0 rgba(227, 100, 20,.4), 0 0 0 0 rgba(227, 100, 20,.4);
        }
        33% {
            box-shadow: 0 0 0 0 rgba(255,4,0,0), 0 0 0 10px rgba(227, 100, 20,.4);
        }
        66% {
            box-shadow: 0 0 0 0 rgba(255,4,0,0), 0 0 0 30px rgba(255,4,0,0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(227, 100, 20,.4), 0 0 10px rgba(255,4,0,0);
        }
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

    .bouncing-text:hover {
        animation: pulse-shadow 4s;
    }
    .bouncing-text:hover .one  {
        animation: bounce 1.5s ease;
    }
    .bouncing-text:hover .two {
        animation: bounce 1.5s ease .1s;
    }
    .bouncing-text:hover .three {
        animation: bounce 1.5s ease .2s;
    }
    .bouncing-text:hover .four {
        animation: bounce 1.5s ease .3s;
    }
    .bouncing-text:hover .five {
        animation: bounce 1.5s ease .4s;
    }
    .bouncing-text:hover .six {
        animation: bounce 1.5s ease .5s;
    }
    .bouncing-text:hover .seven {
        animation: bounce 1.5s ease .6s;
    }
    .bouncing-text:hover .eight {
        animation: bounce 1.5s ease .7s;
    }
    .bouncing-text:hover .nine {
        animation: bounce 1.5s ease .8s;
    }
    .bouncing-text:hover .ten {
        animation: bounce 1.5s ease .9s;
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
            min-height: 70vh;

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
