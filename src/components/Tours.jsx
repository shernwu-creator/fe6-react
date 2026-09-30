import Title from "./Title"
import Tour from "./Tour"
import { tours } from "../../data"
const Tours = () => {
//    let tour = tours.filter(item => item.id < 3)
  return (
    <section className="section tours" id="tours">
        <Title title="featured" subTitle="tours" />
        <div className="section-center tours-center">
            {/* {tours.map((tour) => { 
                return(<Tour key={tour.id} image={tour.image} date={tour.date} title={tour.title} location={tour.location} duration={tour.duration} price={tour.price} />)})
            } */}
            {tours.map((tour) => { 
                return(<Tour key={tour.id} {...tour} />)})
            }
        </div>
    </section>
  )
}

export default Tours