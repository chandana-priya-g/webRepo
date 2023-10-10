
import MenuCard from "./MenuCard";

function Menu() {

    const menuData = [
        {
            title:"chicken",
            describtion: "",
            price: "",
            
        },
        {
            title:"chicken",
            describtion: "",
            price: ""
            
        },
        {
            title:"chicken",
            describtion: "",
            price: ""
            
        },{
            title:"chicken",
            describtion: "",
            price: ""
            
        },
        {
            title:"chicken",
            describtion: "",
            price: ""
            
        }
    ]

    const result = [];

    menuData.forEach(item => {
        result.push(
            <div>
                <MenuCard data= {item} />
            </div>
        )
    });

  return (result );
}

export default Menu;