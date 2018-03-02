import React from 'react';
import { FaPlus, FaTag } from 'react-icons/lib/fa';

const Coffee = 'https://media.graphcms.com/UjwhlkklToC5D1CPuSco';
const Console = 'https://media.graphcms.com/JeaiUCnmQPKUJRO3FfHK';
const Judah = 'https://media.graphcms.com/R1FewZnxTRKZrTixuNnE';
const IntoTheLight = 'https://media.graphcms.com/GJRnpDprSOeX4Mde5TBQ';
const Farmerboy = 'https://media.graphcms.com/OZfbLvpRSg0oQpEBfYw9';
const Girl = 'https://media.graphcms.com/em58b7AjTPWUTp01MfOi';
const Origami = 'https://media.graphcms.com/yCqYz3rdSKGy2YNUmZyQ';
const Retrocam = 'https://media.graphcms.com/WzQMoHqwQhiY48AUgoDj';

const Portfolio = () => (
	<section id="portfolio">
		<div className="row">
			<div className="twelve columns collapsed">
				<h1>Favorite Technologies For 2018</h1>

				<div
					id="portfolio-wrapper"
					className="bgrid-quarters s-bgrid-thirds cf">
					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-01" title="">
								<img alt="" src={Coffee} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>GatsbyJS</h5>
										<p>React + Static Page Generator</p>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-02" title="">
								<img alt="" src={Console} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>Apollo by MeteorJS</h5>
										<p>GraphQL Framework</p>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-03" title="">
								<img alt="" src={Judah} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>Serverless</h5>
										<p>Serverless CLI Framework Dev Tool</p>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-04" title="">
								<img alt="" src={IntoTheLight} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>GraphCMS</h5>
										<p>GraphQL based CMS API</p>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-05" title="">
								<img alt="" src={Farmerboy} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>Netlify CDN</h5>
										<p>Global CDN & CI Hosting</p>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-06" title="">
								<img alt="" src={Girl} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>AdonisJS</h5>
										<p>Serverside Framework</p>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-07" title="">
								<img alt="" src={Origami} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>NUXT</h5>
										<p>Optimized SSR VueJS Application Framework</p>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-08" title="">
								<img alt="" src={Retrocam} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>NextJS</h5>
										<p>Optimized SSR React Application Framework</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* <div id="modal-01" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-coffee.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Coffee Cup</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag /> Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-02" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-console.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Console</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Web Development
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-03" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-judah.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Judah</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-04" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-intothelight.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Into the Light</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-05" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-farmerboy.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Farmer Boy</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Webdesign
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-06" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-girl.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Girl</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-07" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-origami.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Origami</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />Branding, Illustration
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>

      <div id="modal-08" className="popup-modal mfp-hide">
        <img
          className="scale-with-grid"
          src="images/portfolio/modals/m-retrocam.jpg"
          alt=""
        />

        <div className="description-box">
          <h4>Retrocam</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <i className="fa fa-tag" />Webdesign, Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div> */}
		</div>
	</section>
);

export default Portfolio;
