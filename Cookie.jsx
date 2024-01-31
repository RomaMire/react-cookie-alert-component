import React from "react";
import { useState, useEffect } from "react";

import Button from "../button/Button";
import styles from "./cookie.module.scss";

const Cookie = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const [localStorages, setLocalStorages] = useState(null);

	const closeBanner = () => {
		setIsVisible(false);
		localStorage.setItem("script_alert", "true");
	};

	useEffect(() => {
		setLocalStorages(localStorage.script_alert);

		//localStorage.setItem("script_alert", "false");

		const checkBanner = () => {
			if (localStorages === "false") {
				setIsVisible(true);
			}
		};

		const timeout = setTimeout(checkBanner, 3000);

		return () => {
			clearTimeout(timeout);
		};
	}, [localStorages]);

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
