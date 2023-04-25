import React, { memo, FC } from "react";

import sprite from "../../assets/images/sprite.svg";

interface IIconProps {
  name: string;
}

const Icon: FC<IIconProps> = memo(({ name, ...rest }) => {
  return (
    <svg className="icon" {...rest}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
});

export default Icon;
