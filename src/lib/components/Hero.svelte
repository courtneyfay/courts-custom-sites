<script>
    import FlappyLetters from '$lib/components/animated-text/FlappyLetters.svelte'
    import OutliningPlayful from  '$lib/components/animated-text/OutliningPlayful.svelte'
</script>

<div class="wrapper">
    <h1>
        Let's make the web more
        <div>
            <FlappyLetters text="FUN" />
            and
            <OutliningPlayful />
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