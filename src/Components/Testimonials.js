import React from "react"
import ProfilePic from "../Assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai"

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonials</p>
            <h1 className="primary-heading">
                What They Are Saying
            </h1>
            <p className="primary-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, explicabo. Debitis sunt voluptatum unde ab velit labore eligendi saepe corporis!</p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt itaque dolorem delectus aperiam eos beatae voluptates neque possimus sed assumenda.</p>
            <div className="testimonial-star-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}
export default Testimonials