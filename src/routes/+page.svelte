<script>
    // component imports
    import NavBar from '$lib/components/NavBar.svelte'
    import CTAButton from '$lib/components/CTAButton.svelte'
    import Hero from '$lib/components/Hero.svelte'
    import About from '$lib/components/About.svelte'
    import Services from '$lib/components/Services.svelte'
    import ValueProp from '$lib/components/ValueProp.svelte'
  
    const year = new Date().getFullYear()
  </script>

<NavBar />
<div class="page">
    <Hero />
    <About />
    <Services />
    <ValueProp />

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
        .social {
            /* layout */
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

</style>
