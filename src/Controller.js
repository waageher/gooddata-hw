// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import Model from './Model.js';
import View from './View.js';

class Controller extends Component {

    projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
	defaultConfiguration = {month: 0, year: 2016};

	constructor(props) {
    	super(props);
        this.model = new Model();
        this.view = new View(this);

    	this.state = {
    		month: this.getMonths().defaultValue,
    		year: this.getYears().defaultValue
    	};

    	this.selectChange = this.selectChange.bind(this);
  	}

    selectChange(e) {
    	const val = parseInt(e.target.value);
    	const dataType = e.target.getAttribute("data-type");
    	this.setState((state, props) => {
  			return {[dataType]: val};
		});
    }

    determineDefaultValue(values, possibleDefaultValue) {
        return values.includes(possibleDefaultValue) ? possibleDefaultValue : values[0];
    }

    getYears() {
        const years = this.model.getAllYears();
        return {
            defaultValue: this.determineDefaultValue(years, this.defaultConfiguration.year),
            values: years
        };
    }

    getMonths() {
        const months = this.model.getAllMonths();
        return {
            defaultValue: this.determineDefaultValue(months, this.defaultConfiguration.month),
            values: months
        };
    }

    render() {
        const filters = [this.model.getFilter(this.state.month, this.state.year)];
        const measures = this.model.getMeasures();
        const viewBy = this.model.getViewBy();

        return this.view.render(this.projectId, filters, measures, viewBy);
    }
}

export default Controller;
