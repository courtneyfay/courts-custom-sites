<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

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
	})
</script>

<div class="faq">
    <h2 class="centered">I'm happy to help you build out your <br />
        <span>
            {#key i}
                <span in:fade>
                    {sites[i] || sites[3]}
                </span>
            {/key}
        </span>
        site, <br />
        but if you need something custom or a little 
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

<style>
    .faq {
        padding: 5% 10%;
        min-height: 50vh;
        background-color: #E63946;
        font-size: 2.5rem;
    }
    .weird {
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
        padding-top: 10%;
    }
    .italic {
        font-style: italic;
    }
</style>