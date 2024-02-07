<script>
    import FlappyLetters from '$lib/components/animated-text/FlappyLetters.svelte'
</script>

<div class="wrapper">
    <h1>
        Let's make the web more
        <div>
            <FlappyLetters text="FUN" />
            and
            <FlappyLetters text="PLAYFUL" --color="#E63946" />
        </div>
        <div>together!</div>
    </h1>
</div>

<style>
    .wrapper {
        /* layout */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 65vh;

        /* font */
        font-size: 2rem;
        color: #48090F;
        text-align: center;
    }
</style>