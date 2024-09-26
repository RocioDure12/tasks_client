interface CardProps{
    title?: string;
    description?: string;
    image?: string;
    footer?: React.ReactNode;
    actions?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}