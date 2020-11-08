let arr=[],index=0;
function useState(initVal){
    let curI=index;
    arr[curI]=initVal;
    function setVal(newVal){
        arr[curI]=newVal;
        // render()
    }
    return [arr[index++],setVal]
}
let [a,seta]=useState(0)