import React from "react";

import styles from "./Avatar.module.scss";

export interface AvatarProps {
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return (
    <div className={styles.base}>
      <img src={imageUrl} alt="avatar" />
    </div>
  );
};

export default Avatar;
