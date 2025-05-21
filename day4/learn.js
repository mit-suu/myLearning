const companies = [
{ id :1, name:"Company One", category:"Finance", start:1981, end:2004},
{ id :2,name:"Company Two", category:"Retail", start:1992, end:2008},
{ id :3,name:"Company Three", category:"Auto", start:1999, end:2007},
{ id :4,name:"Company Four", category:"Retail", start:1989, end:2010},
{ id :5,name:"Company Five", category:"Technology", start:2009, end:2014},
{ id :6,name:"Company Six", category:"Finance", start:1987, end:2010},
{ id :7,name:"Company Seven", category:"Auto", start:1986, end:1996},
{ id :8,name:"Company Eight", category:"Technology", start:2011, end:2016},
{ id :9,name:"Company Nine", category:"Retail", start:1981, end:1989}
];

//map lay ra name
var CompanyNames = companies.map(company => {
  return company.name; // cần return!
});
console.log(CompanyNames);

//filter >1988
console.log(companies.filter(company => company.start > 1988 ))

//add 
companies.push({id :10 , name: 'Company Ten', category: 'Finance', start: 1981, end: 2004})

//map de update 
function companieHandlerUpdate(Company){
if (Company.id===5) {
    return {
    id: Company.id,
    name: 'Updated Company Five',
    category: Company.category,
    start: Company.start,
    end: 2022 
    }
}return Company;
}
console.log(companies.map(companieHandlerUpdate))

// remove id =3 
console.log(companies.reduce((acc,curr)=>{
acc.push(curr)
if(curr.id===3) acc.pop(curr)
return acc
},[]))