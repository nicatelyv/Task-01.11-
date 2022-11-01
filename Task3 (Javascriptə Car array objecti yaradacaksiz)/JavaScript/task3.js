var masinlar = [
    {
        brand:"Mercedes",
        model:"C200",
        color:"black",
        year:"2000",

    },
    {
        brand:"Mercedes",
        model:"C300",
        color:"white",
        year:"2011", 
    },
    {
        brand:"BMW",
        model:"328i",
        color:"black",
        year:"2020",
    },
    {
        brand:"Toyota",
        model:"Camry",
        color:"metallic",
        year:"2018",
    },
    {
        brand:"Hyundai",
        model:"Sonata",
        color:"grey",
        year:"2015",
    }
]
for (let i = 0; i < masinlar.length; i++) 
{
    if (masinlar[i].year>2010) 
    {
        console.log(masinlar[i].brand , masinlar[i].model)
    }

    
}
