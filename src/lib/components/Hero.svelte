<script>
    import FlappyLetters from '$lib/components/animated-text/FlappyLetters.svelte'
</script>

<div class="wrapper">
    <h1>
        Let's make the web more
        <div>
            <FlappyLetters text="FUN" /> <br class="responsive"/>
            and <br class="responsive"/>
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
        padding: 25% 6% 5%;

        /* font */
        font-size: 1.5rem;
        color: #48090F;
        text-align: center;
    }

    .responsive {
        display: inline;
    }

    /* Tablet screens and up */
    @media only screen and (min-width: 768px) {
        .wrapper {
            padding-top: 16%;
        }
    } 

    /* Laptop screens and up */
    @media only screen and (min-width: 1224px) {
        .wrapper {
            font-size: 2rem;
            padding-top: 8%;
            padding-bottom: 4%;
        }
        .responsive {
            display: none;
        }
    } 
</style>