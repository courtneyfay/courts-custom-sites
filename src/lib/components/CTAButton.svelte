<script></script>

<h2 class="bouncing-text-container">
    <a class="bouncing-text" target="_blank" href="https://calendly.com/courts-custom-sites/">
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

<style>
    .bouncing-text-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bouncing-text {
        font-family: 'Goudy Bookletter 1911', serif;
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: #FFF9EB;
        background-color: #9A031E;
        border: 3px solid #9A031E;
        border-radius: 5px;
        padding: 10px 20px;
    }

    @keyframes pulse-shadow
    {
        0% {
            box-shadow: 0 0 0 0 rgba(154, 3, 30, .5), 0 0 0 0 rgba(154, 3, 30, .5);
        }
        33% {
            box-shadow: 0 0 0 0 rgba(255,4,0,0), 0 0 0 10px rgba(154, 3, 30, .5);
        }
        66% {
            box-shadow: 0 0 0 0 rgba(255,4,0,0), 0 0 0 30px rgba(255,4,0,0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(154, 3, 30, .5), 0 0 10px rgba(255,4,0,0);
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
</style>