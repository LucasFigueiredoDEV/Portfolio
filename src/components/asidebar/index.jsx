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
							<a href="#linkedin" className="btn btn-primary"><i class="bi bi-linkedin "></i></a>
						</li>
						<li>
							<a href="#github" className="btn btn-secondary"><i class="bi bi-github"></i></a>
						</li>
						<li><a href="#discord" className="btn btn-primary"><i class="bi bi-discord"></i></a></li>
					</ul>
				</nav>
				<a href="#cv" className="btn btn-success">My Resume <i class="bi bi-box-arrow-up-right"></i></a>
			</div>
		</aside>
	);
}

export default Asidebar;