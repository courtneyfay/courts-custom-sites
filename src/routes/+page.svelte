<script>
    import NavBar from '$lib/components/NavBar.svelte'
    import Hero from '$lib/components/Hero.svelte'
    import About from '$lib/components/About.svelte'
    import Services from '$lib/components/Services.svelte'
    import ValueProp from '$lib/components/ValueProp.svelte'
    import Footer from '$lib/components/Footer.svelte'
  </script>

<NavBar />
<div class="page">
    <Hero />
    <About />
    <Services />
    <ValueProp />
    <Footer />
</div>

<style>
    /* css reset */
    :global(body) { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .page {
        color: #48090F;
        font-family: 'Goudy Bookletter 1911', serif;
        background-color: #FFF9EB;
        display: flex;
        flex-direction: column;
    }
</style>
