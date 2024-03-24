import React, { useMemo, useState } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector({ setCountry }) {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
    setCountry(value.value)
  }

  return <Select options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector
