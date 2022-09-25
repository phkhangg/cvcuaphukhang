import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            <h3>Introduce Myself: </h3>I am 18 years old and have been a student
            of Funix since July 2021. I am approachable and ambitious in work. I
            am also a person who can work under pressure and like to learn new
            things. in my free time i usually.
            <h3>Career Goals</h3>
            <b>Short-term Goal (3 months):</b> Try to get used to the
            environment and work as quickly as possible. Meet the standards of
            the IT department and become an official employee of the company.
            <br />
            <b>Long-term Goal(6 months):</b>
            Can work in the professional environment of your company and use the
            acquired knowledge to contribute to the development of the company.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <i class="fas fa-user"></i> Male
              </p>
              <p>
                <i class="fas fa-calendar-alt"></i> 03/11/2003
              </p>
              <p>
                <i class="fas fa-phone"></i> 0968945406
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <i class="fas fa-map-marker-alt"></i>{" "}
                Kimgiang,Thanhxuan,Hanoi,Vietnam
              </p>
              <p>
                <i class="far fa-envelope"></i> minhnguyentuan31103@gmail.com
              </p>
              <p>
                <i class="fab fa-facebook"></i> https://www.facebook.com/profile.php?id=100014532467977
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
