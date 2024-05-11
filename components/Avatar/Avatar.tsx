import React from "react";

import styles from "./Avatar.module.scss";

export interface AvatarProps {
  children: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({ children }) => {
  return <div className={styles.base}>{children}</div>;
};

export default Avatar;
