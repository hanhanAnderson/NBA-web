import React from 'react'

import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';

import { Radio, Switch } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        chartType: "hexbin",
        displayToolTips: true,
        minCount : 2
    }

    onMinCountChange = (minCount) => {
        // console.log('minCount Changes',minCount);
        this.setState({minCount: minCount});
    }

    onChartTypeChange = (e) => {
        // console.log('radio checked', e.target.value);
        this.setState({
            chartType: e.target.value,
        });
    }

    onTooltipChange = (displayTooltips) => {
        // console.log('displayTooltips', displayTooltips);
        this.setState({ displayTooltips });
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    displayToolTips={true}
                    chartType={"hexbin"}
                />
                <CountSlider onChange = {this.onMinCountChange}/>
                <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                    <Radio value={"hexbin"}>Hexbin</Radio>
                    <Radio value={"scatter"}>Scatter</Radio>

                </RadioGroup>
                <Switch onChange = {this.onTooltipChange} checkedChildren="On" unCheckedChildren="Off" defaultChecked />

            </div>
        );
    }
}