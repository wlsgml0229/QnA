interface WrapperProps {
	children: React.ReactNode;
    firstBtn: string;
    secondBtn: string;
    clickFirst: () => void;
    clickSecond: () => void;
}


export const TwoBtnPop = ({children, ...rest}: WrapperProps) => {
    return (
        <>
        {children}
        </>
    )
}

