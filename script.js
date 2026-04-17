let tableBodyEl=document.querySelector("#output");

let tableRowLoading=document.createElement("tr");
let tableData=document.createElement("td");

tableData.textContent="Loading...";
tableRowLoading.append(tableData);
tableData.setAttribute("colspan",2)
tableBodyEl.append(tableRowLoading);
let total;
let promise1=new Promise((resolve,reject)=>
	{
		let delay1=Math.ceil(Math.random()*3);
		setTimeout(()=>{
			resolve(delay1)
		},delay1*1000)
	});

let promise2=new Promise((resolve,reject)=>
	{
		let delay2=Math.ceil(Math.random()*3);
		setTimeout(()=>{
			resolve(delay2)
		},delay2*1000)
	});

let promise3=new Promise((resolve,reject)=>
	{
		let delay3=Math.ceil(Math.random()*3);
		setTimeout(()=>{
			resolve(delay3)
		},delay3*1000)
	});


Promise.all([promise1,promise2,promise3]).then((res)=>
	{
total=Math.max(...res);
console.log(total)

		res.forEach((item,index)=>
			{
				let tableRow=document.createElement("tr");
        let tableData1=document.createElement("td");
				let tableData2=document.createElement("td");
				tableData1.textContent=`Promise${index+1}`;
				tableData2.textContent=Number(item);
				tableRow.append(tableData1);
				tableRow.append(tableData2);
				tableBodyEl.append(tableRow);
			})
	}).catch((err)=>console.log(err.message)).finally(()=>
  {
  tableRowLoading.remove();
  
        let tableRow=document.createElement("tr");
        let tableData1=document.createElement("td");
				let tableData2=document.createElement("td");
				tableData1.textContent="Total";
				tableData2.textContent=`${total}`;
				tableRow.append(tableData1);
				tableRow.append(tableData2);
				tableBodyEl.append(tableRow);
  })


