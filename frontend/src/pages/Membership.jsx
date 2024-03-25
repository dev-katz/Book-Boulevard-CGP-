import React from 'react'
import './styles/Membership.css'

export default function About() {
  return (
    <div className='membership-whole'>

      <div className="membership-title">
        <h1>
          Welcome to our <br />
          <span className='membership-highlight'>Membership </span>Program!
        </h1>
      </div>

      <div className="membership-title-description">
        <p className='membership-paraone'>
          As a member,
          you'll unlock a world of exclusive benefits, resources,
          and opportunities tailored to your needs and interests.
        </p>
        <p className='membership-paratwo'>
          Choose from our range of membership packages below to find the perfect fit for you.
          Whether you're looking to connect with like-minded individuals, access premium content, or take
          advantage of professional development opportunities, we have a membership option
          designed to meet your requirements.
        </p>
        <p className='membership-parathree'>
          Thank you for choosing to be part of our community!
        </p>
      </div>


      <div class="membership-container">

        <div class="membership-cards">
          <h2>Basic Membership</h2>
          <p className='membership-para'>This package is designed for individuals who primarily want to access and read eBooks from the platform. It offers essential features for a seamless reading experience.</p>

          <button class="membership-but" onclick="window.location.href='another-page.html'">view</button>
        </div>

        <div class="membership-cardtwo">
          <h2>Standard Membership</h2>
          <p className='membership-para'>You'll receive exclusive access to our carefully curated newsletter, delivering insights, updates, and invitations to upcoming events directly to your inbox every month.</p>

          <button class="membership-but" onclick="window.location.href='another-page.html'">view</button>
        </div>

        <div class="membership-cardthree">
          <h2>Premium Membership</h2>
          <p className='membership-para'>Gain access to our dynamic forums where you can connect with peers, exchange ideas, and participate in and participate in discussions on various topics.</p>

          <button class="membership-but" onclick="window.location.href='another-page.html'">view</button>
        </div>
      </div>
    </div>
  )
}
