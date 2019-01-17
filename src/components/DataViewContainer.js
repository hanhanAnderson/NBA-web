import React from 'react'
import _ from 'lodash';

import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';


import { Radio, Switch, Row, Col } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        chartType: "hexbin",
        displayToolTips: true,
        minCount: 2
    }

    onMinCountChange = (minCount) => {
        // console.log('minCount Changes',minCount);
        this.setState({ minCount: minCount });
    }

    onChartTypeChange = (e) => {
        // console.log('radio checked', e.target.value);
        this.setState({
            chartType: e.target.value,
        });
    }

    onTooltipChange = (displayToolTips) => {
        // console.log('displayTooltips', displayTooltips);
        this.setState({ displayToolTips });
    }

    render() {
        // const {chartType, minCount, displayTooltips} 
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    displayToolTips={true}
                    chartType={this.state.chartType}
                />
                {this.state.chartType === 'hexbin' ? (
                    <Row className="filter-row">
                      <Col span={2} offset={3} className="filter-label">Shots:</Col>
                      <Col span={16}>
                        <CountSlider value={this.state.minCount} onChange={_.debounce(this.onMinCountChange, 500)} className="filter-control" />
                      </Col>
                    </Row>
                  ) : null}
                <Row className="filter-row">
                    <Col span={10} offset={3}>
                        <RadioGroup className="filter-control" onChange={this.onChartTypeChange} value={this.state.chartType}>
                            <Radio value={"hexbin"}>Hexbin</Radio>
                            <Radio value={"scatter"}>Scatter</Radio>
                        </RadioGroup>
                    </Col>
                    <Col span={2}>Tooltip:</Col>
                    <Col span={3} className = "filter-control">
                        <Switch onChange={this.onTooltipChange} checkedChildren="On" unCheckedChildren="Off" defaultChecked />
                    </Col>
                </Row>
            </div>
        );
    }
}