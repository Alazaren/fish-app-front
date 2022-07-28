import React from 'react'

const friendOptions = [
  {
    key: 'desna',
    text: 'Риба річки Десна',
    value: 'desna',
  }
]

const RegionSelection = () => (
  <div className='selection'>
    <div className='region-title'>Регіон:</div>
    <select className='region-select'>
        <option selected value={'desna'}>Риба річки Десна</option>
    </select>
  </div>
)

export default RegionSelection




// <Dropdown
// icon='world'
// labeled
// button
// className='icon'
// options={friendOptions}
// defaultValue={friendOptions[0].value}
// />
// <Popup content='Підтримується риба вибраного регіону. Якщо це наприклад конкретна водойма, то тільки види що присутні в цій водоймі можуть бути визначені.' trigger={<Button icon='question circle outline' />} />
