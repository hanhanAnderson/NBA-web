import React from 'react'
import {
    Slider, InputNumber, Row, Col,
  } from 'antd';
  
  export class CountSlider extends React.Component {
    state = {
      inputValue: 2,
    }
  
    onChange = (value) => {
      this.setState({
        inputValue: value,
      });
      this.props.onChange(value);
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
  
  