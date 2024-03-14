/* var의 대한 예시 */
{
    var v = 1
    {
        var v = 2;
        console.log(v) // 2
    }
    console.log(v) // 2
}

/* let의 대한 예시 */
{
    let l = 1
    {
        let l = 2;
        console.log(l) // 2
    }
    console.log(l) // 1
}