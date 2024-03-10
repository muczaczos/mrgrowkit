'use client'

import React, { useState } from 'react'

import { InpostGeoWidget } from '../../../../_components/InpostGeoWidget'

import classes from './index.module.scss'

const ShippingMethods = () => {
  const [selectedCourier, setSelectedCourier] = useState('')
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false)

  const handleCourierChange = event => {
    setSelectedCourier(event.target.value)
    setShowAdditionalInfo(event.target.value === 'paczkomat')
  }

  const afterPointSelected = point => {
    alert('Selected point: ' + point.name)
  }

  return (
    <div>
      <label>
        <input
          type="radio"
          value="kurier dpd"
          checked={selectedCourier === 'kurier dpd'}
          onChange={handleCourierChange}
        />
        Kurier DPD
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="kurier dhl"
          checked={selectedCourier === 'kurier dhl'}
          onChange={handleCourierChange}
        />
        Kurier DHL
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="kurier inpost"
          checked={selectedCourier === 'kurier inpost'}
          onChange={handleCourierChange}
        />
        Kurier InPost
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="paczkomat"
          checked={selectedCourier === 'paczkomat'}
          onChange={handleCourierChange}
        />
        Paczkomat
      </label>
      {showAdditionalInfo && (
        <div className={classes.geowidget}>
          <InpostGeoWidget
            token={
              'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzQlpXVzFNZzVlQnpDYU1XU3JvTlBjRWFveFpXcW9Ua2FuZVB3X291LWxvIn0.eyJleHAiOjIwMjU0NDA3MTksImlhdCI6MTcxMDA4MDcxOSwianRpIjoiYTY3OTBmYjgtMWE2YS00OWFhLTkzZmYtNjgyZjA1ZjEyMTUyIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pbnBvc3QucGwvYXV0aC9yZWFsbXMvZXh0ZXJuYWwiLCJzdWIiOiJmOjEyNDc1MDUxLTFjMDMtNGU1OS1iYTBjLTJiNDU2OTVlZjUzNTo3T3RpT1BtazhKOTNPYmlSeEtELXg1RkNNbnNMTmVMUS1fVkRjZDNLMlFvIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2hpcHgiLCJzZXNzaW9uX3N0YXRlIjoiZTZmNjBhNDktYWE1OS00YzYyLTkyNmQtMmQzMjI0MzY0MWUzIiwic2NvcGUiOiJvcGVuaWQgYXBpOmFwaXBvaW50cyIsInNpZCI6ImU2ZjYwYTQ5LWFhNTktNGM2Mi05MjZkLTJkMzIyNDM2NDFlMyIsImFsbG93ZWRfcmVmZXJyZXJzIjoibXJncm93a2l0LmNvbSIsInV1aWQiOiJiNDlhMGI5NC0zM2M2LTQ0ZDctOTAzMy0zMjRkMzk2ZGE1ODUifQ.DsTR0TPrm_FxCSPOv6kCf4pfzzHAFUQHT4RxXxz7QjYYW3F0ACLruybtTsPH1yrHJfFjgX7ebPcdhpj8AUNJTqz0jYnx7qsnUjfoyjO2kUQpHUHymVR9tY29fKl4hjE0IvTGnf6GF0jJUTbfYF2cK3gWDYjHeb17sbLGoTvv8YdPMjZpyPcTWnTzgzKvLOtwaC_PJKfexnolaEKMui2vS876_EaC9C9wSBIgSmc_TIMWJC2o0aG1XG4gulzVRyH41-KDvhHXz1OMMaZsjGuwvrVupPZ5hr5we_CUKC_fAIsMSL9YkvUSzCO6j41FGpFCc5FrBVdg1RiIHoz2cH1iIw'
            }
            language="pl"
            config="parcelcollect"
            onPoint={afterPointSelected}
          />
        </div>
      )}
    </div>
  )
}

export default ShippingMethods
