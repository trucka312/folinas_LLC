interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem = ({onClick, label}: MenuItemProps) => {
    return (
        <div onClick={onClick} className="px-4 py-3 transition font-semibold cursor-pointer hover:text-[rgb(var(--second-rgb))]">
            {label}
        </div>
    )
}
 
export default MenuItem;