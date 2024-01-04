import { gsap } from "gsap";


export const scrollAnimation = (position,target,isMobile,  onUpdate) => {
    const tl = gsap.timeline();

    tl.to(position,{
        x: !isMobile ? -3.38 : -7.0,
        y: !isMobile ?-10.14:-12.2,
        z: !isMobile ?-5.93:-6.0,
        scrollTrigger:{
            trigger:".sound-section",
            start : "top bottom",
            end : "top top",
            scrub : 2,
            immediateRender: false

        },
        onUpdate
    })
    .to(target,{
        x: !isMobile ?1.52 : 0.7,
        y: !isMobile ? 0.77 : 1.9,
        z: !isMobile ?-1.08: 0.7,
        scrollTrigger:{
            trigger:".sound-section",
            start : "top bottom",
            end : "top top",
            scrub : 2,
            immediateRender: false

        },  
    })
    .to('.jumbtron-section',{
        opacity: 0,
        scrollTrigger:{
            trigger:".sound-section",
            start : "top bottom",
            end : "top top",
            scrub : 2,
            immediateRender: false

        },  
    })
    .to('.sound-section-content',{
        opacity: 1,
        scrollTrigger:{
            trigger:".sound-section",
            start : "top bottom",
            end : "top top",
            scrub : 2,
            immediateRender: false

        },  
    }).to(position,{
        x: 1.56,
        y: 5.0,
        z: 0.01,
        scrollTrigger:{
            trigger:".display-section",
            start : "top bottom",
            end : "top top",
            scrub : 2,
            immediateRender: false

        },
        onUpdate
    })
    .to(target,{
        x: -0.55,
        y: 0.32,
        z: 0.0,
        scrollTrigger:{
            trigger:".display-section",
            start : "top bottom",
            end : "top top",
            scrub : 2,
            immediateRender: false

        },  
    }).to('.display-section',{
        opacity: 1,
        scrollTrigger:{
            trigger:".display-section",
            start : "top bottom",
            end : "top top",
            scrub : 2,
            immediateRender: false

        },  
    })

}

