import Greetings from '../../components/greetings-section/Greetings';
import WorksData from '../../components/works-section/worksData/WorksData';
import Skills from '../../components/Skills/Skills';
import AboutMe from '../../components/about-me/AboutMe';
import Footer from '../../components/footer/Footer';

export default function HomePage() {
    return (
        <section>
            <Greetings />
            <WorksData />
            <Skills />
            <AboutMe />
            <Footer />
        </section>
    )
}