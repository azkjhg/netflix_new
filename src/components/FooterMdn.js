import React from 'react';

export default function FooterMdn() {
  return (
    <div>
  <div>선</div>

      <section className=''>
        <div className='컨테이너'>
          <div className='로우'>
            <div>
              <h6>
                <div>로고</div>
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>

            <div className='칼럼'>
              <h6 >Products</h6>
              <p>
                <a  >
                  Angular
                </a>
              </p>
              <p>
                <a  >
                  React
                </a>
              </p>
              <p>
                <a  >
                  Vue
                </a>
              </p>
              <p>
                <a  >
                  Laravel
                </a>
              </p>
            </div>

            <div className='칼럼'>
              <h6 >Useful links</h6>
              <p>
                <a>
                  Pricing
                </a>
              </p>
              <p>
                <a>
                  Settings
                </a>
              </p>
              <p>
                <a>
                  Orders
                </a>
              </p>
              <p>
                <a>
                  Help
                </a>
              </p>
            </div>

            <div className='칼럼'>
              <h6 >Contact</h6>
              <p>
                <div icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <div icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <div icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <div icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='년도'>
        © 2021 Copyright:
        <a >
          MDBootstrap.com
        </a>
      </div>
    </div>
  );
}
