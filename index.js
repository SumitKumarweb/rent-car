document.getElementById("rate1").addEventListener("click",()=>{
    document.getElementById("button").classList.add("none");
    document.getElementById("days").classList.remove("none");
    document.getElementById("done").addEventListener("click", ()=>{
        document.getElementById("days").classList.add("none");
        const days =  document.getElementById("carDay").value
        let total = days*4000;
        document.getElementById("total").innerText = total + "Rs";
    })
})
document.getElementById("rate2").addEventListener("click",()=>{
    document.getElementById("button").classList.add("none");
    document.getElementById("days").classList.remove("none");
    document.getElementById("done").addEventListener("click", ()=>{
        document.getElementById("days").classList.add("none");
        const days =  document.getElementById("carDay").value
        let total = days*10000;
        document.getElementById("total").innerText = total + "Rs";
    })
})
document.getElementById("rate3").addEventListener("click",()=>{
    document.getElementById("button").classList.add("none");
    document.getElementById("days").classList.remove("none");
    document.getElementById("done").addEventListener("click", ()=>{
        document.getElementById("days").classList.add("none");
        const days =  document.getElementById("carDay").value
        let total = days*20000;
        document.getElementById("total").innerText = total + "Rs";
    })
})
