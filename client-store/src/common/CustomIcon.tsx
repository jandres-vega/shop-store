import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProps} from "../types/customTags/Icon.ts";

const CustomIcon:React.FC<IconProps> = (props) => {
    return (
        <FontAwesomeIcon {...props} icon={props.icon} />
    );
};

export {CustomIcon};