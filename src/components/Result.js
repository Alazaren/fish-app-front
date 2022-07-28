import React from "react";
import Classificationelement from "./Classificationelement";


function Result({clasificationResult}) {

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
    }
 

    let renderedList = '';
    if(clasificationResult) {
        const probs = clasificationResult.probs;
        const keys = Object.keys(probs);
        keys.sort((a, b) => probs[b] - probs[a]);

        renderedList = keys.map(key => {
            return (
                <Classificationelement key={key} name={mapping[key]} value={probs[key]} />
            );
        });

        var prob = Math.round(probs[clasificationResult.category]*100)

        return (
            <div className="result">
                <div className="resultfish">На фото {mapping[clasificationResult.category]} з вірогідністю {prob}%.</div>
                <div>Детальне передбачення:</div>
                <div>{renderedList}</div>
            </div>     
            
        
        )
      
    
    }
    return (
        <div></div>
    )
}

export default Result;