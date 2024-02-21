const CopyRight = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className="border-t-[.5px] my-3 pt-3 mx-auto">
            <p className="text-center">
                © Copyright {year} Folinas LLC. All Rights Reserved.
            </p>
        </div>
    )
}
 
export default CopyRight;