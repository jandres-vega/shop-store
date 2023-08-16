import React from 'react';
import { CustomIcon } from '../../common/CustomIcon.tsx';
import { IconProps } from '../../types/customTags/Icon.ts';
interface MessageProps extends IconProps{
    error : 'error' | 'success' | 'warning',
    message: string,
    visible: boolean
}
const Message:React.FC<MessageProps>= ({error, message, icon, visible}) => {
    return (
        <>
            {
                visible && (
                    <div className={error && "bg-tomato-red w-96 h-16 opacity-50 rounded-md p-2 absolute z-10 left-2"} >
                        <div className="w-full flex justify-end">
                            <CustomIcon className="text-2xl" icon={icon}/>
                        </div>
                        <div className="text-center">
                            <span className="font-bold">{message}</span>
                        </div>
                    </div>
                )
            }
        </>
    )
};

export {Message};
