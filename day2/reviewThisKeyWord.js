const Concho={
    name: 'cho co',
    color: 'vang',
    weight: '30',
    sua(){
        console.log('gau gau')
    },
    can(){
        console.log('gru grugru')
    }
}

function car (name,color){
this.name=name
this.color=color
}
console.log(Concho.sua())
console.log(Concho.can())