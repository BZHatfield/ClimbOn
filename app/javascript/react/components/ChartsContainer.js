import React, { useState, useEffect } from 'react'
import { Chart } from 'react-google-charts'

const ChartsContainer = (props) => {
  const [ climbs, setClimbs ] = useState([])

  let userId = props.match.params.id

  useEffect(() => {
    window.scrollTo(0, 0)

    fetch(`/api/v1/charts/${userId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(response => {
      setClimbs(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let boulderSuccessHeader = ['Grade', 'Number of Completions']
  let ropeSuccessHeader = ['Grade', 'Number of Completions']
  let boulderRateHeader = ['Grade', 'Rate of Completions']
  let ropeRateHeader = ['Grade', 'Rate of Completions']
  let wallHeader = ['Wall Type', 'Times']
  let verticalNumber = 0
  let overhangNumber = 0
  let slabNumber = 0
  let successFiveEight = 0
  let successFiveNine = 0
  let successFiveTenMinus = 0
  let successFiveTenPlus = 0
  let successFiveElevenMinus = 0
  let successFiveEleven = 0
  let successFiveElevenPlus = 0
  let successFiveTwelveMinus = 0
  let successFiveTwelve = 0
  let successFiveTwelvePlus = 0
  let successFiveThirteenMinus = 0
  let successFiveThirteenPlus = 0
  let successFiveFourteenMinus = 0
  let successFiveFourteenPlus = 0
  let totalFiveEight = 0
  let totalFiveNine = 0
  let totalFiveTenMinus = 0
  let totalFiveTenPlus = 0
  let totalFiveElevenMinus = 0
  let totalFiveEleven = 0
  let totalFiveElevenPlus = 0
  let totalFiveTwelveMinus = 0
  let totalFiveTwelve = 0
  let totalFiveTwelvePlus = 0
  let totalFiveThirteenMinus = 0
  let totalFiveThirteenPlus = 0
  let totalFiveFourteenMinus = 0
  let totalFiveFourteenPlus = 0
  let vBTotal = 0
  let v0Total = 0
  let v1Total = 0
  let v2Total = 0
  let v3Total = 0
  let v4Total = 0
  let v5Total = 0
  let v6Total = 0
  let v7Total = 0
  let v8Total = 0
  let v9Total = 0
  let v10Total = 0
  let v11Total = 0
  let v12Total = 0
  let vBSuccess = 0
  let v0Success = 0
  let v1Success = 0
  let v2Success = 0
  let v3Success = 0
  let v4Success = 0
  let v5Success = 0
  let v6Success = 0
  let v7Success = 0
  let v8Success = 0
  let v9Success = 0
  let v10Success = 0
  let v11Success = 0
  let v12Success = 0


  climbs.map((climb) => {
    if (climb.wall_type == "Vertical") {
      verticalNumber++
    }
    if (climb.wall_type == "Overhang") {
      overhangNumber++
    }
    if (climb.wall_type == "Slab") {
      slabNumber++
    }
    if (climb.grade == "VB") {
      vBTotal++
    }
    if (climb.grade == "V0") {
      v0Total++
    }
    if (climb.grade == "V1") {
      v1Total++
    }
    if (climb.grade == "V2") {
      v2Total++
    }
    if (climb.grade == "V3") {
      v3Total++
    }
    if (climb.grade == "V4") {
      v4Total++
    }
    if (climb.grade == "V5") {
      v5Total++
    }
    if (climb.grade == "V6") {
      v6Total++
    }
    if (climb.grade == "V7") {
      v7Total++
    }
    if (climb.grade == "V8") {
      v8Total++
    }
    if (climb.grade == "V9") {
      v9Total++
    }
    if (climb.grade == "V10") {
      v10Total++
    }
    if (climb.grade == "V11") {
      v11Total++
    }
    if (climb.grade == "V12") {
      v12Total++
    }
    if (climb.grade == "5.8") {
      totalFiveEight++
    }
    if (climb.grade == "5.9") {
      totalFiveNine++
    }
    if (climb.grade == "5.10-") {
      totalFiveTenMinus++
    }
    if (climb.grade == "5.10+") {
      totalFiveTenPlus++
    }
    if (climb.grade == "5.11-") {
      totalFiveElevenMinus++
    }
    if (climb.grade == "5.11") {
      totalFiveEleven++
    }
    if (climb.grade == "5.11+") {
      totalFiveElevenPlus++
    }
    if (climb.grade == "5.12-") {
      totalFiveTwelveMinus++
    }
    if (climb.grade == "5.12") {
      totalFiveTwelve++
    }
    if (climb.grade == "5.12+") {
      totalFiveTwelvePlus++
    }
    if (climb.grade == "5.13-") {
      totalFiveThirteenMinus++
    }
    if (climb.grade == "5.13+") {
      totalFiveThirteenPlus++
    }
    if (climb.grade == "5.14-") {
      totalFiveFourteenMinus++
    }
    if (climb.grade == "5.14+") {
      totalFiveFourteenPlus++
    }
    if (climb.grade == "VB" && climb.completed === true) {
      vBSuccess++
    }
    if (climb.grade == "V0" && climb.completed === true) {
      v0Success++
    }
    if (climb.grade == "V1" && climb.completed === true) {
      v1Success++
    }
    if (climb.grade == "V2" && climb.completed === true) {
      v2Success++
    }
    if (climb.grade == "V3" && climb.completed === true) {
      v3Success++
    }
    if (climb.grade == "V4" && climb.completed === true) {
      v4Success++
    }
    if (climb.grade == "V5" && climb.completed === true) {
      v5Success++
    }
    if (climb.grade == "V6" && climb.completed === true) {
      v6Success++
    }
    if (climb.grade == "V7" && climb.completed === true) {
      v7Success++
    }
    if (climb.grade == "V8" && climb.completed === true) {
      v8Success++
    }
    if (climb.grade == "V9" && climb.completed === true) {
      v9Success++
    }
    if (climb.grade == "V10" && climb.completed === true) {
      v10Success++
    }
    if (climb.grade == "V11" && climb.completed === true) {
      v11Success++
    }
    if (climb.grade == "V12" && climb.completed === true) {
      v12Success++
    }
    if (climb.grade == "5.8" && climb.completed === true) {
      successFiveEight++
    }
    if (climb.grade == "5.9" && climb.completed === true) {
      successFiveNine++
    }
    if (climb.grade == "5.10-" && climb.completed === true) {
      successFiveTenMinus++
    }
    if (climb.grade == "5.10+" && climb.completed === true) {
      successFiveTenPlus++
    }
    if (climb.grade == "5.11-" && climb.completed === true) {
      successFiveElevenMinus++
    }
    if (climb.grade == "5.11" && climb.completed === true) {
      successFiveEleven++
    }
    if (climb.grade == "5.11+" && climb.completed === true) {
      successFiveElevenPlus++
    }
    if (climb.grade == "5.12-" && climb.completed === true) {
      successFiveTwelveMinus++
    }
    if (climb.grade == "5.12" && climb.completed === true) {
      successFiveTwelve++
    }
    if (climb.grade == "5.12+" && climb.completed === true) {
      successFiveTwelvePlus++
    }
    if (climb.grade == "5.13-" && climb.completed === true) {
      successFiveThirteenMinus++
    }
    if (climb.grade == "5.13+" && climb.completed === true) {
      successFiveThirteenPlus++
    }
    if (climb.grade == "5.14-" && climb.completed === true) {
      successFiveFourteenMinus++
    }
    if (climb.grade == "5.14+" && climb.completed === true) {
      successFiveFourteenPlus++
    }
  })

  let rateFiveEight = successFiveEight/totalFiveEight
  let rateFiveNine = successFiveNine/totalFiveNine
  let rateFiveTenMinus = successFiveTenMinus/totalFiveTenMinus
  let rateFiveTenPlus = successFiveTenPlus/totalFiveTenPlus
  let rateFiveElevenMinus = successFiveElevenMinus/totalFiveElevenMinus
  let rateFiveEleven = successFiveEleven/totalFiveEleven
  let rateFiveElevenPlus = successFiveElevenPlus/totalFiveElevenPlus
  let rateFiveTwelveMinus = successFiveTwelveMinus/totalFiveTwelveMinus
  let rateFiveTwelve = successFiveTwelve/totalFiveTwelve
  let rateFiveTwelvePlus = successFiveTwelvePlus/totalFiveTwelvePlus
  let rateFiveThirteenMinus = successFiveThirteenMinus/totalFiveThirteenMinus
  let rateFiveThirteenPlus = successFiveThirteenPlus/totalFiveThirteenPlus
  let rateFiveFourteenMinus = successFiveFourteenMinus/totalFiveFourteenMinus
  let rateFiveFourteenPlus = successFiveFourteenPlus/totalFiveFourteenPlus

  let vBRate = vBSuccess / vBTotal
  let v0Rate = v0Success / v0Total
  let v1Rate = v1Success / v1Total
  let v2Rate = v2Success / v2Total
  let v3Rate = v3Success / v3Total
  let v4Rate = v4Success / v4Total
  let v5Rate = v5Success / v5Total
  let v6Rate = v6Success / v6Total
  let v7Rate = v7Success / v7Total
  let v8Rate = v8Success / v8Total
  let v9Rate = v9Success / v9Total
  let v10Rate = v10Success / v10Total
  let v11Rate = v11Success / v11Total
  let v12Rate = v12Success / v12Total

  let wallData = [wallHeader, ['Vertical', verticalNumber],
  ['Overhang', overhangNumber], ['Slab', slabNumber]]

  let boulderSuccessData = [boulderSuccessHeader, ['VB', vBSuccess],
  ['V0', v0Success], ['V1', v1Success], ['V2', v2Success], ['V3', v3Success],
  ['V4', v4Success], ['V5', v5Success], ['V6', v6Success], ['V7', v7Success],
  ['V8', v8Success], ['V9', v9Success], ['V10', v10Success],
  ['V11', v11Success], ['V12', v12Success]]

  let ropeSuccessData = [ropeSuccessHeader, ['5.8', successFiveEight],
  ['5.9', successFiveNine], ['5.10-', successFiveTenMinus],
  ['5.10+', successFiveTenPlus], ['5.11-', successFiveElevenMinus],
  ['5.11', successFiveEleven], ['5.11+', successFiveElevenPlus],
  ['5.12-', successFiveTwelvePlus], ['5.12', successFiveTwelve],
  ['5.12+', successFiveTwelvePlus], ['5.13-', successFiveThirteenMinus],
  ['5.13+', successFiveThirteenPlus], ['5.14-', successFiveFourteenMinus],
  ['5.14+', successFiveFourteenPlus]]

  let ropeRateData = [ropeRateHeader, ['5.8', rateFiveEight],
  ['5.9', rateFiveNine], ['5.10-', rateFiveTenMinus],
  ['5.10+', rateFiveTenPlus], ['5.11-', rateFiveElevenMinus],
  ['5.11', rateFiveEleven], ['5.11+', rateFiveElevenPlus],
  ['5.12-', rateFiveTwelvePlus], ['5.12', rateFiveTwelve],
  ['5.12+', rateFiveTwelvePlus], ['5.13-', rateFiveThirteenMinus],
  ['5.13+', rateFiveThirteenPlus], ['5.14-', rateFiveFourteenMinus],
  ['5.14+', rateFiveFourteenPlus]]

  let boulderRateData = [boulderRateHeader, ['VB', vBRate],
  ['V0', v0Rate], ['V1', v1Rate], ['V2', v2Rate], ['V3', v3Rate],
  ['V4', v4Rate], ['V5', v5Rate], ['V6', v6Rate], ['V7', v7Rate],
  ['V8', v8Rate], ['V9', v9Rate], ['V10', v10Rate],
  ['V11', v11Rate], ['V12', v12Rate]]

  return(
    <div className="log-in">
      <h1>Your Climbing Charts</h1>
      <div className="grid-x">
        <div className="card">
          <div className="chart-title">
            <h3>Wall Types Chart</h3>
          </div>
          <Chart
            chartType="PieChart"
            data={wallData}
            options={{}}
            graph_id="PieChart"
            width="50vw"
            height="50vh"
          />
        </div>
        <div className="card">
          <div className="chart-title">
            <h3>Successes Rate at Each Boulder Grade</h3>
          </div>
          <Chart
            chartType="LineChart"
            data={boulderRateData}
            options={{}}
            graph_id="BoulderRateChart"
            width="50vw"
            height="50vh"
          />
        </div>
        <div className="card">
          <div className="chart-title">
            <h3>Successes Rate at Each Roped Grade</h3>
          </div>
          <Chart
            chartType="LineChart"
            data={ropeRateData}
            options={{}}
            graph_id="RopeRateChart"
            width="50vw"
            height="50vh"
          />
        </div>
        <div className="card">
        <div className="chart-title">
          <h3>Successes at Each Boulder Grade</h3>
        </div>
          <Chart
            chartType="BarChart"
            data={boulderSuccessData}
            options={{}}
            graph_id="BoulderChart"
            width="50vw"
            height="50vh"
          />
        </div>
        <div className="card">
        <div className="chart-title">
          <h3>Successes at Each Roped Grade</h3>
        </div>
          <Chart
            chartType="BarChart"
            data={ropeSuccessData}
            options={{}}
            graph_id="RopeChart"
            width="50vw"
            height="50vh"
          />
        </div>
      </div>
    </div>
  )
}

export default ChartsContainer
