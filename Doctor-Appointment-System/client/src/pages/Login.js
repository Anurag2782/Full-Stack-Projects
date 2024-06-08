import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import d from '../Images/d.png';
import doctor1 from "../Images/OIP1.jpg";
import doctor2 from "../Images/OIP2.jpg";
import doctor3 from "../Images/OIP3.jpg";
import doctor4 from "../Images/OIP4.png";
import bgImage from "../assets/bgImage2.png";
import pediatrician from "../Images/pediatrician.jpg"
import neurologist from "../Images/neurologist.jpg"
import psychiatrist from "../Images/psychiatrist.jpg"
import cardiologist from "../Images/cardiologist.jpg"
import articleChronicDisease from "../Images/article-chronic-disease.jpg";
import articleChildIllness from "../Images/article-child-illness.jpg";
import articleHealthCheck from "../Images/article-health-check.png";
import articleRightExecutive from "../Images/article-strong-executive-presence.png";
import testimoninalPj from "../Images/testimonial-pj.png"
import testimonialAS from "../Images/testimonial-AS.png"
import testimonialG from "../Images/testimonial-G.png"
import aboutUs from "../assets/about-us.png"
import Footer from "../components/Footer";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };


  return (
    <div className="maincontainer">
      <div className="nav">
        {/* <nav> */}
        <div className="logo">
          <img src={d} alt="Logo" />
        </div >
        <div className="navOptions">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* </nav> */}
      </div>
      {/* <hr/> */}
      <div className="upperbox">

        <h3>"Wellness Starts with Easy Appointments."</h3>
        <h1>Doctor Appointment Web Application</h1>
      </div>
      <div className="form-container ">
        <div className="gpt3__header-image">
          <img src={bgImage} alt="backgroundImage" />
          {/* Changes  */}
          <p style={{fontWeight : "bold"}}>"Streamlining Healthcare Access: Your Trusted Companion for Seamless Doctor Appointments"</p>
          {/* Changes */}
        </div>
        {/* Adding forgot password */}
        <div className="formContainer-right">

          <Form
            name="login"
            layout="vertical"
            onFinish={onfinishHandler}
            className="register-form"
          >
            <h3 className="text-center loginhead">Login Form</h3>

            <Form.Item label="Email" name="email">
              <Input type="email" required />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" required />
            </Form.Item>
            <Link to="/register" className="m-2">
              Sign-Up
            </Link>

            <Link to="/forgot-password"><span>Forgot-Password</span></Link><br />
            <button className="btn btn-primary btn-login" type="submit">
              Login
            </button>
          </Form>

        </div>
      </div>

      <hr />
      <div className="small-container" id="services">
        <h2 className="title"><b>TOP DEPARTMENTS</b></h2>
        <h6>Find experienced doctors across all specialties</h6>
        <div className="row">
          <div className="col-4">
            <img src={pediatrician} alt="" />
            <h4>Pediatrician</h4>
            <p>Focuses on the health and medical care of infants, children, and adolescents.</p>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            {/* <p>$30</p> */}
          </div>
          <div className="col-4">
            <img src={cardiologist} alt="" />
            <h4>Cardiologist</h4>
            <p>Specializes in heart-related conditions and diseases.</p>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            {/* <p>$30</p> */}
          </div>

          <div className="col-4">
            <img src={neurologist} alt="" />
            <h4>Neurologist</h4>
            <p>Deals with disorders of the nervous system, including the brain and spinal cord.</p>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            {/* <p>$30</p> */}
          </div>
          <div className="col-4">
            <img src={psychiatrist} alt="" />
            <h4>Psychiatrist</h4>
            <p>Diagnoses and treats mental health disorders</p>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            {/* <p>$30</p> */}
          </div>
        </div>
      </div>
      <div className="small-container">
        <h2 className="title"><b>TOP DOCTORS</b></h2>
        <h6>Private online consultations with verified doctors in all specialists</h6>
        <div className="row">
          <div className="col-4 top-doctors-img">
            <img src={doctor1} alt="" />
            <h5>Dr. Anger Jolie</h5>
            <p>Psychiatrist</p>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>$30</p>
          </div>
          <div className="col-4">
            <img src={doctor2} alt="" />
            <h5>Dr. Tom Holland</h5>
            <p>Psychiatrist</p>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>$30</p>
          </div>

          <div className="col-4">
            <img src={doctor3} alt="" />
            <h5>Dr. Harry Potter</h5>
            <p>Neurologist</p>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>$30</p>
          </div>
          <div className="col-4">
            <img src={doctor4} alt="" />
            <h5>Dr. DumbleDore</h5>
            <p>Cardiologist</p>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>$30</p>
          </div>
        </div>
      </div>
      <hr />

      {/* changes made - new section for about us */}

      <div className="about-us" id="about">
          <h1>About Us</h1>
        <div className="about-us-container">

          <div className="left-about-us">
            <img src={aboutUs} alt="imageAboutUs" />
          </div>
          <div className="right-about-us">
            <h3>We take care of your heath</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quibusdam error beatae? Ea nobis doloremque qui non, impedit ipsam at.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolorem?</p>
            <p>We are a team of passionate healthcare professionals who believe that everyone deserves access to quality care, regardless of their location or schedule. That's why we created [your app name], an online appointment platform that connects you with licensed doctors from the comfort of your own home.</p>
          </div>
        </div>
      </div>

      <hr />


      <div className="articles" id="blog">
        <h1>Latest Articles</h1>
        <div className="articlesList">
          <div className="latestArticles">
            <img src={articleChronicDisease} alt="image-currency" />
            <div>
              <p className="authorMuted">By Claire Robinson</p>
              <a href="#">Managing Chronic Conditions: A Guide for Patients</a>
              <p className="text-muted">Living with a chronic health condition requires careful management and support. This article offers guidance to individuals dealing with chronic illnesses, discussing treatment options, lifestyle adjustments, and the importance of regular consultations with healthcare professionals ...<a href="#login">Read more</a></p>
            </div>
          </div>
          <div className="latestArticles">
            <img src={articleChildIllness} alt="image-restaurant" />
            <div>
              <p className="authorMuted">By Wilson Hutton</p>
              <a href="#">Understanding Common Childhood Illnesses</a>
              <p className="text-muted">For parents seeking medical advice for their children, this article delves into common childhood illnesses and when to consult a pediatrician. Learn about symptoms, preventive measures, and how to ensure your child receives the best possible care ...<a href="#login">Read more</a></p>
            </div>
          </div>
          <div className="latestArticles">
            <img src={articleHealthCheck} alt="image-plane" />
            <div>
              <p className="authorMuted">By Wilson Hutton</p>
              <a href="#">The Importance of Regular Health Check-ups</a>
              <p className="text-muted">Regular health check-ups are essential for maintaining overall well-being. In this article, we explore the significance of scheduling routine check-ups with your healthcare provider. Learn about the preventive measures that can help you stay ahead of potential health issues ...<a href="#login">Read more</a></p>
            </div>
          </div>
          <div className="latestArticles">
            <img src={articleRightExecutive} alt="image-confetti" />
            <div>
              <p className="authorMuted">By Claire Robinson</p>
              <a href="#">Choosing the Right Specialist for Your Needs</a>
              <p className="text-muted">Are you unsure about which medical specialist to consult for your health concerns? This article provides guidance on selecting the right doctor for your specific needs. From primary care physicians to specialists in various fields, discover how to make informed choices for your healthcare journey ...<a href="#login">Read more</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div className="testimonial-section" >

        <h1>Testimonials</h1>
        <p>⭐⭐⭐⭐⭐</p>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner testimonials">
            <div className="carousel-item active testimonial">
              <img src={testimoninalPj} className="d-block  carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <p>I've been seeing Dr. Smith for my primary care needs, and I couldn't be happier. The staff is friendly, and Dr. Smith is always attentive, answering all my questions and concerns. The ease of booking appointments through this website makes managing my health a breeze!</p>
                <span>Pranshu Jassal</span>
              </div>
            </div>
            <div className="carousel-item testimonial">
              <img src={testimonialAS} className="d-block  carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <p>"I've been seeing Dr. Smith for my primary care needs, and I couldn't be happier. The staff is friendly, and Dr. Smith is always attentive, answering all my questions and concerns. The ease of booking appointments through this website makes managing my health a breeze!"</p>
                <span>Anurag Sharma</span>
              </div>
            </div>
            <div className="carousel-item testimonial">
              <img src={testimonialG} className="d-block  carousel-image" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <p>"We feel fortunate to have Dr. Johnson as our pediatrician. She's not only knowledgeable but also has a warm and reassuring demeanor that instantly puts our children at ease. The online appointment system is a game-changer for busy parents like us!"</p>
                <span>Chelsy Sharma</span>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


      </div>


      {/* <div className="footer" id="contact">
        <div className="footerList">
          <div className="footerDiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20" id="svgLogo">
              <defs>
                <linearGradient id="a" x1="72.195%" x2="17.503%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#33D35E" />
                  <stop offset="100%" stop-color="#2AB6D9" />
                </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path id="logoFill" fill="#2D314D" fill-rule="nonzero"
                  d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z" />
                <g fill="url(#a)">
                  <path d="M10.802 0L0 19.704h5.986L16.789 0z" />
                  <path opacity=".5" d="M18.171 0L7.368 19.704h5.986L24.157 0z" />
                  <path opacity=".15" d="M25.539 0L14.737 19.704h5.986L31.525 0z" />
                </g>
              </g>
            </svg>
            <div className="socialLinks">
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path fill="#FFF" id="link"
                  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
              </svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                <path fill="#FFF" id="link"
                  d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z" />
              </svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="18">
                <path fill="#FFF" id="link"
                  d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z" />
              </svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path fill="#FFF" id="link"
                  d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z" />
              </svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                <path fill="#FFF" id="link"
                  d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
              </svg></a>
            </div>
          </div>
          <div className="footerDiv">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
          <div className="footerDiv">
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">Privacy</a>
          </div>
          <div className="footerDiv">
            <a href="#"><button id="requestBtn">Request Invite</button></a>
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div> */}
      <Footer/>
      <div className="attribution" id="contact">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend developer</a>.
        Coded by <a href="https://www.github.com/Anurag2782">Anurag Sharma</a>.
      </div>




    </div>

  );
};

export default Login;
