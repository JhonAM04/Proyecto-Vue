<template> 
    <main class="text-[hsl(0,0%,100%)] font-['Open_Sans']">
        <section name="Intro" class="bg-[hsl(217,28%,15%)] bg-[url(../assets/images/bg-curvy-desktop.svg)] bg-no-repeat bg-contain bg-bottom w-full h-full flex flex-col justify-center items-center gap-5 text-center pt-20 pb-65">
            <img :src="img1" class="md:size-150 size-50" />
            <h1 class="font-bold text-4xl md:w-200 w-80">All your files in one secure location, accesible anywhere.</h1>
            <p class="font-normal md:w-120 w-80">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.</p>
            <RouterLink to="/products"><button class="bg-[hsl(176,68%,64%)] p-4 w-60 rounded-[60px] font-bold">Get Started</button></RouterLink>
        </section>

        <section class="bg-[hsl(218,28%,13%)] grid md:grid-cols-2 gap-y-10 items-center text-center md:px-60 ">
            <div name="item1" class="flex flex-col gap-3 items-center">
                <img :src="icon1" />
                <h2 class="font-bold text-xl">Acces your files, anywhere</h2>
                <p class="md:w-95 w-80">The ability to use smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>

            <div name="item2" class="flex flex-col gap-3 items-center">
                <img :src="icon2" />
                <h2 class="font-bold text-xl">Security you can trust</h2>
                <p class="md:w-110 w-80">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help
                    secure your files.</p>
            </div>

            <div name="item3" class="flex flex-col gap-3 items-center">
                <img :src="icon3" />
                <h2 class="font-bold text-xl">Real-time collaboration</h2>
                <p class="md:w-110 w-80">Securely shage files and folders with friends, family and colleagues for live collaboration. No email attachments
                    required.</p>
            </div>

            <div name="item4" class="flex flex-col gap-3 items-center">
                <img :src="icon4" />
                <h2 class="font-bold text-xl">Store any type of file</h2>
                <p class="md:w-110 w-80">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely
                    store and shared.</p>
            </div>
        </section>

        <section class="bg-[hsl(218,28%,13%)] flex flex-col md:flex-row items-center justify-center gap-10 pt-20 w-full">
            <img :src="img2" class="md:size-110 size-60" />
            <div class="flex flex-col justify-center md:text-left text-center gap-2">
                <h2 class="font-bold text-3xl md:w-80 w-70">Stay productive, wherever you are</h2>
                <p class="md:w-130 w-80">Never let location be an issue when accesing your files, Fylo has you covered for all of your file storage needs</p>
                <p class="md:w-140 w-80">Securely share files and folders with friends, family and collegues for live collaboration. No email attachments required.</p>
                <RouterLink to="/products" class="text-[hsl(176,68%,64%)]">See how Fylo required</RouterLink>
            </div>
        </section>

        <section class="bg-[hsl(218,28%,13%)] flex flex-col md:flex-row items-center justify-center gap-10 pt-20 pb-20">
            <div class="bg-[hsl(219,30%,18%)] flex flex-col md:w-120 w-70 pt-8 pb-5 px-5 gap-5 shadow-[8px_8px_10px_rgba(1000,1000,1000,0.4)]">
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled
                    collaboration machine.</p>
                <div class="flex items-center gap-2">
                    <img :src="pf1" class="size-15 rounded-[50%]" />
                    <div class="flex flex-col">
                        <h3 class="font-bold">Satish Patel</h3>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>

            <div class="bg-[hsl(219,30%,18%)] flex flex-col md:w-120 w-70 pt-8 pb-5 px-5 gap-5 shadow-[8px_8px_10px_rgba(1000,1000,1000,0.4)]">
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled
                    collaboration machine.</p>
                <div class="flex items-center gap-2">
                    <img :src="pf2" class="size-15 rounded-[50%]" />
                    <div class="flex flex-col">
                        <h3 class="font-bold">Bruce McKenzie</h3>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>

            <div class="bg-[hsl(219,30%,18%)] flex flex-col md:w-120 w-70 pt-8 pb-5 px-5 gap-5 shadow-[8px_8px_10px_rgba(1000,1000,1000,0.4)]">
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled
                    collaboration machine.</p>
                <div class="flex items-center gap-2">
                    <img :src="pf3" class="size-15 rounded-[50%]" />
                    <div class="flex flex-col">
                        <h3 class="font-bold">Iva Boyd</h3>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    import img1 from '../assets/images/illustration-intro.png';
    import img2 from '../assets/images/illustration-stay-productive.png';
    import icon1 from '../assets/images/icon-access-anywhere.svg';
    import icon2 from '../assets/images/icon-security.svg';
    import icon3 from '../assets/images/icon-collaboration.svg';
    import icon4 from '../assets/images/icon-any-file.svg';
    import pf1 from '../assets/images/profile-1.jpg';
    import pf2 from '../assets/images/profile-2.jpg';
    import pf3 from '../assets/images/profile-3.jpg';
    import { RouterLink } from 'vue-router';
</script>