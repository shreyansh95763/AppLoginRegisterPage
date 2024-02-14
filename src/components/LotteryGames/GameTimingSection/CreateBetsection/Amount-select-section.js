export const AddAmount=()=>{
    const lists = ["x1","X5","X10","X20","X50","X100"];
    return(<>
            {
                lists.map((elem)=>(
                    <div className="xAmounts">{elem}</div>
                ))
            }
    </>)
}