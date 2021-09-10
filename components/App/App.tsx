import React, { useRef, useEffect } from 'react';
import Hero from '@components/Hero';
import Section from '@components/layout/Section';
import About from '@components/About';
import Contact from '@components/Contact';
import Experience from '@components/Experience';
import Work from '@components/Work';

export const App: React.FC = () => {
    const sectionsRef = useRef<Array<HTMLElement | null>>([]),
        executeScroll = (index: number) =>
            window.scrollTo({
                top: sectionsRef!.current[index]!.offsetTop - 2,
                behavior: 'smooth'
            }),
        sections = [
            {
                id: 'hero',
                component: <Hero executeScroll={executeScroll} />
            },
            {
                id: 'about',
                component: <About />
            },
            {
                id: 'experience',
                component: <Experience />
            },
            {
                id: 'works',
                component: <Work />
            },
            {
                id: 'contact',
                component: <Contact />
            }
        ];

    useEffect(() => {
        sectionsRef.current = sectionsRef.current.slice(0, sections.length);
    }, [sections.length]);

    return (
        <div className="ml-0 md:ml-72 lg:ml-80 flex flex-col">
            {sections.map(({ id, component }, key) => (
                <Section
                    key={key}
                    id={id}
                    ref={(el: HTMLElement) => (sectionsRef.current[key] = el)}
                >
                    {component}
                </Section>
            ))}
        </div>
    );
};
