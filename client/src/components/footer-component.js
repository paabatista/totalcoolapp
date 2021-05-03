import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <br></br>
        <div className="wrapper">
          <div className="content-shadow">
            <div className="padded">
              <div className="outline">
                <div className="row">
                  <div className="footer-widgets">
                    <div className="footer-widget">
                      <div className="card">
                        <div className="card-header">
                          <span>Recent Posts</span>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Cras justo odio</li>
                          <li className="list-group-item">
                            Dapibus ac facilisis in
                          </li>
                          <li className="list-group-item">
                            Vestibulum at eros
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="footer-widget">
                      <div className="card">
                        <div className="card-header">
                          <span>Recent Comments</span>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Cras justo odio</li>
                          <li className="list-group-item">
                            Dapibus ac facilisis in
                          </li>
                          <li className="list-group-item">
                            Vestibulum at eros
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="footer-widget">
                      <div className="card">
                        <div className="card-header">
                          <span>Meta Links</span>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Cras justo odio</li>
                          <li className="list-group-item">
                            Dapibus ac facilisis in
                          </li>
                          <li className="list-group-item">
                            Vestibulum at eros
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="footer-widget imagefooter">
                    <img
                      src="https://restaurantthemedemo.files.wordpress.com/2015/08/widget-01-e1578585426322.jpg"
                      alt=""
                    ></img>
                  </div>
                </div>

                <div className="footer-information">
                  <div className="align-left">
                    <small>
                      Made with <i class="fas fa-heart"></i> by
                      <Link href="#" rel="nofollow">
                        Meyer Technologies
                      </Link>
                    </small>
                  </div>

                  <div className="align-right">
                    <div className="social-menu">
                      <ul id="menu-social-menu" className="social-icons">
                        <li
                          id="menu-item-465"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-465"
                        >
                          <Link href="https://twitter.com/organicthemes">
                            <FontAwesomeIcon
                              icon={["fab", "twitter"]}
                              size="lg"
                            />
                          </Link>
                        </li>

                        <li
                          id="menu-item-466"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-466"
                        >
                          <Link href="http://pinterest.com">
                            <FontAwesomeIcon
                              icon={["fab", "pinterest"]}
                              size="lg"
                            />
                          </Link>
                        </li>

                        <li
                          id="menu-item-467"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-467"
                        >
                          <Link href="http://instagram.com">
                            <FontAwesomeIcon
                              icon={["fab", "instagram"]}
                              size="lg"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
