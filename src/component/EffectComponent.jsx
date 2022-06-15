import react, { useEffect, useState } from 'react'


function EffectComponent() {
    const [age, setAge] = useState(0)
    const [name, setName] = useState("sam")

    useEffect(() => {
        console.log("UseEffectRendered");
        return(()=>{
            console.log("useEffect Unmounted")
        })
    }, [])

    return (
        <>
       
            <h1 style={{ position: "relative", left: "30vw", margin: "auto" }}>UseEffect in use</h1>
            <h3 style={{ position: "relative", left: "40vw" }}>Your age is {age}</h3>
            <button
                onClick={() => {
                    setAge(age + 1)
                    console.log("age updated", age)
                }}
                style={{
                    position: "relative", left: "42vw",
                    borderRadius: "10px", backgroundColor: "greenyellow",
                    cursor: "pointer", padding: "8px", fontWeight: "bold"
                }}>
                Update Age
            </button>
            <h3 style={{ position: "relative", left: "40vw" }}>Your Name is {name}</h3>
            <input 
            style={{ position: "relative", left: "40vw" }}
             type="text" onChange={(e) => {
                // console.log(e.target.value)
                setName(e.target.value)
            }} />
            

        </>
    )
}

export default EffectComponent