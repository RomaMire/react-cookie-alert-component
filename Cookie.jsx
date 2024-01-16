import React from "react";
import { useState, useEffect } from "react";

import Button from "../button/Button";
import styles from "./cookie.module.scss";

const Cookie = (props) => {
	const [isVisible, setIsVisible] = useState(false);

	const checkBanner = () => {
		if (localStorage.script_alert === "false") {
			setIsVisible(true);
		}
	};

	const closeBanner = () => {
		setIsVisible(false);
		localStorage.setItem("script_alert", "true");
	};

	useEffect(() => {
		localStorage.setItem("script_alert", "false");
		const timeout = setTimeout(checkBanner, 3000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<>
			<div
				className={
					isVisible
						? styles.cookie
						: `${styles.cookie} ${styles.cookie__disactive}`
				}
			>
				<div className={styles.cookie__container}>
					<div className={styles.cookie__content}>
						<p>We use cookies in accordance with your browser settings.</p>
					</div>

					<Button text="Accept" onClick={closeBanner}></Button>
				</div>
			</div>
		</>
	);
};

export default Cookie;
