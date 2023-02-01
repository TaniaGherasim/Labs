import { useState } from "react";
import { Pet } from "../models/Pet";

function ArraysEx(){
    const [colors, setColor] = useState<string[]>(['red', 'yellow', 'orange', 'blue']);
    const [pets, setPets] = useState<Pet[]>(
        [{id:1, name:'Fluffy', type:'Cat'},
        {id:2, name:'Dory', type:'Fish'},
        {id:3, name:'Milo', type:'Dog'}]  
        )

    function addColor(color:string) : void {
        //spreads out the exisitng array of colors and adds the new color to the end of the array
        setColor([...colors, color]);
    }
 
    return(
        <div className="ArraysEx">
            <ol>
                { colors.map((color, index) => <li key={index}>{color}</li>)}
            </ol>
            <button onClick={() => addColor('Violet')}>Violet</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet) => <tr key={pet.id}><td>{pet.name}</td><td>{pet.type}</td></tr>)}
                </tbody>

            </table>
        </div>
    )
}

export default ArraysEx;