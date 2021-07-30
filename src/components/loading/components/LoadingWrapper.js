import * as React from "react";

import styles from "./LoadingWrapper.module.css";
import {Loading} from "../index";

const LoadingWrapper = () => (
    <div className={styles.container}><Loading/></div>
);
export default LoadingWrapper;
