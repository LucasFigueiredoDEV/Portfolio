import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function Asidebar() {
	return (
		<aside className="asidebar">
			<div className="asidebar-inner">
				<div className="img-dev">
					<img src="/img/foto-ia.jpg" alt="developer" className="img-dev"/>
				</div>
				<div className="brand">Hi, I'm Lucas</div>
				<nav className="aside-nav">
					<ul>
						<li>
							<a href="https://www.linkedin.com/in/lucas-figueiredo-aab260264/" target="_blank" rel="noreferrer" className="btn btn-primary"><i class="bi bi-linkedin "></i></a>
						</li>
						<li>
							<a href="https://github.com/LucasFigueiredoDEV" className="btn btn-secondary" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
						</li>
						<li><a href="https://discord.com/users/333462800989028352" className="btn btn-primary" target="_blank" rel="noreferrer"><i class="bi bi-discord"></i></a></li>
					</ul>
				</nav>
				<a href="#" className="btn btn-success" target="_blank" rel="noreferrer">My Resume <i class="bi bi-box-arrow-up-right"></i></a>
			</div>
		</aside>
	);
}

export default Asidebar;