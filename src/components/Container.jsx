function Container({children}){
    return(
            <div className="w-full max-w-7xl mx-auto flex flex-col px-3 lg:px-10" >
                {children}
            </div>
    )
}

export default Container;