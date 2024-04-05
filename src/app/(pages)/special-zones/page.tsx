'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { Button } from '../../_components/Button'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'

const SpecialZones = () => {
  const [isFinlandExpanded, setFinlandIsExpanded] = useState(false)
  const [iscroatiaExpanded, setCroatiaIsExpanded] = useState(false)
  const [isDenmarkExpanded, setDenmarkIsExpanded] = useState(false)
  const [isEstoniaExpanded, setEstoniaIsExpanded] = useState(false)
  const [isFranceExpanded, setFranceIsExpanded] = useState(false)
  const [isGreeceExpanded, setGreeceIsExpanded] = useState(false)
  const [isItalyExpanded, setItalyIsExpanded] = useState(false)
  const [isHolandExpanded, setHolandIsExpanded] = useState(false)
  const [isPortugalExpanded, setPortugalIsExpanded] = useState(false)
  const [isSpainExpanded, setSpainIsExpanded] = useState(false)
  const [isSweedenExpanded, setSweedenIsExpanded] = useState(false)
  const [isGermanyExpanded, setGermanyIsExpanded] = useState(false)

  const finlandToggleExpand = () => {
    setFinlandIsExpanded(prevState => !prevState)
  }

  const croatiaToggleExpand = () => {
    setCroatiaIsExpanded(prevState => !prevState)
  }

  const denmarkToggleExpand = () => {
    setDenmarkIsExpanded(prevState => !prevState)
  }

  const estoniaToggleExpand = () => {
    setEstoniaIsExpanded(prevState => !prevState)
  }

  const franceToggleExpand = () => {
    setFranceIsExpanded(prevState => !prevState)
  }

  const greeceToggleExpand = () => {
    setGreeceIsExpanded(prevState => !prevState)
  }

  const italyToggleExpand = () => {
    setItalyIsExpanded(prevState => !prevState)
  }

  const holandToggleExpand = () => {
    setHolandIsExpanded(prevState => !prevState)
  }

  const portugalToggleExpand = () => {
    setPortugalIsExpanded(prevState => !prevState)
  }

  const spainToggleExpand = () => {
    setSpainIsExpanded(prevState => !prevState)
  }

  const swedeenToggleExpand = () => {
    setSweedenIsExpanded(prevState => !prevState)
  }

  const germanyToggleExpand = () => {
    setGermanyIsExpanded(prevState => !prevState)
  }

  return (
    <Gutter>
      <h1 className="text-center mt-10 mb-3">DPD Special Zones</h1>
      <p className="text-2xl text-center mb-10">🏴🏳‍🌈🎏🚩</p>

      <div className="flex gap-4 items-center ">
        <button
          onClick={finlandToggleExpand}
          className="border w-full rounded-md mb-2 py-2 px-4 bg-gray-200"
        >
          Click to show Findland Codes
        </button>
      </div>
      {isFinlandExpanded && (
        <table className="mb-2 border-collapse w-full">
          <thead>
            <tr className="border-solid border-1 border-gray-400">
              <th className="p-2">Finland</th>
              <th className="p-2 text-right">Weight Range</th>
              <th className="p-2 text-right">Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/2 border-l-0 border-solid border-1 border-gray-400" rowSpan={5}>
                <p className="">
                  10270, 10600, 00190, 21195, 21650, 21660, 21670, 21680, 21710, 21720, 21740,
                  21750, 21760, 21770, 23390, 25230, 25940, 25950, 25960, 59800, 59810, 59820 07360,
                  07370, 07390, 75500, 75530, 75650, 75680, 75700, 75710, 75740, 75770, 75790,
                  75840, 75890, 75930, 75940, 75970, 75990, 80100, 80110 61500, 61520, 61550, 61560,
                  61840, 64100, 64140, 64200, 64210, 64220, 64230, 64240, 64250, 64260, 64300,
                  64320, 64350, 64370, 64440, 64450 64460, 64480, 64490, 64510, 64530, 64550, 64610,
                  64700, 64720, 64740, 64760, 64770, 64810, 64820, 64830, 64840, 64850, 64900,
                  64930, 65100 65130, 65170, 65200, 65230, 65280, 65300, 65320, 65350, 65370, 65380,
                  65410, 65450, 65460, 65470, 65480, 65520, 65610, 65630, 65650, 65710 65730, 65760,
                  65800, 65870, 65920, 65930, 65970, 66100, 66140, 66160, 66200, 66210, 66220,
                  66230, 66240, 66260, 66270, 66280, 66290, 66295 66300, 66320, 66330, 66340, 66350,
                  66360, 66370, 66400, 66420, 66430, 66440, 66450, 66460, 66470, 66500, 66510,
                  66520, 66530, 66540, 66550 66560, 66580, 66590, 66600, 66640, 66660, 66680, 66710,
                  66730 80130, 80140, 80160, 80170, 80200, 80210, 80220, 80230, 80260, 80330, 80400,
                  80510, 80710, 80770, 80780, 80790, 80850, 80910, 81100, 81120 81160, 81200, 81210,
                  81220, 81230, 81235, 81260, 81270, 81280, 81290, 81295, 81320, 81330, 81350,
                  81360, 81390, 81420, 81430, 81450, 81460 81470, 81560, 81570, 81590, 81650, 81660,
                  81700, 81720, 81750, 81810, 81820, 81850, 81860, 81950, 81970, 82110, 82120,
                  82140, 82160, 82170 82180, 82200, 82210, 82220, 82290, 82300, 82310, 82335, 82350,
                  82360, 82380, 82395, 82430, 82460, 82490, 82500, 82510, 82580, 82590, 82600 82655,
                  82660, 82670, 82675, 82685, 82710, 82730, 82750, 82760, 82770, 82815, 82820,
                  82830, 82840, 82850, 82865, 82870, 82880, 82900, 82915 82960, 82967, 82980, 83100,
                  83130, 83140, 83150, 83160, 83320, 83330, 83340, 83400, 83430, 83450, 83460,
                  83480, 83500, 83550, 83630, 83660 83700, 83720, 83750, 83760, 83780, 83825, 83830,
                  83835, 83840, 83855, 83870, 83880, 83900, 83910, 83915, 83940, 83950, 83960,
                  83985, 90480
                </p>
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                0-1kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                72€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                1-3kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                76€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                3-10kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                85€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                10-20kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                92€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                20-31.5kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                97€
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="flex gap-4 items-center ">
        <button
          onClick={estoniaToggleExpand}
          className="border rounded-md mb-2 py-2 px-4 w-full bg-gray-200"
        >
          Click to show Estonia Codes
        </button>
      </div>
      {isEstoniaExpanded && (
        <table className="mb-2 border-collapse w-full">
          <thead>
            <tr className="border-solid border-1 border-gray-400">
              <th className="p-2">Estonia</th>
              <th className="p-2 text-right">Weight Range</th>
              <th className="p-2 text-right">Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/2 border-l-0 border-solid border-1 border-gray-400" rowSpan={5}>
                <p className="">
                  07000-07999, 62601, 88001-88005, 91217, 91301-91320, 92001-92420, 93001-94799,
                  96027, 96098, 96106
                </p>
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                0-1kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                28€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                1-3kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                33€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                3-10kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                45€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                10-20kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                51€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                20-31.5kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                55€
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="flex gap-4 items-center ">
        <button
          onClick={denmarkToggleExpand}
          className="border w-full rounded-md py-2 px-4 bg-gray-200 mb-2"
        >
          Click to show Denmark Codes
        </button>
      </div>
      {isDenmarkExpanded && (
        <table className="mb-2 border-collapse w-full">
          <thead>
            <tr className="border-solid border-1 border-gray-400">
              <th className="p-2">Denmark</th>
              <th className="p-2 text-right">Weight Range</th>
              <th className="p-2 text-right">Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/2 border-l-0 border-solid border-1 border-gray-400" rowSpan={5}>
                <p className="">
                  3700, 3720, 3730, 3740, 3751, 3760, 3770, 3782, 3790, 4592, 5960, 5970, 5985,
                  6720, 7884, 8305,8592, 9940, 9950, 9960
                </p>
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                0-1kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                49€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                1-3kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                53€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                3-10kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                62€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                10-20kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                66€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                20-31.5kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                70€
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="flex gap-4 items-center ">
        <button
          onClick={croatiaToggleExpand}
          className="border mb-2 w-full rounded-md py-2 px-4 bg-gray-200"
        >
          Click to show Croatia Codes
        </button>
      </div>
      {iscroatiaExpanded && (
        <table className="mb-2 border-collapse w-full">
          <thead>
            <tr className="border-solid border-1 border-gray-400">
              <th className="p-2">Croatia</th>
              <th className="p-2 text-right">Weight Range</th>
              <th className="p-2 text-right">Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/2 border-l-0 border-solid border-1 border-gray-400" rowSpan={5}>
                <p className="">
                  20221- 20226, 20260-20264,20270-20275,20289,20290, 21220, 21223-21225,
                  21400-21405, 21410, 21412, 21413, 21420,20260, 20263, 20264, 20270- 20275 21423-
                  21426, 21430-21432, 21450, 21454, 21460, 21462, 21463, 21465- 21469, 21480, 21483,
                  21485, 22000, 22010, 22020,22030,22202-22206,22211-22215,22221-22223,22231-22236
                  22240,22242-22244, 22243, 22244,22300-22307,22310-22312,22317-22324, 23212, 23234,
                  23249-23251, 23262- 23264, 23271-23275, 23281-23287, 23291-23296, 51280-51282,
                  51500, 51511- 51517, 51521- 51523, 51542,51550- 51557,51559, 51561-51564,53291,
                  53294, 53296-53297
                </p>
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                0-1kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                47€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                1-3kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                51€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                3-10kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                61€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                10-20kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                67€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                20-31.5kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                72€
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="flex gap-4 items-center ">
        <button
          onClick={franceToggleExpand}
          className="border mb-2 w-full rounded-md py-2 px-4 bg-gray-200"
        >
          Click to show France Codes
        </button>
      </div>
      {isFranceExpanded && (
        <table className="mb-2 border-collapse w-full">
          <thead>
            <tr className="border-solid border-1 border-gray-400">
              <th className="p-2">France</th>
              <th className="p-2 text-right">Weight Range</th>
              <th className="p-2 text-right">Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/2 border-l-0 border-solid border-1 border-gray-400" rowSpan={5}>
                <p className="">
                  17111, 17123, 17190, 17310, 17370, 17410, 17480, 17550, 17580, 17590, 17630,
                  17650, 17670, 17740,, 17840, 17880, 17940 20000-20999, 22870,29242, 29253, 29259,
                  29990, 56360, 56590, 56780, 56840, 85330, 85350
                </p>
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                0-1kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                37€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                1-3kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                41€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                3-10kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                49€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                10-20kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                53€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                20-31.5kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                58€
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="flex gap-4 items-center ">
        <button
          onClick={germanyToggleExpand}
          className="border mb-2 w-full rounded-md py-2 px-4 bg-gray-200"
        >
          Click to show Germany Codes
        </button>
      </div>
      {isGermanyExpanded && (
        <table className="mb-2 border-collapse w-full">
          <thead>
            <tr className="border-solid border-1 border-gray-400">
              <th className="p-2">Germany</th>
              <th className="p-2 text-right">Weight Range</th>
              <th className="p-2 text-right">Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/2 border-l-0 border-solid border-1 border-gray-400" rowSpan={5}>
                <p className="">
                  18565 25845, 25846, 25847, 25849, 25859, 25863, 25869, 25929-25933, 25938-25942,
                  25946-25949 25952-25955, 25961-25970, 25980, 25985-25990, 25992-25994, 25996-
                  25999 26465, 26474, 26486, 26548, 26571, 26579, 26757, 27498 78263-78266; 83256
                </p>
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                0-1kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                26€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                1-3kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                31€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                3-10kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                45€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                10-20kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                49€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                20-31.5kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                53€
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="flex gap-4 items-center ">
        <button
          onClick={greeceToggleExpand}
          className="border mb-2 w-full rounded-md py-2 px-4 bg-gray-200"
        >
          Click to show Greece Codes
        </button>
      </div>
      {isGreeceExpanded && (
        <table className="mb-2 border-collapse w-full">
          <thead>
            <tr className="border-solid border-1 border-gray-400">
              <th className="p-2">Greece</th>
              <th className="p-2 text-right">Weight Range</th>
              <th className="p-2 text-right">Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/2 border-l-0 border-solid border-1 border-gray-400" rowSpan={5}>
                <p className="">
                  18010, 18020, 18040, 18050, 28000-29999, 34003-37005, 49000-49999, 64002, 68002,
                  70000-74999, 80000-85999
                </p>
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                0-1kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                52€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                1-3kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                56€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                3-10kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                65€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                10-20kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                71€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                20-31.5kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                76€
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="flex gap-4 items-center ">
        <button
          onClick={italyToggleExpand}
          className="border mb-2 w-full rounded-md py-2 px-4 bg-gray-200"
        >
          Click to show Italy Codes
        </button>
      </div>
      {isItalyExpanded && (
        <table className="mb-2 border-collapse w-full">
          <thead>
            <tr className="border-solid border-1 border-gray-400">
              <th className="p-2">Italy</th>
              <th className="p-2 text-right">Weight Range</th>
              <th className="p-2 text-right">Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/2 border-l-0 border-solid border-1 border-gray-400" rowSpan={5}>
                <p className="">
                  22060, 23030, 04020, 04027, 07000-09999, 30010, 30012, 30100, 30121-30126,
                  30131-30133, 30135, 30141, 57030-57039, 58012-58013, 58018, 71040, 80070-80071,
                  80073-80077, 80079, 90010, 91017, 91023, 92010, 98050, 98052, 98055
                </p>
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                0-1kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                43€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                1-3kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                47€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                3-10kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                55€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                10-20kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                60€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                20-31.5kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                64€
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="flex gap-4 items-center ">
        <button
          onClick={holandToggleExpand}
          className="border mb-2 w-full rounded-md py-2 px-4 bg-gray-200"
        >
          Click to show Nehterland Codes
        </button>
      </div>
      {isHolandExpanded && (
        <table className="mb-2 border-collapse w-full">
          <thead>
            <tr className="border-solid border-1 border-gray-400">
              <th className="p-2">Netherland</th>
              <th className="p-2 text-right">Weight Range</th>
              <th className="p-2 text-right">Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/2 border-l-0 border-solid border-1 border-gray-400" rowSpan={5}>
                <p className="">
                  1156AA-1156ZZ, 1790AA- 1797ZZ 8881AA- 8884ZZ, 8891AA- 8897ZZ, 8899AA-8899ZZ,
                  9161AA-9164ZZ, 9166AA-9166ZZ
                </p>
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                0-1kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                28€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                1-3kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                33€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                3-10kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                47€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                10-20kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                51€
              </td>
            </tr>
            <tr>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                20-31.5kg
              </td>
              <td className="border-l-0 border-r-0 border-solid border-gray-400 text-right p-2">
                55€
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </Gutter>
  )
}

export default SpecialZones
