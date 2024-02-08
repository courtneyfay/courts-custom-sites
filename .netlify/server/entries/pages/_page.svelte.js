import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from "../../chunks/ssr.js";
const CTAButton_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".bouncing-text-container.svelte-is6qf0.svelte-is6qf0{display:flex;align-items:center;justify-content:center}.bouncing-text.svelte-is6qf0.svelte-is6qf0{font-family:'Goudy Bookletter 1911', serif;display:flex;justify-content:center;text-decoration:none;color:#FFF9EB;background-color:#9A031E;border:3px solid #9A031E;border-radius:5px;padding:10px 20px}@keyframes svelte-is6qf0-pulse-shadow{0%{box-shadow:0 0 0 0 rgba(154, 3, 30, .5), 0 0 0 0 rgba(154, 3, 30, .5)}33%{box-shadow:0 0 0 0 rgba(255,4,0,0), 0 0 0 10px rgba(154, 3, 30, .5)}66%{box-shadow:0 0 0 0 rgba(255,4,0,0), 0 0 0 30px rgba(255,4,0,0)}100%{box-shadow:0 0 0 0 rgba(154, 3, 30, .5), 0 0 10px rgba(255,4,0,0)}}@keyframes svelte-is6qf0-bounce{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-10px)}50%{transform:translateY(0)}58%{transform:translateY(-1px)}65%{transform:translateY(0)}100%{transform:translateY(0)}}.bouncing-text.svelte-is6qf0.svelte-is6qf0:hover{animation:svelte-is6qf0-pulse-shadow 4s}.bouncing-text.svelte-is6qf0:hover .one.svelte-is6qf0{animation:svelte-is6qf0-bounce 1.5s ease}.bouncing-text.svelte-is6qf0:hover .two.svelte-is6qf0{animation:svelte-is6qf0-bounce 1.5s ease .1s}.bouncing-text.svelte-is6qf0:hover .three.svelte-is6qf0{animation:svelte-is6qf0-bounce 1.5s ease .2s}.bouncing-text.svelte-is6qf0:hover .four.svelte-is6qf0{animation:svelte-is6qf0-bounce 1.5s ease .3s}.bouncing-text.svelte-is6qf0:hover .five.svelte-is6qf0{animation:svelte-is6qf0-bounce 1.5s ease .4s}.bouncing-text.svelte-is6qf0:hover .six.svelte-is6qf0{animation:svelte-is6qf0-bounce 1.5s ease .5s}.bouncing-text.svelte-is6qf0:hover .seven.svelte-is6qf0{animation:svelte-is6qf0-bounce 1.5s ease .6s}.bouncing-text.svelte-is6qf0:hover .eight.svelte-is6qf0{animation:svelte-is6qf0-bounce 1.5s ease .7s}.bouncing-text.svelte-is6qf0:hover .nine.svelte-is6qf0{animation:svelte-is6qf0-bounce 1.5s ease .8s}.bouncing-text.svelte-is6qf0:hover .ten.svelte-is6qf0{animation:svelte-is6qf0-bounce 1.5s ease .9s}",
  map: null
};
const CTAButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<h2 class="bouncing-text-container svelte-is6qf0" data-svelte-h="svelte-1vu5cr5"><a class="bouncing-text svelte-is6qf0" target="_blank" href="https://calendly.com/courts-custom-sites/"><span class="one svelte-is6qf0">L</span> <span class="two svelte-is6qf0">e</span> <span class="three svelte-is6qf0">t</span> <span class="four svelte-is6qf0">&#39;</span> <span class="five svelte-is6qf0">s</span> <span> </span> <span class="six svelte-is6qf0">c</span> <span class="seven svelte-is6qf0">h</span> <span class="eight svelte-is6qf0">a</span> <span class="nine svelte-is6qf0">t</span> <span class="ten svelte-is6qf0">!</span></a> </h2>`;
});
const NavBar_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".nav-bar.svelte-lst2tc{z-index:3;background-color:#FFF9EB;display:flex;justify-content:space-between;flex-direction:row;align-items:center;position:fixed;top:0;width:100%}.logo-wrapper.svelte-lst2tc{width:150px;padding:1.25% 0 1.25% 1.75%}.cta-button-wrapper.svelte-lst2tc{padding-right:2%}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="nav-bar svelte-lst2tc"><div class="logo-wrapper svelte-lst2tc" data-svelte-h="svelte-2blvbm"><img src="/logo.svg" alt="court's custom sites logo"></div> <div class="cta-button-wrapper svelte-lst2tc">${validate_component(CTAButton, "CTAButton").$$render($$result, {}, {}, {})}</div> </div>`;
});
const FlappyLetters_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: '@keyframes svelte-1xthkxx-flapLetter{80%{transform:scale(1.1, 1) skew(0deg, 5deg)}100%{transform:scale(1.1, 1) skew(0deg, 20deg)}}@keyframes svelte-1xthkxx-flapShadow{80%{transform:rotateY(-10deg)}100%{transform:rotateY(-40deg)}}.flap-wrapper.svelte-1xthkxx{font-family:"Hedvig Letters Sans", sans serif;font-weight:700;font-size:4.5rem}.flap.svelte-1xthkxx{display:inline-block;position:relative;transform-style:preserve-3d;perspective:500px;-webkit-font-smoothing:antialiased}.flap.svelte-1xthkxx::before,.flap.svelte-1xthkxx::after{position:absolute;top:0;left:-1px;transform-origin:left top;transition:all ease-out .3s;content:attr(data-text)}.flap.svelte-1xthkxx::before{z-index:1;color:rgba(0, 0, 0, .2);transform:scale(1.1, 1) skew(0deg, 20deg);animation:svelte-1xthkxx-flapLetter 0.5s linear 0.75s}.flap.svelte-1xthkxx::after{z-index:2;color:var(--color, #3AB8A9);text-shadow:-1px 0 1px var(--color, #3AB8A9), 1px 0 1px rgba(0, 0, 0, .8);transform:rotateY(-40deg);animation:svelte-1xthkxx-flapShadow 0.5s linear 0.75s}.flap.svelte-1xthkxx:hover::before{transform:scale(1.1, 1) skew(0deg, 5deg)}.flap.svelte-1xthkxx:hover::after{transform:rotateY(-10deg)}@media only screen and (min-width: 992px){.flap-wrapper.svelte-1xthkxx{font-size:5.5rem}}',
  map: null
};
const FlappyLetters = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$6);
  return `<span class="flap-wrapper svelte-1xthkxx">${each(text, (letter) => {
    return `<span class="flap svelte-1xthkxx"${add_attribute("data-text", letter, 0)}>${escape(letter)} </span>`;
  })} </span>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".wrapper.svelte-ttgdml{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:25% 6% 5%;font-size:1.5rem;color:#48090F;text-align:center}.responsive.svelte-ttgdml{display:inline}@media only screen and (min-width: 768px){.wrapper.svelte-ttgdml{padding-top:16%}}@media only screen and (min-width: 992px){.wrapper.svelte-ttgdml{font-size:2rem;padding-top:8%;padding-bottom:4%}.responsive.svelte-ttgdml{display:none}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="wrapper svelte-ttgdml"><h1>Let&#39;s make the web more
        <div>${validate_component(FlappyLetters, "FlappyLetters").$$render($$result, { text: "FUN" }, {}, {})} <br class="responsive svelte-ttgdml">
            and <br class="responsive svelte-ttgdml"> <div style="display: contents; --color:#E63946;">${validate_component(FlappyLetters, "FlappyLetters").$$render($$result, { text: "PLAYFUL" }, {}, {})}</div></div> <div data-svelte-h="svelte-hcpwqf">together!</div></h1> </div>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".about.svelte-1fubrgj{background-color:#3AB8A9;font-size:1.75rem;padding:6%;text-align:center;display:flex;flex-direction:column}.welcome-wrapper.svelte-1fubrgj{order:1}.description-wrapper.svelte-1fubrgj{background-color:#3AB8A9;order:3}.welcome.svelte-1fubrgj{background-color:#3AB8A9}.link.svelte-1fubrgj{color:#FFF9EB}.headshot-wrapper.svelte-1fubrgj{order:2}.headshot.svelte-1fubrgj{width:75%;border-radius:2%}@media only screen and (min-width: 992px){.about.svelte-1fubrgj{height:100%;text-align:right;position:relative}.welcome-wrapper.svelte-1fubrgj{position:absolute;top:15%;left:33%}.description-wrapper.svelte-1fubrgj{position:absolute;top:25%;left:6%}.headshot.svelte-1fubrgj{width:50%}}@media only screen and (min-width: 1500px){.description-wrapper.svelte-1fubrgj{left:16%}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="about svelte-1fubrgj" data-svelte-h="svelte-1gn2vlm"><div class="welcome-wrapper svelte-1fubrgj"><h2 class="welcome svelte-1fubrgj">Hello beautiful creatives!</h2></div> <div class="description-wrapper svelte-1fubrgj"><h3>I&#39;m Courtney Noyes.</h3> <p><a class="link svelte-1fubrgj" target="_blank" href="https://www.linkedin.com/in/courtneynoyes/">Software engineer,</a>
            and founder of Court&#39;s Custom Sites.</p> <p>I build one-of-a-kind websites <br>
            for folks who value bespoke marketing and <br>
            need more pizzazz than the average WordPress template.</p> <p>I love using 3D, <br>
            sound effects, <br>
            animations, <br>
            and crazy colors <br>
            to help your unique style stand out.</p></div> <div class="headshot-wrapper svelte-1fubrgj"><img class="headshot svelte-1fubrgj" src="/guitar-headshot.jpg" alt="Court playing the guitar"></div> </div>`;
});
const Services_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.services-wrapper.svelte-hms9xz{font-size:1.75rem;text-align:center;padding:6%}.card-wrapper.svelte-hms9xz{width:100%;height:65vh;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.card.svelte-hms9xz{width:75%;height:225px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center}.service-1.svelte-hms9xz{background-color:#3AB8A9}.service-2.svelte-hms9xz{background-color:#E63946}.italicize.svelte-hms9xz{font-style:italic;font-size:1rem}.price.svelte-hms9xz{font-family:"Hedvig Letters Sans", sans-serif;font-weight:700;color:#FFF9EB}.icon-wrapper.svelte-hms9xz{width:25%}@media only screen and (min-width: 768px){.card-wrapper.svelte-hms9xz{height:60vh}.card.svelte-hms9xz{width:45%;height:45%}}@media only screen and (min-width: 992px){.card-wrapper.svelte-hms9xz{background-image:url("$img/services-background.png");background-repeat:no-repeat;background-position:center center;background-size:contain;height:50vh;background-blend-mode:multiply;position:relative}.card.svelte-hms9xz{width:20%;height:65%}.service-1.svelte-hms9xz{position:absolute;top:17%;left:25%}.service-2.svelte-hms9xz{position:absolute;top:17%;right:25%}.service-type.svelte-hms9xz{font-size:2.5rem}.price.svelte-hms9xz{font-size:2rem}}@media only screen and (min-width: 1500px){.card.svelte-hms9xz{width:18%;height:62%}.service-1.svelte-hms9xz{top:18%;left:27%}.service-2.svelte-hms9xz{top:18%;right:27%}}',
  map: null
};
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="services-wrapper svelte-hms9xz" data-svelte-h="svelte-q83jgd"><h2>Services</h2> <div class="card-wrapper svelte-hms9xz"><div class="card service-1 svelte-hms9xz"><div class="icon-wrapper svelte-hms9xz"><img src="/moon-icon.svg" alt="icon of the moon"></div> <span class="service-type svelte-hms9xz">Template Site</span> <span class="italicize svelte-hms9xz">starting at</span> <span class="price svelte-hms9xz">$1500</span></div> <div class="card service-2 svelte-hms9xz"><div class="icon-wrapper svelte-hms9xz"><img src="/stars-icon.svg" alt="icon of the stars"></div> <span class="service-type svelte-hms9xz">Custom Site</span> <span class="italicize svelte-hms9xz">starting at</span> <span class="price svelte-hms9xz">$3000</span></div></div> </div>`;
});
const ValueProp_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".value-prop-wrapper.svelte-j21rz0{padding:5% 10%;min-height:50vh;background-color:#E63946;font-size:1.5rem}.weird.svelte-j21rz0{text-align:center;font-size:4rem;letter-spacing:5px}.spin-to-the-left.svelte-j21rz0{display:inline-block;transform:translateY(25%) rotateZ(310deg)}.spin-upside-down.svelte-j21rz0{display:inline-block;transform:translateY(50%) rotateZ(180deg)}.spin-to-the-right.svelte-j21rz0{display:inline-block;transform:translateY(75%) rotateZ(70deg)}.slide-down.svelte-j21rz0{display:inline-block;transform:translateY(100%)}.centered.svelte-j21rz0{text-align:center}.right-justified.svelte-j21rz0{display:block;text-align:right;padding-top:10%}.italic.svelte-j21rz0{font-style:italic}@media only screen and (min-width: 992px){.value-prop-wrapper.svelte-j21rz0{font-size:2.5rem}}",
  map: null
};
const ValueProp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sites = ["Wix", "Weebly", "Squarespace", "WordPress"];
  let i = -1;
  $$result.css.add(css$2);
  return `<div class="value-prop-wrapper svelte-j21rz0"><h2 class="centered svelte-j21rz0">I&#39;m happy to help you build out your <br> <span><span>${escape(sites[i] || sites[3])}</span></span>
        site, <br>
        but if you need something custom or a little 
        <p class="weird svelte-j21rz0" data-svelte-h="svelte-dlbw6q">w
            <span class="spin-to-the-left svelte-j21rz0">e</span> <span class="spin-upside-down svelte-j21rz0">i</span> <span class="spin-to-the-right svelte-j21rz0">r</span> <span class="slide-down svelte-j21rz0">d,</span></p> <span class="right-justified svelte-j21rz0" data-svelte-h="svelte-1kfu97j">I would <span class="italic svelte-j21rz0">love</span> to help you build that.</span></h2> </div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".footer.svelte-1vf4osq{text-align:center;margin:0 10%;font-size:2rem}.social.svelte-1vf4osq{font-size:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-direction:column}.icon-wrapper.svelte-1vf4osq{width:45px}@media only screen and (min-width: 768px){.social.svelte-1vf4osq{flex-direction:row}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  $$result.css.add(css$1);
  return `<div class="footer svelte-1vf4osq">${validate_component(CTAButton, "CTAButton").$$render($$result, {}, {}, {})} <div class="social svelte-1vf4osq"><a target="_blank" href="https://www.linkedin.com/in/courtneynoyes/" data-svelte-h="svelte-1d55qqr"><div class="icon-wrapper svelte-1vf4osq"><img src="/linked-in-icon.svg" alt="icon of linked in"></div></a> <p>© ${escape(year)} Court&#39;s Custom Sites. Website by Courtney Noyes.</p></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0;box-sizing:border-box}.page.svelte-16vv7gp{color:#48090F;font-family:'Goudy Bookletter 1911', serif;background-color:#FFF9EB;display:flex;flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} <div class="page svelte-16vv7gp">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Services, "Services").$$render($$result, {}, {}, {})} ${validate_component(ValueProp, "ValueProp").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
