import React from "react";
import Classificationelement from "./Classificationelement";
import TargetElement from "./TargetElement";


function Result({clasificationResult, imageRender}) {

    const mapping = {
        'Common bream': 'Лящ звичайний',
        'Blue bream': 'Синець',
        'White-eye bream': 'Білоочка',
        'Silver bream': 'Плоскирка',
        'Common roach': 'Плотва',
        'Eurasian ruffe': 'Йорш',
        'Common carp': 'Короп',
        'European perch': 'Окунь',
        'Crucian carp': 'Карась',
        'Northern pike': 'Щука звичайна',
        'Wels catfish': 'Сом європейський',
        'Tench' : 'Лин',
        'European chub' : 'Головень',
        'Common rudd' : 'Краснопірка звичайна'
    }
 

    let renderedList = '';
    if(clasificationResult) {

        var targetBoxes = clasificationResult.map(element => {
            return (
                <TargetElement element={element}/>
            );  
        })
        
        // const probs = clasificationResult.probs;
        // const keys = Object.keys(probs);
        // keys.sort((a, b) => probs[b] - probs[a]);

        // renderedList = keys.map(key => {
        //     return (
        //         <Classificationelement key={key} name={mapping[key]} value={probs[key]} />
        //     );
        // });

        // var prob = Math.round(probs[clasificationResult.category]*100)

        return (
            <div>
                {imageRender &&
                    <div className="image-result">
                        <img  src={imageRender} alt="preview"  />
                        {targetBoxes}      
                    </div>
                }
            </div>
            // <div className="result">
            //     <div className="resultfish">На фото {mapping[clasificationResult.category]} з вірогідністю {prob}%.</div>
            //     <div>Детальне передбачення:</div>
            //     <div>{renderedList}</div>
            // </div>     
            
        
        )
      
    
    }
    return (
        <div></div>
    )
}

export default Result;