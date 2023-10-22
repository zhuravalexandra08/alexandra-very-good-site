import React from 'react'

const Footer = () => {
  return (
    <div className="footer-wrapper">
    <footer className="page-footer container">
        <p className="hashtag">&num;visitinnsburg</p>
        <ul class="footer-social">
            <li>
                <a className="social-button" href="#">
                    <img src="img/twitter.svg" alt="твиттер"/>
                </a>
            </li>
            <li>
                <a className="social-button" href="#">
                    <img src="img/fb.svg" alt="фейсбук"/>
                </a>
            </li>
            <li>
                <a className="social-button" href="#">
                    <img src="img/youtube.svg" alt="ютуб"/>
                </a>
            </li>
        </ul>
        <p className="coryright">&copy; 2020 FoxArt</p>

    </footer>
</div>
  )
}

export default Footer