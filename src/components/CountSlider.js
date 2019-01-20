import React from 'react'
import {
    Slider, InputNumber, Row, Col,
  } from 'antd';
  
  export class CountSlider extends React.Component {
    state = {
      inputValue: this.props.value,
    }
  
    onChange = (value) => {
      let cleanValue = Number(value) ? value : this.state.inputValue;
      cleanValue = (cleanValue < 2|| cleanValue > 20 )? this.state.inputValue : cleanValue;
      this.setState({
        inputValue: cleanValue,
      });
      this.props.onChange(cleanValue);
    }
  
    render() {
      const { inputValue } = this.state;
      return (
        <Row>
          <Col offset = {4} span={12}>
            <Slider
              min={2}
              max={20}
              onChange={this.onChange}
              value={typeof inputValue === 'number' ? inputValue : 2}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={2}
              max={20}
              style={{ marginLeft: 16 }}
              value={inputValue}
              onChange={this.onChange}
            />
          </Col>
        </Row>
      );
    }
  }
  
  