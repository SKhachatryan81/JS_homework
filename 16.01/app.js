let courses = [
    {title:"JS", duration:2, top:["architecture", "C"]},
    {title:"C", duration:4, top:["memory", "pointers"]},
    {title:"Networking", duration:3, top:["IPv6", "ICMP"]},
    {title:"Operating Systems", duration:3, top:["processes", "threads"]},
    {title:"Data Structures", duration:3, top:["arrays", "trees"]},
    {title:"Algorithms", duration:4, top:["sorting", "graphs"]},
    {title:"Databases", duration:2, top:["SQL", "indexes"]},
    {title:"Computer Architecture", duration:3, top:["CPU", "cache"]},
    {title:"Concurrency", duration:2, top:["locks", "async"]},
    {title:"Security", duration:2, top:["encryption", "auth"]}
]

function getCourse(arr)
{
    return new Promise( (resolve, reject) => {
        if(arr.length === 0)
        {
            reject("The array is empty\n");
            return;
        }
        let time = Math.floor((Math.random() * 3000) + 1000);
        let index = Math.floor((Math.random() * arr.length));

        setTimeout(() => {
            resolve(arr[index]); 
        }, time)
    });
}
async function createCourse()
{
    const first = await getCourse(courses);
    const second = await getCourse(courses);

    console.log(first);
    console.log(second);

    if(first === second){
        return first;
    }

    const newCourse = {
        title: [first.title, second.title],
        duration: first.duration + second.duration,
        top: new Set([...first.top, ...second.top])
    }
    
    return newCourse;
}

createCourse()
.then(course => console.log(course)); 