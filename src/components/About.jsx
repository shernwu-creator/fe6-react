import aboutImg from '../assets/about.jpg'
import Title from './Title'
const About = () => {
  return (
    <section className="section" id="about">
        <Title title="about" subTitle="us" />
        <div className="section-center about-center">
            <div className="about-img">
                <img src={aboutImg} alt="hill-photo" className="about-photo" />
            </div>
            <article className="about-info">
                <h3>explore the difference</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, sed consectetur. At distinctio ex vero.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae deserunt soluta tempore iure hic doloremque?</p>
                <a href="#" className="btn" role="button">read me</a>
            </article>
        </div>
    </section>
  )
}

export default About